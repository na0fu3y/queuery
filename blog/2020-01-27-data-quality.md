---
id: data-quality
title: "BigQuery データ品質のチェック方針"
author: Naofumi Yamada
author_title: Data Engineer
author_url: https://github.com/na0fu3y
author_image_url: https://avatars0.githubusercontent.com/u/17900178?s=400&v=4
tags: [bigquery, dataquality]
---

# 目的
機械学習でデータを利用する際、十分にきれいなデータを入力した方が大抵のケースで有望です。
汚いデータも使わないよりはマシである可能性もありますが、そのようなデータは継続的に同程度の品質を持っているか検証が困難なことを認識して利用すべきでしょう。
しかし、十分にきれいなデータかどうかを保証する観点は少ないです。

この記事では、実際的な、データ品質チェックの方法論をまとめました。

<!--truncate-->

# データ品質 3 つ
ここでは、感覚値により 3 段階のデータ品質を定義します。

品質 | 機械学習 PoC に使えるか | 機械学習プロダクトに使えるか |
-|-|-
解釈不能|x|x
頑張れば使える汚さ|o|x
きれい|o|o

機械学習 PoC で使えるデータかどうかを検証したら、プロダクションに向けてデータ収集から設計する方が良い場合も多いです。
データ品質の安定は、意思決定の安定をもたらします。

## 解釈不能
実世界の何を表しているのか不明なデータ。
寄与率が出ていても意思決定に使えないため、ゴミになることが多いです。

## 頑張れば使える汚さ
直接取り込める形ではないけれど、人が頑張ってクレンジング、アノテーションが可能なデータ。
お客さんから普通にもらうデータは大抵これです。
目的変数との関係を仮説立てることができるかによって頑張る度合いが変わります。
- フリーコメント
- 別な実態が同じ値として扱われる列（同じ S サイズでも、服と靴、メーカーなど他の列に依存する）
- 同じ実態が別な値として扱われる列（"S", "Ｓ" が混在する）

## きれい
直接取り込める形であり、ほとんどクレンジングを必要としないデータ。
法律が絡む伝票などはきれいなことが多いです。
- ER 図が存在する
- RDB の各種制約が守られている
- 同じ実態が同じ値として扱われ、別な実態が別な値として扱われている


# 観点リスト
解釈不能なデータを使えるようにはできないですが、頑張れば使える汚さのデータの品質が安定しているかを確かめることはできます。
ここでは、データの品質が安定しているかチェックするのに利用している観点をまとめます。
TensorFlow Data Validation でも算出している観点が多いですが、BigQuery 上のデータを素早くチェックするための StandardSQL を併せて紹介します。

## 1回目以降-観点リスト
### CHECK
#### 合意された値域（境界値に注意）
データ分析する人と、データ収集する人が違う場合、データの認識にギャップがある可能性もあります。
値域を確認しましょう。

~~~sql
SELECT
  IFNULL(LOGICAL_AND('1900-01-01' < birth_date),
    TRUE)
FROM
  UNNEST([DATE "2000-01-01", "9999-12-31"]) birth_date
~~~

#### 論理的に納得できる値域
論理的にあり得ない数値は、少数であれば精度への影響は少ないでしょうが、クレンジングできる方が好ましいでしょう。
列の利用用途から説明可能な地域であるか確認しましょう（そうでなければ意思決定に使えない）。

~~~sql
SELECT
  IFNULL(LOGICAL_AND(age < 100),
    TRUE)
FROM
  UNNEST([-150, 20, 99]) age
~~~

#### 同じ実態は同じ値か
カテゴリカルっぽい物は全部見てみて、同じ実態を指すデータが同じ値であるかチェックしましょう。
深層学習では Embedding により似たような空間にいってくれるので、影響は大きくないでしょうが、クレンジングできるに越したことはありません。

~~~sql
SELECT
  prefecture,
  COUNT(*)
FROM
  UNNEST(['東京', '東京都', '大阪府', '大阪府']) prefecture
GROUP BY
  prefecture
ORDER BY
  prefecture
~~~

#### 違う実態は違う値か
データだけからでは読みとれないことも多いため、ドメイン知識を持った人間と一緒にデータを確認します。
データの洗い替えなどが行われる場合には、同じコードが使いまわされたりします。
時系列で要約統計量を追っていき、変化したタイミングで突き合わせたりする必要があります。

### DEFAULT
デフォルト値を入れていると、データの分布が歪みます。
可能な限り特定して、修正します。

~~~sql
SELECT
IF
  (birth_date = "9999-12-31",
    NULL,
    birth_date) birth_date
FROM
  UNNEST([DATE "2000-01-01", "9999-12-31"]) birth_date
~~~

### PRIMARY KEY
リレーショナルデータベースをダンプした物であれば、主キーを特定しましょう。
主キーが正しく使われていると過信すると、結合の際に列が増えて大変です。

~~~sql
SELECT
  COUNT(*) = COUNT(DISTINCT user_id)
FROM
  UNNEST([0, 1000, 1001]) user_id
~~~

### FOREIGN KEY
可能なら外部キーも特定し、関係が正しく追えるか確認しましょう。
結合できないデータが頻発する場合には、その関係を機械学習に盛り込むのを諦めざるを得ないでしょう。

~~~sql
SELECT
  IFNULL(LOGICAL_AND(item_master_item_id IS NOT NULL),
    TRUE)
FROM
  UNNEST([5, 7, 8, 8]) sales_trans_item_id
LEFT JOIN
  UNNEST([1,2,3,4,5,6,7,8]) item_master_item_id
ON
  item_master_item_id = sales_trans_item_id
~~~

### 要約統計量
#### 1 percentile & 99 percentile
デフォルト値や番兵用レコードなど実態を表現しないデータが現れたりします。
データの中身は全て一定品質であることを保証するため、番兵用レコードなどはクレンジング対象です。

### その他重要な指標
#### NULL 率
NOT NULL に限らず、ほぼ NULL でないことを期待していることがあります。
NULL に引っ張られて、機械学習モデルの性能が落ちることもあります。

#### UNIQUE 率
UNIQUE に限らず、ほぼ UNIQUE でないことを期待していることがあります。
UNIQUE が増えると、機械学習モデルの性能が落ちることもあります。

#### 欠損日数
毎日欠損なく入っていることが前提のデータは、落ちている日がないか確認しましょう。
落ちている日は定常データでないため、考慮が必要になることがあります。

#### FALSE 率
#### 0 率
#### '' 率
#### []率
#### {} 率
#### 0 未満率


## 2回目以降-観点リスト

### 要約統計量は大きく変化しないか
統計量が変わってると、利用用途が変化した値を含有しており、予測精度の悪化に繋がります。
機械学習の学習フェーズでは検知困難、推論時に劣化が発覚するので、データチェック時に対応できるのが好ましいです。
#### 平均
#### 分散
#### 標準偏差
#### 歪度
#### 尖度
#### 中央値
#### 四分位点
#### 最小値&最大値
#### 最頻値

## データクレンジング品質の観点
### 可逆変換
- 各要素のうちで可逆変換が施された件数と条件。
    - 実業務では PARSE_DATE が多そう。

### 非可逆変換
- 各要素のうちで非可逆変換が施された件数と条件。
    - 実業務では IF, SAFE_CAST が多そう。

### 除去
- 各行のうちで除去された件数と条件。
    - 実業務では WHERE, JOIN に相当。

- 各列のうちで除去された件数と条件。
    - 実業務では SELECT に相当。


## 観点チェック SQL
### CHECK
~~~sql
SELECT
  IFNULL(LOGICAL_AND(birth_date<="2020-01-01"),
    TRUE)
FROM
  UNNEST([DATE "2000-01-01", "9999-12-31"]) birth_date
~~~

### NOT NULL
~~~sql
SELECT
  IFNULL(LOGICAL_AND(birth_date IS NOT NULL),
    TRUE)
FROM
  UNNEST([DATE "2000-01-01", "9999-12-31"]) birth_date
~~~

## UNIQUE
~~~sql
SELECT
  COUNT(birth_date) = COUNT(DISTINCT birth_date)
FROM
  UNNEST([DATE "2000-01-01", "9999-12-31"]) birth_date
~~~

## PRIMARY KEY
~~~sql
SELECT
  COUNT(*) = COUNT(DISTINCT birth_date)
FROM
  UNNEST([DATE "2000-01-01", "9999-12-31"]) birth_date
~~~
## FOREIGN KEY
~~~sql
SELECT
  IFNULL(LOGICAL_AND(item_master_item_id IS NOT NULL),
    TRUE)
FROM
  UNNEST([5, 7, 8, 8]) sales_trans_item_id
LEFT JOIN
  UNNEST([1,2,3,4,5,6,7,8]) item_master_item_id
ON
  item_master_item_id = sales_trans_item_id
~~~

### 要約統計量

各型の SQL を以下のクエリで型変換すれば、UNION ALL できます。
具体的な実装は、[bq_profile](https://github.com/COLORFULBOARD/bq_profile) にもあります。

```sql
SELECT
  CAST(avg AS STRING) avg,
  count_distinct,
  count,
  countif,
  CAST(max AS STRING) max,
  CAST(min AS STRING) min,
  stddev_samp,
  sum,
  var_samp,
  ARRAY(SELECT CAST(v AS STRING) FROM type_datetime.approx_quantiles v) approx_quantiles,
  ARRAY(SELECT STRUCT(CAST(v.value AS STRING) AS value, v.count) FROM type_datetime.approx_top_count v) approx_top_count
```

#### INT64, NUMERIC, FLOAT64
```sql
SELECT
  AVG(v) avg,
  COUNT(DISTINCT v) count_distinct,
  COUNT(v) count,
  COUNTIF(v = 0) countif,
  MAX(v) max,
  MIN(v) min,
  STDDEV_SAMP(v) stddev_samp,
  SUM(v) sum,
  VAR_SAMP(v) var_samp,
  APPROX_QUANTILES(v, 100) approx_quantiles,
  APPROX_TOP_COUNT(v, 100) approx_top_count
FROM
  UNNEST([1.0, 2.0, 3.0]) v
```

#### BOOL
```sql
SELECT
  AVG(IF(v, 1, 0)) avg,
  COUNT(DISTINCT v) count_distinct,
  COUNT(v) count,
  COUNTIF(v = FALSE) countif,
  MAX(v) max,
  MIN(v) min,
  STDDEV_SAMP(IF(v, 1, 0)) stddev_samp,
  NULL sum,
  VAR_SAMP(IF(v, 1, 0)) var_samp,
  APPROX_QUANTILES(v, 100) approx_quantiles,
  APPROX_TOP_COUNT(v, 100) approx_top_count
FROM
  UNNEST([TRUE, FALSE, TRUE]) v
```

#### STRING
```sql
SELECT
  NULL avg,
  COUNT(DISTINCT v) count_distinct,
  COUNT(v) count,
  COUNTIF(v = '') countif,
  MAX(v) max,
  MIN(v) min,
  NULL stddev_samp,
  NULL sum,
  NULL var_samp,
  APPROX_QUANTILES(v, 100) approx_quantiles,
  APPROX_TOP_COUNT(v, 100) approx_top_count
FROM
  UNNEST(['A', 'B', 'A']) v
```

#### BYTES
```sql
SELECT
  NULL avg,
  COUNT(DISTINCT v) count_distinct,
  COUNT(v) count,
  COUNTIF(v = b'') countif,
  MAX(v) max,
  MIN(v) min,
  NULL stddev_samp,
  NULL sum,
  NULL var_samp,
  APPROX_QUANTILES(v, 100) approx_quantiles,
  APPROX_TOP_COUNT(v, 100)  approx_top_count
FROM
  UNNEST([b'aa', b'aa', b'bb']) v
```
#### DATE
```sql
SELECT
  DATE_FROM_UNIX_DATE(CAST(AVG(UNIX_DATE(v)) AS INT64)) avg,
  COUNT(DISTINCT v) count_distinct,
  COUNT(v) count,
  COUNTIF(v = '1970-01-01') countif,
  MAX(v) max,
  MIN(v) min,
  STDDEV_SAMP(UNIX_DATE(v)) stddev_samp,
  NULL sum,
  VAR_SAMP(UNIX_DATE(v)) var_samp,
  APPROX_QUANTILES(v, 100) approx_quantiles,
  APPROX_TOP_COUNT(v, 100) approx_top_count
FROM
  UNNEST([DATE '2018-01-01']) v
```
#### DATETIME
```sql
SELECT
  DATETIME(TIMESTAMP_MICROS(CAST(AVG(UNIX_MICROS(TIMESTAMP(v))) AS INT64))) avg,
  COUNT(DISTINCT v) count_distinct,
  COUNT(v) count,
  COUNTIF(v = '1970-01-01') countif,
  MAX(v) max,
  MIN(v) min,
  STDDEV_SAMP(UNIX_MICROS(TIMESTAMP(v))) stddev_samp,
  NULL sum,
  VAR_SAMP(UNIX_MICROS(TIMESTAMP(v))) var_samp,
  APPROX_QUANTILES(v, 100) approx_quantiles,
  APPROX_TOP_COUNT(v, 100) approx_top_count
FROM
  UNNEST([DATETIME '2018-01-01', '2011-01-01']) v
```
#### GEOGRAPHY
```sql
SELECT
  NULL avg,
  NULL count_distinct,
  COUNT(v) count,
  COUNTIF(ST_ISEMPTY(v)) countif,
  NULL max,
  NULL min,
  NULL stddev_samp,
  NULL sum,
  NULL var_samp,
  APPROX_QUANTILES(ST_ASTEXT(v), 100) approx_quantiles,
  APPROX_TOP_COUNT(ST_ASTEXT(v), 100) approx_top_count
FROM
  UNNEST([ST_GEOGPOINT(45, 45), ST_GEOGPOINT(40, 45)]) v
```
#### TIME
```sql
SELECT
  TIME_ADD('00:00:00', INTERVAL CAST(AVG(TIME_DIFF(v, '00:00:00', MICROSECOND)) AS INT64) MICROSECOND) avg,
  COUNT(DISTINCT v) count_distinct,
  COUNT(v) count,
  COUNTIF(v = '00:00:00') countif,
  MAX(v) max,
  MIN(v) min,
  STDDEV_SAMP(TIME_DIFF(v, '00:00:00', MICROSECOND)) stddev_samp,
  NULL sum,
  VAR_SAMP(TIME_DIFF(v, '00:00:00', MICROSECOND)) var_samp,
  APPROX_QUANTILES(v, 100) approx_quantiles,
  APPROX_TOP_COUNT(v, 100) approx_top_count
FROM
  UNNEST([TIME '12:00:00']) v
```
#### TIMESTAMP
```sql
SELECT
  DATETIME(TIMESTAMP_MICROS(CAST(AVG(UNIX_MICROS(v)) AS INT64))) avg,
  COUNT(DISTINCT v) count_distinct,
  COUNT(v) count,
  COUNTIF(v = '1970-01-01') countif,
  MAX(v) max,
  MIN(v) min,
  STDDEV_SAMP(UNIX_MICROS(v)) stddev_samp,
  NULL sum,
  VAR_SAMP(UNIX_MICROS(v)) var_samp,
  APPROX_QUANTILES(v, 100) approx_quantiles,
  APPROX_TOP_COUNT(v, 100) approx_top_count
FROM
  UNNEST([TIMESTAMP '2018-01-01', '2011-01-01']) v
```
#### ARRAY
```sql
SELECT
  NULL avg,
  NULL count_distinct,
  COUNT(v.x) count,
  COUNTIF(ARRAY_LENGTH(v.x) = 0) countif,
  NULL max,
  NULL min,
  NULL stddev_samp,
  NULL sum,
  NULL var_samp,
  NULL approx_quantiles,
  NULL approx_top_count
FROM
  UNNEST([STRUCT([1] AS x)]) v
```
#### STRUCT
ばらさないと計算できません。
```sql
SELECT
  NULL avg,
  NULL count_distinct,
  COUNT(v) count,
  COUNTIF(ST_ISEMPTY(v)) countif,
  NULL max,
  NULL min,
  NULL stddev_samp,
  NULL sum,
  NULL var_samp,
  NULL approx_quantiles,
  NULL approx_top_count
FROM
  UNNEST([STRUCT([1] AS x)]) v
```

# まとめ
ここまで、データの品質のチェック方針をまとめました。
データソースの信頼性に合わせて、データ品質チェックも設計する必要があります。
データソースが外にある場合には、この記事で紹介した内容を自動的に計測する仕組みがあると、データ分析の結果の劣化を防ぐことができるでしょう。