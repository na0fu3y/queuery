---
id: sql-test-and-data-check
title: "分析 SQL のテストとデータチェックスタイルの提案"
author: Naofumi Yamada
author_title: Data Engineer
author_url: https://github.com/na0fu3y
author_image_url: https://avatars0.githubusercontent.com/u/17900178?s=400&v=4
tags: [bigquery]
---

この記事は bq_sushi で発表した [BigQuery データ前処理の暗黒面](https://docs.google.com/presentation/d/e/2PACX-1vQa0h1sf1UQLOR8Owj00fkDaG_QberK-8M-4RYAFF8IBC8JYyDlADETxCfza7aynVzm9L3-9TkCz-_r/pub?slide=id.g7b4fd3bc26_0_0) の個人的な解説です。

<!--truncate-->

# はじめに
従来のオンプレミスのリレーショナルデータベース（Oracle や SQL Server、MySQL など）では、なるべく処理を少なくするため、データ中心の比較的短い SQL を記述していました。しかし、BigQuery ではコスパ良くデータ処理を実行するには、手続き中心の比較的長い SQL を記述する必要があります。

コーディング規約（[Bigquery時代における、分析SQLコーディングスタイルの提唱](https://qiita.com/piyoSakai/items/e1b97366ca5940dad517) や [分析SQLのコーディングスタイル](https://techlife.cookpad.com/entry/2016/11/09/000033)）の議論はありますが、SQL の継続的な開発論は確立していなさそうです。

本稿では、**SQL をテスト駆動開発に乗せ、継続的な開発運用を行う** ことを目的とし、分析 SQL のテスト手法とデータ品質の同定法について述べます。

# 分析 SQL のテスト手法
分析 SQL をテスト可能にするため、以下の工程を踏みます。
1. 意味のある単位でサブクエリを FUNCTION か WITH 句に分離する。
2. 可変テーブルへの参照を全てローカル参照に置き換え、SQL ファイルとして保存する。
3. テスト用の入出力ファイルを作る。
4. SQL ファイルに、テスト用の入出力ファイルを FUNCTION か WITH 句として結合する。
5. テスト用の入力時に、テスト用出力が返ってくるかテーブルを比較する。

## 意味のある単位でサブクエリを FUNCTION か WITH 句に分離する。
以下のクエリを例に始めてみましょう。まずは意味単位にファイル分割です。

```sql
  -- 誕生日の 5% 点を見つける関数
  -- 外れ値の除去に利用する
CREATE TEMP FUNCTION
  birth_date_percentile_5()AS((
    SELECT
      APPROX_QUANTILES(birth_date,100)[
    OFFSET
      (5)]
    FROM
      mydataset.dirty_user_master));

WITH
  -- ユーザ情報をきれいにしたテーブル
  -- user_id: ユーザを一意に特定する主キー。
  -- gender: 性別、'男' か '女' か NULL を持つ。
  -- birth_date: 5% 点と 18 歳以上でクレンジングした誕生日。
  -- zip_code: ハイフンなし 7 桁の郵便番号。
  `user_master`AS(
  SELECT
    user_id,
    ANY_VALUE(CASE gender
        WHEN 1 THEN '男'
        WHEN 2 THEN '女'
      ELSE
      NULL
    END
      ) gender,
    ANY_VALUE(
    IF
      (birth_date_percentile_5()<=birth_date
        AND birth_date<DATE_SUB(CURRENT_DATE(),INTERVAL 18 YEAR),
        birth_date,
        NULL))birth_date,
    ANY_VALUE(
    IF
      (REGEXP_CONTAINS(zip_code, "^\\d{7}$"),
        zip_code,
        NULL))zip_code
  FROM
    my_dataset.dirty_user_master
  GROUP BY
    user_id),

  -- 購買情報をきれいにしたテーブル
  -- user_id: ユーザを一意に特定するキー。
  -- datetime: 取引日。
  -- amount: 購入金額、返品でマイナスになるのを除去してある。
  -- item_id: 商品を一意に特定するキー。
  `pos`AS(
  SELECT
    DISTINCT user_id,
    DATETIME(date,
      time)datetime,
    amount,
    item_id
  FROM
    mydataset.dirty_pos
  WHERE
    amount>0),

  -- pos から RFM 分析した特徴量テーブル
  -- user_id: ユーザを一意に特定するキー。
  -- recency: 最新購入日。
  -- frequency: 購買日数。
  -- monetary: 総購買金額。
  `rfm_feature`AS(
  SELECT
    user_id,
    MAX(datetime)recency,
    COUNT(DISTINCT DATE(datetime))frequency,
    SUM(amount)monetary
  FROM
    pos
  GROUP BY
    user_id),

-- 機械学習に投入するデータ
-- user_id: ユーザを一意に特定する主キー。
-- gender: 性別、'男' か '女' か NULL を持つ。
-- birth_date: 5% 点と 18 歳以上でクレンジングした誕生日。
-- zip_code: ハイフンなし 7 桁の郵便番号。
-- recency: 最新購入日。
-- frequency: 購買日数。
-- monetary: 総購買金額。
SELECT
  user_id,
  gender,
  birth_date,
  zip_code,
  recency,
  frequency,
  monetary
FROM
  user_master
LEFT JOIN
  rfm_feature
USING
  (user_id)
```

### birth_date_percentile_5

```sql
(
  SELECT
    APPROX_QUANTILES(birth_date,100)[
  OFFSET
    (5)]
  FROM
    mydataset.dirty_user_master)
```

### user_master
```sql
SELECT
  user_id,
  ANY_VALUE(CASE gender
      WHEN 1 THEN '男'
      WHEN 2 THEN '女'
    ELSE
    NULL
  END
    ) gender,
  ANY_VALUE(
  IF
    (birth_date_percentile_5()<=birth_date
      AND birth_date<DATE_SUB(CURRENT_DATE(),INTERVAL 18 YEAR),
      birth_date,
      NULL))birth_date,
  ANY_VALUE(
  IF
    (REGEXP_CONTAINS(zip_code, "^\\d{7}$"),
      zip_code,
      NULL))zip_code
FROM
  my_dataset.dirty_user_master
GROUP BY
  user_id
```

### pos

```sql
SELECT
  DISTINCT user_id,
  DATETIME(date,
    time)datetime,
  amount,
  item_id
FROM
  mydataset.dirty_pos
WHERE
  amount>0
```

### rfm_feature
```sql
SELECT
  user_id,
  MAX(datetime)recency,
  COUNT(DISTINCT DATE(datetime))frequency,
  SUM(amount)monetary
FROM
  pos
GROUP BY
  user_id
```
### concatinated_features
```sql
SELECT
  user_id,
  gender,
  birth_date,
  zip_code,
  recency,
  frequency,
  monetary,
  rfm_array
FROM
  user_master
LEFT JOIN
  rfm_feature
USING
  (user_id)
LEFT JOIN
  rfm_feature_array
USING
  (user_id)
```

## 可変テーブルへの参照を全てローカル参照に置き換え、SQL ファイルとして保存する。
分割が終わったら、FUNCTION 以外のいくつか持っている参照を全てローカル参照に置き換えます。これをやっておくことでテストの時には、WITH 句でテストデータを投入、実利用時は WITH 句で実テーブル投入ができます。
テーブル参照を持つ FUNCTION に関しては取り除けない（ARRAY_AGG して引数に渡せば小さいテーブルは渡せるが大きいテーブルに対応できない）ので、そのまま参照透過性を保証する必要がある。

### birth_date_percentile_5
諦めて放置か、これくらいならクエリが正しいことをレビューにて通す。
今回は、ARRAY_AGG した結果を受け取ることにして対応する。

```sql
(
  SELECT
    APPROX_QUANTILES(birth_date,100)[
  OFFSET
    (5)]
  FROM
    UNNEST(birth_dates)birth_date)
```

### user_master
FROM 句を書き換え、CURRENT_DATE() は再現性がないので、関数として切り出して定数を入れた。

#### MY_CURRENT_DATE

```sql
'2019-12-10'
```

#### user_master
```sql
SELECT
  user_id,
  ANY_VALUE(CASE gender
      WHEN 1 THEN '男'
      WHEN 2 THEN '女'
    ELSE
    NULL
  END
    ) gender,
  ANY_VALUE(
  IF
    (birth_date_percentile_5()<=birth_date
      AND birth_date<DATE_SUB(MY_CURRENT_DATE(),INTERVAL 18 YEAR),
      birth_date,
      NULL))birth_date,
  ANY_VALUE(
  IF
    (REGEXP_CONTAINS(zip_code, "^\\d{7}$"),
      zip_code,
      NULL))zip_code
FROM
  dirty_user_master
GROUP BY
  user_id
```

### pos
FROM 句を書き換え。

```sql
SELECT
  DISTINCT user_id,
  DATETIME(date,
    time)datetime,
  amount,
  item_id
FROM
 dirty_pos
WHERE
  amount>0
```

### rfm_feature
そのまま。

```sql
SELECT
  user_id,
  MAX(datetime)recency,
  COUNT(DISTINCT DATE(datetime))frequency,
  SUM(amount)monetary
FROM
  pos
GROUP BY
  user_id
```

### concatinated_features
そのままです。

```sql
SELECT
  user_id,
  gender,
  birth_date,
  zip_code,
  recency,
  frequency,
  monetary,
  rfm_array
FROM
  user_master
LEFT JOIN
  rfm_feature
USING
  (user_id)
LEFT JOIN
  rfm_feature_array
USING
  (user_id)
```

## テスト用の入出力ファイルを作る。
網羅しようとすると結構工数かかりますが、境界値の JOIN など甘くなりやすいところに気をつけてテスト用データを作ります。利用回数の多いものは確実に、テストしたくないものは念入りに、どうしてもコストがかかるところはレビューで誤魔化します。

### dirty_user_master
クレンジング前のユーザマスタです。

```sql
SELECT
  *
FROM
  UNNEST([STRUCT(2 AS user_id,
      1 AS gender,
      DATE'1600-01-01'AS birth_date,
      '1234567'AS zipcode),(2,
      1,
      '1900-01-01',
      '1234567'),(3,
      2,
      '2000-12-12',
      '126123'),(4,
      2,
      '2000-12-12',
      '1234321'),(5,
      2,
      '2100-12-12',
      '1234321')])
```

### user_master
クレンジング後に期待するユーザマスタです。

```sql
SELECT
  *
FROM
  UNNEST([STRUCT(2 AS user_id,
      1 AS gender,
      DATE'1900-01-01'AS birth_date,
      '1234567'AS zipcode),(4,
      2,
      '2000-12-12',
      '1234321')])
```

### dirty_pos
クレンジング前の購買情報です。

```sql
SELECT
  *
FROM
  UNNEST([STRUCT(2 AS user_id,
      DATE'2000-01-01'AS date,
      TIME'12:12:12'AS time,
      1 AS amount,
      'A'AS item_id),(4,
      '2000-12-12',
      '12:00:00',
      1,
      'A'),(4,
      '2000-12-12',
      '12:04:00',
      -1,
      'A'),(4,
      '2000-12-12',
      '12:04:00',
      2,
      'B'),(5,
      '2001-12-12',
      '18:00:00',
      2,
      'B')])
```

### dirty_pos
クレンジング後に期待する購買情報です。

```sql
SELECT
  *
FROM
  UNNEST([STRUCT(2 AS user_id,
      DATETIME'2000-01-01T12:12:12'AS datetime,
      1 AS amount,
      'A'AS item_id),(4,
      '2000-12-12T12:00:00',
      1,
      'A'),(4,
      '2000-12-12T12:04:00',
      2,
      'B'),(5,
      '2001-12-12T18:00:00',
      2,
      'B')])
```

## rfm_feature

```sql
SELECT
  *
FROM
  UNNEST([STRUCT(2 AS user_id,
      DATETIME'2000-01-01T12:12:12'AS recency,
      1 AS frequency,
      'A'AS monetary),(4,
      '2000-12-12T12:04:00',
      2,
      3),(5,
      '2001-12-12T18:00:00',
      1,
      2)])
```


## SQL ファイルに、テスト用の入出力ファイルを FUNCTION か WITH 句として結合する。
SQL の依存関係を解消できるようにクエリを結合します。いろいろ試行錯誤しながら、これができるフレームワークを作っているので、ある程度の完成度になったらお披露目します。
最低限、任意のプログラミング言語から、sql ファイルを読み込んで中身をフォーマット文字列に入れられれば良いです。

```sql
WITH
  dirty_user_master AS(/* dirty_user_master のクエリを埋め込む */),
  actual AS(/* user_master のクエリを埋め込む */),
  expected AS(/* user_master の期待値クエリを埋め込む */)
```

## テスト用の入力時に、テスト用出力が返ってくるかテーブルを比較する。
上のクエリをくっつければテストクエリの完成です。
同じ列（重複、配列、構造体非対応）なら TRUE を返し、そうでないなら ERROR を吐くようになっています。

```sql
SELECT
IF
  (EXISTS((
      SELECT
        *
      FROM
        expected EXCEPT DISTINCT
      SELECT
        *
      FROM
        actual)
    UNION ALL (
      SELECT
        *
      FROM
        actual EXCEPT DISTINCT
      SELECT
        *
      FROM
        expected)),
    ERROR(TO_JSON_STRING(STRUCT('ValidationError'AS message,
          ['actual does not equal expected']AS errors))),
    TRUE)
```


以上で、簡単なテストはできるようになりました。
テストがないと運用時に動作保証ができなくなってしまうので、BigQuery で処理を多段に行う際には、テストを書くようにしています。

# データ品質の同定法
これまでで、データ変換のテストができるようになりました。
しかし、機械学習のプロジェクトを継続的に回すためには、データ変換のテストだけでは不十分です。入力データが劣化していないか調べる必要があります。これに関しては、リレーショナルデータベースの制約確認と、要約統計量の比較によってコントロールできるのではと仮説を立てて仕組みづくりを行っています。

## リレーショナルデータベースの制約
リレーショナルデータベースに存在し、BigQuery に存在しないのが、制約です。
1. CHECK
2. NOT NULL
3. UNIQUE
4. FOREIGN KEY
については、とても重要な制約ですので、データ分析を行う際には気をつけているのではないでしょうか。

### CHECK
check expression が成り立っていない列がないか確認します。
社内では標準スキーマを定義しておいて、スキーマベースで値域やフォーマットチェックを行っています。

```sql
SELECT
IF
  (EXISTS((
      SELECT
        *
      FROM
        my_dataset.my_table
      WHERE
        NOT /* check expression */)),
    ERROR(TO_JSON_STRING(STRUCT('ValidationError'AS message,
          ['checks failed']AS errors))),
    TRUE)
```

### NOT NULL
column が NULL でないことを確認します。BigQuery の REQUIRED で済めばいいのですが、お客様からいただくデータのフォーマットが揺れた時に対処できないため、NULLABLE で取り込んでこのチェックを実施するようにしています。

```sql
SELECT
IF
  (EXISTS((
      SELECT
        *
      FROM
        my_dataset.my_table
      WHERE
        /* column */ IS NULL)),
    ERROR(TO_JSON_STRING(STRUCT('ValidationError'AS message,
          ['checks failed']AS errors))),
    TRUE)
```

### UNIQUE
column1, column2 がユニークであることを確認します。ユニーク保証ができないので、時折確認しておかないと、ユニークキーだと思い込んでいるものの JOIN でテーブルが大きくなって取り返しのつかないことになります。

```sql
SELECT
IF
  (EXISTS((
      SELECT
        *
      FROM
        my_dataset.my_table
      WHERE
        /* column1 */ IS NOT NULL
        AND /* column2 */ IS NOT NULL
      GROUP BY
        /* column1 */,
        /* column2 */
      HAVING
        COUNT(*)>1)),
    ERROR(TO_JSON_STRING(STRUCT('ValidationError'AS message,
          ['checks failed']AS errors))),
    TRUE)
```

### FOREIGN KEY
my_table1.key1, key2 が my_table2.key1, key2 を全て含有していることを確認します。外部キー制約がついておらず、手動運用の末に不整合が起きているデータも見かけます。そのようなデータに対し外部キー制約が必要な時は以下のクエリで確認し、必須でないなら不整合割合を見て問題の大きさによって無視することもあります。

```sql
SELECT
IF
  (EXISTS((
      SELECT
        *
      FROM
        my_dataset.my_table1
      LEFT JOIN
        my_dataset.my_table2
      ON
        my_table1.key1=my_table2.key1
        AND my_table1.key2=my_table2.key2
      WHERE
        my_table2.key1 IS NULL
        OR my_table2.key2 IS NULL)),
    ERROR(TO_JSON_STRING(STRUCT('ValidationError'AS message,
          ['checks failed']AS errors))),
    TRUE)
```

## 要約統計量の比較
制約だけでは、データの質が変わったことを検知できません。これを検知するために、社内では要約統計量を算出しています。超巨大なデータも要約統計量を一度計算しておけば、比較のコストが小さい点も魅力です。手動でチェックする場合には、カテゴリ変数に差異がないか、ヒストグラムに大きなずれがないかを目視するようにしています。

### Tensorflow Data Validation
Tensorflow Data Validation は visualize_statistics でデータの可視化、validate_statistics にてデータの同定を行ってくれます。

### pandas-profiling
pandas-profiling はもう少し小さなデータセット向きで、データの可視化を行ってくれます。小さくて初めましてのデータについてはこれがお手軽です。

### bq_profile
[bq_profile](https://qiita.com/rhoboro/items/c61e81246f87d346e656) は同僚の rhoboro 氏に作っていただいた、BigQuery で要約統計量を見たいときに使えるツールです。
可視化よりも、継続していくプロジェクトの中でデータ品質の劣化がないか確かめるのに重きをおいて作って（いると認識して）おり、大きなデータセットに対しても高速に動作するため多用しています。

# おわりに

要約統計量の比較はツール紹介になってしまいましたが、社内では BigQuery をいかに運用品質で使っていくかを検討しています。そのために、データ変換が間違っていないこと、入力データ品質に劣化がないことを確認する仕組みとして上記のような仕組みを試しています。もし良いやり方をご存知であれば、ぜひ教えてください。


