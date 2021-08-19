---
id: two-tables-have-exactly-the-same-data-in-bigquery
title: "BigQuery テーブル同士の一致判定"
author: Naofumi Yamada
author_title: Data Engineer
author_url: https://github.com/na0fu3y
author_image_url: https://avatars0.githubusercontent.com/u/17900178?s=400&v=4
tags: [bigquery]
---

# はじめに
[テーブルの一致判定のクエリを知りたい](https://github.com/na0fu3y/na0fu3y.github.io/issues/26) の対応記事です。
BigQuery テーブルは、リレーショナルデータベースに比べて、強い制約をかけにくいです。
そのため、テスト時には一致性検証が重要になってくるでしょう。
この記事では、BigQuery テーブル一致性を判定するクエリを紹介します。

<!--truncate-->

# そもそも一致性判別とは
BigQuery の 2 つのテーブルを比較して、同一の列を同一の数持っている状態をチェックすることとします。

# 一致性判別の方法
以下、どのやり方も列順が一致している必要がある点に留意してください。
これは BigQuery の UNION は列名ではなく順序で結合を行うためで、任意スキーマでは対応困難です。

## 任意のスキーマのテーブル

### EXCEPT DISTINCT による対称差
最もお手軽なやり方です。EXCEPT DISTINCT を 2 つのテーブルで双方向に行い、対称差を求めます。
対称差が存在しなければ、一致していると見なすことができます。

```sql
SELECT
  *
FROM
  (SELECT * FROM table1 EXCEPT DISTINCT SELECT * FROM table2)
UNION ALL
SELECT
  *
FROM
  (SELECT * FROM table2 EXCEPT DISTINCT SELECT * FROM table1)
```

しかし、Groupable でない型 ARRAY, STRUCT, GEOGRAPHY には対応できない問題があります。
加えて、同値行が存在する場合に対応できない問題もあります。
同値行は、リレーショナルデータベースの正しいテーブル設計ではないでしょうが、データ処理の中間で発生し得るため対応できるに越したことはないです。
これらの問題が回避できるテーブルであれば、この対称差を用いたやり方がおすすめです。

### FULL JOIN 対称差
テーブルを STRUCT とみなして FULL JOIN して対称差を求めるやり方です。
対称差が存在しなければ、一致していると見なすことができます。
上のやり方に対して、STRUCT に対応する優位性があります。

```sql
SELECT
  table1.primary_key,
  table2.primary_key
FROM
  table1
FULL JOIN
  table2
ON
  table1=table2
WHERE
  table1.primary_key IS NULL
  OR table2.primary_key IS NULL
```

しかし、Comparable でない型 ARRAY, GEOGRAPHY には対応できない問題があります。
加えて、同値行が存在する場合に対応できない問題は残ったままです。
また、JOIN できたかの判別のために Nullable でない列が 1 列分かっている必要があります。
これは、JOIN 時の STRUCT に対して IS NULL がうまく機能しないことの対応になります。

### FORMAT("%T") & COUNT
型への依存をなくすべく FORMAT("%T")、同値列に対応すべく COUNT を挟んだやり方です。
任意の型と、同値行に対応します。

```
SELECT
  *
FROM (
  SELECT
    FORMAT("%T", table1)s,
    COUNT(*)c
  FROM
    table1
  GROUP BY
    s)l
FULL JOIN (
  SELECT
    FORMAT("%T", table2)s,
    COUNT(*)c
  FROM
    table2
  GROUP BY
    s)r
ON
  l=r
WHERE
  l.c IS NULL
  OR r.c IS NULL
```

半面、FORMAT("%T") で BigQuery 内部容量が 100 MB を超える行に対応できません。
容量上限に妥協でき、ARRAY や GEOGRAPHY を含む任意のテーブルに対応したい場合は、このやり方をお勧めします。

## 既知のスキーマのテーブル
スキーマが分かるなら、全ての列を Groupable な型に変換して COUNT すると、列の並び順、同値行、型、容量上限のデメリットを消し去ることが可能です。
GEOGRAPHY 型は、ST_ASBINARY などの関数で、BYTES 型か STRING 型に変換します。
STRUCT 型は、解体します。ARRAY 型は FORMAT("%T") で STRING 型に変換します。
より堅牢にやるには、UNNEST WITH OFFSET で同値比較すべきですね。

```sql
WITH
  table1 AS(
  SELECT
    1 int64_value,
    STRUCT(NUMERIC '0.1' AS numeric_value,
      b'0' AS bytes_value)struct_value,
    ST_GEOGPOINT(45,
      45)geography_value,
    [1,
    2]array_value),
  table2 AS(
  SELECT
    1 int64_value,
    STRUCT(NUMERIC '0.1' AS numeric_value,
      b'0' AS bytes_value)struct_value,
    ST_GEOGPOINT(45,
      45)geography_value,
    [1,
    2]array_value)
SELECT
  l,
  r
FROM (
  SELECT
    int64_value,
    struct_value.numeric_value numeric_value,
    struct_value.bytes_value bytes_value,
    ST_ASBINARY(geography_value)geography_value,
    FORMAT("%T", array_value)array_value,
    COUNT(*)c
  FROM
    table1
  GROUP BY
    int64_value,
    numeric_value,
    bytes_value,
    geography_value,
    array_value)l
FULL JOIN (
  SELECT
    int64_value,
    struct_value.numeric_value numeric_value,
    struct_value.bytes_value bytes_value,
    ST_ASBINARY(geography_value)geography_value,
    FORMAT("%T", array_value)array_value,
    COUNT(*)c
  FROM
    table2
  GROUP BY
    int64_value,
    numeric_value,
    bytes_value,
    geography_value,
    array_value)r
ON
  l=r
WHERE
  l.c IS NULL
  OR r.c IS NULL
```


# まとめ
テーブル一致性判別の方法を 4 種類紹介しました。
どの方法もメリットデメリットありますが、テーブル一致性判別はクエリのテストをする上で重要な観点です。
ぜひ、ベストな方法を模索していきましょう。
