---
title: "おさらい"
---

## はじめに
日本時間2020-06-17のリリースで、BigQuery MLにAutoML Tables、XGBoost、DNNが来ました。[release-notes#June_16_2020](https://cloud.google.com/bigquery-ml/docs/release-notes#June_16_2020)

おさらいに、BigQuery MLで何ができるか再整理します。

追記:
日本時間2020-07-02のリリースで、BigQuery MLにARIMAも来ましたね。日本時間2020-06-28のリリースノートでエラーになってたのですが、リリース日がしれっと修正されてました。[release-notes#July_01_2020](https://cloud.google.com/bigquery-ml/docs/release-notes#July_01_2020)

## BigQuery MLでできること概要
BigQueryでStandard SQLを使って、機械学習モデルを訓練、推論できます。
データの移動を意識する必要がないため、開発スピードを向上と同時に、モデルの民主化を実現できます。

例えば、以下のようにして、1時間ほど待てば、AutoML Tablesのモデルができます。
BigQuery以外の権限設定やAPI有効化は不要です。

```sql
CREATE MODEL
  bigqueryml.my_model OPTIONS(MODEL_TYPE = 'AUTOML_REGRESSOR') AS
SELECT
  i AS label,
  i*RAND() AS a,
  i*RAND() AS b,
  i*RAND() AS c,
  i*RAND() AS d,
  i*RAND() AS e,
  i*RAND() AS f
FROM
  UNNEST(GENERATE_ARRAY(1,10000))i
```


このモデルは適当で、実際のテーブルを触ってないですが、実際のテーブルでも同様に扱うことができます。
予測も簡単です。教師値を除き、同じ型のテーブルを投げ込めば結果を返してくれます。

```sql
SELECT
  *
FROM
  ML.PREDICT(MODEL bigqueryml.my_model,
    (
    SELECT
      i*RAND() AS a,
      i*RAND() AS b,
      i*RAND() AS c,
      i*RAND() AS d,
      i*RAND() AS e,
      i*RAND() AS f
    FROM
      UNNEST(GENERATE_ARRAY(1,10000))i))
```


## 今回のリリースの何がすごい？
待望のモデルが3つ同時に来たことです。

- [AutoML Tables](https://cloud.google.com/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-create-automl)
- [XGBoost](https://cloud.google.com/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-create-boosted-tree)
- [DNN](https://cloud.google.com/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-create-dnn-models)

### AutoML Tables
betaながらテーブルデータをスケール気にせず学習できるので、利用していた方も多いのではないでしょうか（スケール気にせずはさすがに盛ってますが）。
ただ、AutoML Tablesを使うと独特のWeb UIかAPI/SDKを使わなければならず、設定のラップに難儀していました。また、推論結果がデータセットになる点も扱いづらいポイントでしたね。

BigQuery MLから状態を持たない簡潔な設定で、訓練が開始できるのはとてもすばらしいです。
ただし、CATEGORY、NUMERICの設定ができないので、NUMERICに自動解釈して欲しくないデータはprefixつけて、STRINGにしておくなどの調整が必要かもしれません。時系列分割もできないので、モデルの性能やvalidationに影響を与える場合は、AutoML Tablesをそのまま使いましょう。

### XGBoost
そもそもBoosted Treeの人気が高いため、ローカルに持ってきてxgboostやlightgbmにかけていた人も多いのではないでしょうか。BigQueryにデータが入っていれば、BigQuery MLで、一切データの移動を考えることなく実現できます。

（以前はTensorFlow SavedModelを用いて、手間をかければ推論することだけはできてました。）

### DNN
DNNはそこそこの自由度を持って学習できます。秘伝のDNNがある場合にも、ある程度の再現は可能でしょう。
再現が完全でなくても、モデルがフルマネージドに乗り、民主的に利用できるのは価値ですね。

（以前はTensorFlow SavedModelを用いて、手間をかければ推論することだけはできてました。）

### ARIMA
ARIMAはフルに自由度を持ってパラメータ設定ができますね。DNN同様、秘伝のARIMAがあっても安心でしょう。

最近では機械学習が第一選択薬になることも多くなりましたが、非定常過程では古典的な計量時系列分析が現役な場合もARIMAすね。組み合わせて多段に使うのもVIEWを用意して、フルマネージドでBigQuery ML完結すると扱いやすいかもしれません。

## いくらかかるんだっけ
### BigQuery定額料金
BigQuery定額料金プランの場合、BigQuery MLも自由に使うことができます。
Reservationsを使っていて、外部モデル（AutoML Tables、Boosted Tree）を使う場合には、別途設定が必要そうです。[pricing#ml_flat_rate_pricing](https://cloud.google.com/bigquery-ml/pricing#ml_flat_rate_pricing)


### BigQueryオンデマンド料金
以下のコストがかかります。

| オペレーション | 料金 | 詳細 |
|:--|:--|:--|
| 内部モデル訓練（Linear regression、Binary logistic regression、Multiclass logistic regression、K-means clustering） | $250.00 per TB |
| MF訓練（Matrix Factorization） | - | 不可。Reservationsを使って、定額料金を割り当てる必要があります（フレックススロット推奨）。
| 外部モデル訓練（Boosted Tree、AutoML Tables、DNN） | $5.00 per TB | これは、BigQuery MLの前処理クエリを実行するためのコストで、**実際のコストは外部モデルの料金との合計**です。 |
| 推論（全モデル共通）| $5.00 per TB | |

外部モデルの学習や推論は、BigQuery同様の参照量です。
内部モデルの学習はBigQueryの参照50回分です（イテレーション回数の最大値と同等）。

追記：
ARIMAは実行可能になり次第調査します。

## 制限は？
プロジェクトごとに1日あたりCREATE MODELは1,000回に制限されています。

## BigQuery MLでできること

追記：
ARIMAは実行可能になり次第調査、追記します。

### 機械学習が1クエリで
以下のモデルの学習が1クエリでできます。もちろん、推論、メタデータの取得も1クエリです。

- Linear regression
- Binary logistic regression
- Multiclass logistic regression
- K-means clustering
- Matrix Factorization
- Boosted Tree classification/regression
- AutoML Tables classification/regression
- Deep Neural Network (DNN) classification/regression
- ARIMA(time series)

膨大ですね。Boosted TreeやAutoML Tablesが来たのでおおよそのタスクはBigQuery MLで充足するのではないでしょうか。


### [前処理もモデルとセットで](https://cloud.google.com/bigquery-ml/docs/bigqueryml-transform)

BigQuery MLには、`TRANSFORM`句があり、SELECTに書ける範囲のデータ変換（map処理）なら、モデルに組み込むことができます。具体的には、BUCKETIZEや正規化、ダミー変数化あたりの処理の需要が高そうですね。

クエリは、`CREATE MODEL`の後に`TRANSFORM`を足して、処理を追加するだけです。
これを使ってモデルを作成しておくと、前処理が組み込まれたモデルができるため、モデルの利用者は前処理を意識せずにモデルを使うことができます。

```sql
CREATE MODEL `bqml_tutorial.natality_model`
TRANSFORM(weight_pounds,
    is_male,
    gestation_weeks,
    ML.QUANTILE_BUCKETIZE(mother_age,
      5) OVER() AS bucketized_mother_age,
    CAST(mother_race AS string) AS mother_race,
    ML.FEATURE_CROSS(STRUCT(is_male,
        CAST(mother_race AS STRING) AS mother_race)) is_male_mother_race)
OPTIONS
  (model_type='linear_reg',
    input_label_cols=['weight_pounds']) AS
SELECT
  *
FROM
  `bigquery-public-data.samples.natality`
WHERE
  weight_pounds IS NOT NULL
  AND RAND() < 0.001
```

### [モデルのエクスポート](https://cloud.google.com/bigquery-ml/docs/exporting-models)
BigQuery MLのモデルは、ARIMAを除き、全てTensorFlow SavedModel形式でエクスポートできます。
モデルのバージョン管理やカナリアリリースのフローに載せることができますので安心してご利用ください。

以下のモデルは2020-06-18時点、ドキュメントにありませんがエクスポートできることを確認済みです。
- Boosted Tree classification/regression
- AutoML Tables classification/regression
- Deep Neural Network (DNN) classification/regression

### モデルのインポート
BigQuery MLのエクスポートしたモデルの他、全てのTensorFlow SavedModelをインポートすることができます。ただ、TensorFlow SavedModelのインポート時は制約が強めなので、注意してください。気になる制約は以下の3つですね。

- モデルのサイズは 250 MB に制限されています。
- バージョン 20 より前のバージョンの GraphDef を使用してトレーニングされたモデルはサポートされていません。
- コアの TensorFlow オペレーションのみサポートされています。カスタム オペレーションや tf.contrib オペレーションを使用するモデルはサポートされていません。

また、AutoML Tablesのエクスポートモデルをインポートすると`Error while reading data, error message: TensorFlow model cannot be parsed within the memory limit; try reducing the model size`になったため、全てのSavedModelがエクスポート可能とは限らないようです（フォルダサイズは46MBで、250MB以下）。

デプロイ先を統一する際には、BigQuery MLより、AI Platformの方が安心かもしれません。

### 現状不明な点
以下の点は不明な部分であり、検証したいです。
- BigQuery MLで6時間を超える時の挙動（AutoMLで6.0<BUDGET_HOURSとか）
- BigQuery ScriptingにBigQuery MLを挟んで、合計6時間を超える時の挙動。

## おわりに
BigQuery MLで、AutoML Tables、XGBoost、DNNが使えるようになりました。そもそも便利関数が用意されていたBigQuery MLですが、一層、BigQueryからデータを外に出さずに使えるようになりますね。
リソースを意識せず、データの民主化を低コストで実現可能なBigQueryでしたが、モデルも民主化してしまうBigQuery MLには心酔しますね。今後のリリースにも期待しましょう！
