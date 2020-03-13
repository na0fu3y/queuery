---
id: bigquery-cost-performance-tuning
title: "安い速い旨い BigQuery の 19 の最適化法"
author: Naofumi Yamada
author_title: Data Engineer
author_url: https://github.com/na0fu3y
author_image_url: https://avatars0.githubusercontent.com/u/17900178?s=400&v=4
tags: [bigquery]
---

この記事は [Qiita](https://qiita.com/na0/items/2b58237cae08a217e3a7) と同様の内容です。


# はじめに: Google BigQuery は速くて安い
[Google BigQuery](https://cloud.google.com/bigquery/) を使うと、テラバイト程度のデータに対しても、速く安く機械学習の前処理を行うことができます。2019/12/06 現在、[Redshift Spectrum](https://aws.amazon.com/redshift) と同じく、オンデマンドクエリはクエリが参照するデータの容量に対して $5/TB が課金されます。その上、Redshift Spectrum より早いのですから、使わない理由がありません。

<!--truncate-->

その課金形態ゆえ、全データ処理を 1 つのクエリにおさめ、1 クエリで全てが完了するように書くことで料金を最小化できます。テーブル参照を最少クエリ数に留めるため、処理単位でテーブルを入出力するのを避ける必要があります。
ただし、6 時間以内に完了しないクエリは、以下のエラーで停止します。
```
Operation timed out after 6.0 hours. Consider reducing the amount of work performed by your operation so that it can complete within this limit.
```

分離して実行時間を抑える必要はありますが、料金の観点で見たらクエリの連結が先でしょう。クエリチューニングの話は、記事の後半で記載します。

データ分析 & データベースのクラウドサービスは Redshift や Synapse Analytics、MaxCompute などもありますが料金体系が異なるため、料金最小化の対象外です。

料金最小化だけでなく、データ品質チェック、データ変換テストについても述べますので、そちらは SQL 利用される方にもご参照いただけます。

# BigQuery の上限に引っかからないために
割り当てと上限の詳細な説明は[公式ページ: Quotas and limits](https://cloud.google.com/bigquery/quotas) をご覧ください。
ここでは 2019/12/18 現在、BigQuery でデータ変換を行う際に引っ掛かる上限を抜粋しています。

|クエリジョブ|上限|注意点|
|---|---|---|
|インタラクティブ クエリの同時実行レートの上限|同時実行クエリ 100 個|同時に多量のクエリを投げる場合に注意が必要。実行優先度が低いならばバッチクエリにして回避する。|
|クエリ実行時間の上限|6 時間|他のリソース系例外の方に出くわすことが多い。このエラーが出た時は再実行してみると案外通ったりする。|
|解決済みレガシー SQL クエリおよび標準 SQL クエリの最大長|12 MB|クエリに大量のデータを埋め込むと発生する。テーブルに切り出して対応する。|
|行の最大サイズ|100 MB|ARRAY_AGG で起こることが多い。情報量を落としたり、もう一段 GROUP BY してから ARRAY_AGG することで対応する。|
|テーブル、クエリ結果、ビュー定義での最大列数|10,000|STRUCT や ARRAY を使わずに平らなテーブルを意識して作ると超える。まとめて良さそうなものは STRUCT や ARRAY にまとめると列数が削減できる。|

# まずは公式ドキュメント
これを参考にした上で不足があれば、他の手法を検討してください。

## [クエリ パフォーマンスの最適化の概要](https://cloud.google.com/bigquery/docs/best-practices-performance-overview)

## [BigQuery のおすすめの方法: 費用を抑える](https://cloud.google.com/bigquery/docs/best-practices-costs)


# 料金の最小化法 11 こ
BigQuery のオンデマンドクエリは、一クエリがアクセスするデータ量で課金されます。同じテーブルにアクセスする回数は重要でありません。そのため、アクセス回数を最小化することが、料金最小化の肝になります。
以降は、[BigQuery のおすすめの方法: 費用を抑える](https://cloud.google.com/bigquery/docs/best-practices-costs) のうち、オンデマンドクエリに特化し、実践可能な形に落としたものです。他にもこんな方法で安くしてるよ、といったことがあれば、連絡ください。


## 中間データが不要な処理は WITH 句や VIEW を使ってまとめて実行しよう
BigQuery では、[WITH 句](https://cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax#with-clause) や [VIEW](https://cloud.google.com/bigquery/docs/views) が利用できます。WITH 句はサブクエリを切り出して名前をつけることができるため、サブクエリに比べて読みやすさを維持できます。VIEW も同様ですが、こちらはクエリの永続化ができます。
これらを用いることで、前のクエリの結果を受けて次のクエリを発行する場合や、2 つのクエリが同じテーブルを参照している場合に料金を節約できます。ただ、どちらも参照コストの発生は免れないため、中間データの方が小さい場合には WITH 句や VIEW ではなく、実体テーブルを作ってしまう方が試行錯誤をする際に安く済みます。

## 導出可能属性はテーブルから参照しないようにしよう
導出可能属性をテーブルに出力することは、計算時間削減の役目を持ちますが、BigQuery で参照するのは料金に響いてきます。WITH 句や VIEW を用いて切り出して導出、参照して導出可能属性の参照コスト分だけ料金を節約できます。

## 日付列など導出可能な 1 列はテーブルではなく、関数にしよう
テーブルにしておくと参照コストがかかりますが、関数にして保管しておくと便利で保管料金もかからず、テーブル参照がないなら呼び出しの際に参照料金もかかりません。

```sql
-- 参照コストがかかる例
CREATE TABLE
  my_dataset.my_table AS
SELECT
  target_date
FROM
  UNNEST(GENERATE_DATE_ARRAY('2019-01-01', '2019-12-01'))target_date
```

```sql
-- 参照コストがかからない例
CREATE FUNCTION
  my_dataset.TARGET_DATES()AS(GENERATE_DATE_ARRAY('2019-01-01', '2019-12-01'));
```

## CROSS JOIN は使うときまで待って
CROSS JOIN は最も効率よくテーブルが膨らみます。膨らむと保存コストがかかるので、クエリの中だけで膨らませて、集計して小さくなったものをテーブルに出力しましょう。

## 部分列しか使わないならなるべく小さくしよう
サブクエリで * 参照する場合、出力時に SELECT して必要な列のみ参照されます。しかし、出力時に使うと宣言した列は、参照されてしまうため、出力時には使う列を明示的に SELECT するようにしましょう。

## 部分行しか使わないならパーティショニングしよう
全体テーブルは大きいけど、特定の ID を持つ行だけ参照したいケースでは、[パーティショニング](https://cloud.google.com/bigquery/docs/partitioned-tables) するのがおすすめです。
2020 年 1 月 22 日現在、以下の 3 つのパーティショニングがサポートされています。

- 取り込み時間パーティション分割テーブル: データを取り込んだ（読み込んだ）日付またはデータが着信した日付に基づいてパーティション分割されたテーブル。
- 日付 / 時間パーティション分割テーブル: TIMESTAMP 列または DATE 列を基準にしてパーティション分割されたテーブル。
- 整数範囲パーティション分割テーブル: INT64 列を基準にしてパーティション分割されたテーブル。

参照する際の粒度に合わせて選びましょう。取り込み時間ごとに参照する場合には「取り込み時間パーティション分割テーブル」を利用し、日付ごとに参照する場合には「日付 / 時間パーティション分割テーブル」を選びましょう。ID が INT64 型で入っていて、順序通りに参照する場合には「整数範囲パーティション分割テーブル」が良いでしょう。
このようなケースは稀で、同型 8 種類のテーブルをまとめて同じテーブルに入れてあり、それを分割参照したいなどのケースの方が多いのではないでしょうか。そのような場合には、分割用の列を [無理やり DATE 型に変換](https://qiita.com/na0/items/2086fd93116ee7ce9a96#bigquery-テーブルを-partitioning-する) して「日付 / 時間パーティション分割テーブル」にするのがおすすめです。
以下のような関数で、分割用の列を DATE に変換できます。ただし、分割する際には、1970-01-01 ~ 2159-12-31 の日付でのみパーティショニングされること、一クエリで 1000 個以上のテーブルを同時参照できないことに気をつけましょう。

```sql
CREATE TEMP FUNCTION
  TO_PARTITION_DATE(s ANY TYPE) AS (DATE_FROM_UNIX_DATE(MOD(ABS(FARM_FINGERPRINT(CAST(s AS STRING))), 69396)));
SELECT
  TO_PARTITION_DATE("a") -- 2129-09-29
```

## より小さなデータ構造を選ぼう
[データ型](https://cloud.google.com/bigquery/pricing#data) によってサイズが異なるため、無駄に大きいデータ型を繰り返し利用するとそれだけで料金が増大します。STRING より INT64 を選べないか、INT64 より BOOL を選べないか、1 対多のテーブルを結合した結果なら ARRAY_AGG で繰り返しレコードを減らせないかなどを検討しましょう。

## 時間と手間をかけてもいいなら BigQuery テーブルを GCS の avro に吐き出し手から読みとる
AVRO のデータ圧縮に頼る方法です。読み取りの分だけ所要時間が伸びますが、読み取りデータ量を 20 ％程度削減できます。大きいテーブルで如実に効きますが、読み取り時間も伸びるのであまり利用していません。むしろ、BigQuery 以外（Dataflow, Tensorflow）で読み出す時に使います。

## 一体多のデータは ARRAY で保存しておこう
一体多のデータを展開して保持しておくと、同じ値のレコードを複数保持することになります。クエリ速度は劣化しますが、参照コストを下げるためには繰り返しのデータを避けましょう。多の方のテーブルを ARRAY(SELECT AS STRUCT * FROM table) して、保存コストを小さくしておくと、実際の参照の際にもお安くなります。

## 厳密な分布が要らないならサンプリングしよう
データが膨大で、母集団全域で分析する必要がないのであれば、適切にサンプリングしてお安く分析しましょう。

### 再現性が必要な場合
```sql
SELECT *
FROM UNNEST(GENERATE_ARRAY(1,10000))key
WHERE MOD(ABS(FARM_FINGERPRINT(key)), 10) = 0 )
```
### 再現性が不要な場合
```sql
SELECT *
FROM UNNEST(GENERATE_ARRAY(1,10000))key
WHERE RAND()<0.1
```

## WHERE 句に頻出のフィールドはクラスタ化しよう

詳細は [クラスタ化テーブルの概要](https://cloud.google.com/bigquery/docs/clustered-tables) にありますが、手動でつけると、ベストエフォートで参照フィールドを削減してくれます。LIMIT 句を使う時も有効なようです。

## 90 日間変更しないようにしよう

BigQuery は 90 日間変更がないテーブルを長期保存においてくれて保存コストが半分になります。参照は関係ないので、変更だけないように意識しましょう。変更がある場合も、yyyymmdd のプレフィックスで管理する方が良い解決策になり得ます。


# 実行時間の最小化法 7 こ
## WITH 句や VIEW より実テーブル
WITH 句や VIEW は名前付きサブクエリでしかなく、複数回参照するとその回数だけ計算されます。速度を求める場合には、実テーブルに出力しましょう。トレードオフではありますが、出力テーブルが入力テーブルとの 10 倍以下の容量の時には出力するように意識しましょう（後段の試行錯誤、参照を 10 回以上やる体感に基づいてます）。

## 複雑な条件のデータ存在確認は IN 句より EXISTS 句、EXISTS 句より LEFT JOIN 句
データの存在確認をするような時、様々な実行手段があります。定数比較の場合は、IN 句が早いですが、条件が複雑な場合は LEFT JOIN して WHERE primary_key IS NOT NULL などで主キーの存在確認する方が高速な場合もあります。

## WITH 句の中で多量の集計関数と JOIN を使う時は SELECT する列を少なくする
集計関数や JOIN を多量に行うと CPU 時間を使ってしまい、以下のようなエラーが出ます。
```
Query exceeded resource limits. 60536.97338085516 CPU seconds were used, and this query must use less than 29900.0 CPU seconds.
```
多量の集計関数を使う場合には、集約関数の結果と主キーだけを WITH 句から返し、後から結合すると CPU 時間を節約できることがあります。

## 厳密解や WINDOW 関数がいらないなら APPROX 関数を検討する
COUNT(DISTINCT column) より APPROX_COUNT_DISTINCT(column) の方が高速に動作します。他にも、PERCENTILE_CONT(0.5, column) の代わりに APPROX_QUANTILES(x, 2)[OFFSET(1)] を選ぶなどでクエリの高速化ができます。

## DAU や MAU などの粒度だけ異なる GROUP BY で厳密な値がいらない場合は、HyperLogLog++(HLL++) を検討する
HLL++ は近似計算をしてくれます。厳密な値が必要でない場合、この関数を使うと WINDOW 関数や GROUP BY で対応するのに比べて高速に動作します。

```sql
SELECT DATE_SUB(date, INTERVAL i DAY) date_grp
 , HLL_COUNT.MERGE(sketch) unique_90_day_users
 , HLL_COUNT.MERGE(DISTINCT IF(i<31,sketch,null)) unique_30_day_users
 , HLL_COUNT.MERGE(DISTINCT IF(i<8,sketch,null)) unique_7_day_users
 , COUNT(*) window_days
FROM (
  SELECT DATE(creation_date) date, HLL_COUNT.INIT(owner_user_id) sketch
  FROM `bigquery-public-data.stackoverflow.posts_questions` 
  WHERE EXTRACT(YEAR FROM creation_date)=2017
  GROUP BY 1
), UNNEST(GENERATE_ARRAY(1, 90)) i
GROUP BY 1
HAVING window_days=90
ORDER BY date_grp
```
[Rolling 90 days active users in BigQuery, improving preformance (DAU/MAU/WAU)](https://stackoverflow.com/questions/49852357/rolling-90-days-active-users-in-bigquery-improving-preformance-dau-mau-wau/49866033#49866033) より引用。

## 多体一のデータは結合して保管しておこう
JOIN 回数が多いものは、結合して管理しておくと高速です。繰り返し同じレコードを持つので、参照コストは大きくなりがちですが、クエリ自体が高速に実行できます。

## WHERE 句に頻出のフィールドはクラスタ化しよう

詳細は [クラスタ化テーブルの概要](https://cloud.google.com/bigquery/docs/clustered-tables) にありますが、階層構造を暗黙的にもっているものなどは、自動的に付くものより手動でつけた方が有効です。


# BigQuery でデータクレンジング例
## 性別の表現を揃える
0, 1 のデータを文字の '男', '女' に直しつつ、例外値を NULL に変換します。
CASE 文で条件分岐するだけです。ELSE は省略しても NULL が入ります。

```sql
SELECT
  CASE gender
    WHEN 0 THEN '男'
    WHEN 1 THEN '女'
END
```

## 誕生日の異常領域を削除する
誕生日の下側を 5％ 落としつつ、上側を現在の日付で落とします。
独自の計測結果では CASE 文より IF 文の方が高速なので、分岐が 1 回だけなら IF を利用しています。

```sql
CREATE TEMP FUNCTION
  BIRTH_DATE_PERCENTILE_5_100()AS((
    SELECT
      APPROX_QUANTILES(birth_date,100)[
    OFFSET
      (5)]
    FROM
      my_dataset.user_master));
SELECT
IF
  (BIRTH_DATE_PERCENTILE_5_100()<=birth_date
    AND birth_date<DATE_SUB(CURRENT_DATE(),INTERVAL 18 YEAR),
    birth_date,
    NULL)
```


## 異常な郵便番号を正規表現で除去する
数字 7 桁以外は NULL にします。
正規表現でスキーマチェックするのはデータチェックの鉄板です。

```sql
SELECT
IF
  (REGEXP_CONTAINS(zip_code, "^\\d{{7}}$"),
    zip_code,
    NULL)
```

# BigQuery で特徴量加工例
## 毎日の SUM を見る
単純に GROUP BY すると、穴があいて、特徴量として使いにくいケースがあるため、固定長の配列に JOIN して固定長にしています。DATETIME を DATE にダウンキャストしていますが、JOIN 条件では、情報量が適切に落とされるかやアップキャストの方が適切かなどを確認しながらクエリを書きましょう。

```sql
SELECT
  dt,
  IFNULL(SUM(sales_amount),
    0)
FROM
  UNNEST(GENERATE_DATE_ARRAY('2019-01-01', '2019-02-01'))dt
LEFT JOIN
  my_dataset.pos
ON
  dt=DATE(pos.datetime)
GROUP BY
  dt
```

## GROUP ごとにサンプリング
PARTITION BY の中のグループごとに、約 10000 件ずつサンプリング（復元抽出）します。
機械学習でサンプリングが前提なのであれば、テーブル出力前にサンプリングしておくと保存や参照の料金が安く済みます。

```sql
SELECT
  *
FROM (
  SELECT
    *,
    COUNT(*)OVER(PARTITION BY week, time)f
  FROM
    my_dataset.pos)
CROSS JOIN
  UNNEST(GENERATE_ARRAY(1,10000))c
WHERE
  RAND()*f<1
```

# データクレンジングから特徴量生成まで 1 クエリでやってみる
元のデータから、機械学習に投入する前まで 1 クエリでできるんじゃないかなと思えてきませんか。
user_master と pos テーブルから RFM 分析を行い、特徴量として結合してみましょう。
長いクエリなので無理して読む必要はありません。単純に WITH 句でつないでいくだけで、データクレンジングから特徴量生成まで 1 クエリになるんだなーと思っていただければ良いです。

## やってみたクエリは長いけれど速くて安い

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

  -- pos から商品ごとに RFM 分析した特徴量テーブル用の中間テーブル
  -- user_id: ユーザを一意に特定するキー。
  -- item_id: 商品を一意に特定するキー。
  -- recency: 最新購入日。
  -- frequency: 購買日数。
  -- monetary: 総購買金額。
  `rfm_feature_grouped_by_item`AS(
  SELECT
    user_id,
    item_id,
    MAX(datetime)recency,
    COUNT(DISTINCT DATE(datetime))frequency,
    SUM(amount)monetary
  FROM
    pos
  GROUP BY
    user_id, item_id),

  -- pos から商品ごとに RFM 分析した特徴量テーブル
  -- user_id: ユーザを一意に特定するキー。
  -- rfm_array: 商品ごとに recency, frequency, monetary を算出してまとめた配列。
  `rfm_feature_array`AS(
  SELECT
    user_id,
    ARRAY_AGG(STRUCT(item_id,
        recency,
        frequency,
        monetary)
      ORDER BY
        item_id)rfm_array
  FROM
    rfm_feature_grouped_by_item
  GROUP BY
    user_id)

-- 機械学習に投入するデータ
-- user_id: ユーザを一意に特定する主キー。
-- gender: 性別、'男' か '女' か NULL を持つ。
-- birth_date: 5% 点と 18 歳以上でクレンジングした誕生日。
-- zip_code: ハイフンなし 7 桁の郵便番号。
-- recency: 最新購入日。
-- frequency: 購買日数。
-- monetary: 総購買金額。
-- rfm_array: 商品ごとに recency, frequency, monetary を算出してまとめた配列。
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

## やってみたクエリは速くて安いけれど長くて保守できない

申し訳程度のコメントが付いていても読むの無理そうだなーと感じませんでしたか。
実際、1 クエリにすると料金と速度をある程度改善できますが、保守性を犠牲にしてしまいます。保守性を上げるためにはクエリを分割して Apache Airflow などのワークフローで段階的に投げるか、Apache Beam などの SQL より小さな手続き単位で記述するツールを使うべきです。

このバランスはとても難しいですが、WITH 句や VIEW ごとに切り出しておいて、ユニットテスト、自動で結合するフレームワークを開発して最安最速かつ最保守性を目指しています。
基本は、開発する物の保守性とのバランスを検討すべきです。

# おわりに: Google BigQuery は速くて安くできるけど
今回は、クエリの高速化、料金最小化と特徴量作成、まるっと全部 1 クエリにしてみる話をしました。1 クエリにすると、速くて安くできます。しかし、取得するデータを書く用途である SQL で手続きを書くと、保守性が犠牲になってしまうことが分かりました。次回は、この保守性に焦点を当てた記事を投稿予定です。
各工程は飛び飛びですが、全部 1 クエリにする際、それぞれの要素はとても重要です。ぜひ一度確認してみてください。