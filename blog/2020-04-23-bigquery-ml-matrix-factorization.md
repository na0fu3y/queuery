---
id: bigquery-ml-matrix-factorization
title: "BigQuery ML で Matrix Factorization"
author: Naofumi Yamada
author_title: Data Engineer
author_url: https://github.com/na0fu3y
author_image_url: https://avatars0.githubusercontent.com/u/17900178?s=400&v=4
tags: [bigquery, matrix-factorization]
---

# BigQuery ML に Matrix Factorization が来た
日本時間 2020-04-18 に BigQuery ML の新モデル Matrix Factorization が[ベータリリース](https://cloud.google.com/bigquery-ml/docs/release-notes#April_17_2020)されました。

# Matrix Factorization とは
user と item を入力として、似た rating 傾向のある人を参考に未知の rating を予想するものです。併売しそうな商品を推薦する際に使ったりできます。

<!--truncate-->

詳細な Matrix Factorization の方法論などは他のドキュメントを参照してください。

# BigQuery ML で Matrix Factorization を使う際のハマりポイント
__オンデマンドユーザは訓練できません。__
大半のユーザはオンデマンドクエリの利用者で、Reservations を設定していないと思いますのでハマります。
後述する手順を実行しようとすると、`Training Matrix Factorization models is not available for on-demand usage. To train, please set up a reservation (flex or regular) based on instructions in BigQuery public docs.` とエラーメッセージが表示されます。

# 実際に触ってみる
## BigQuery Reservations を設定する（オンデマンドユーザのみ）
### BigQuery Reservations とは
BigQuery を秒、月、年単位で定額料金利用ができるものです。
[Reservations の概要](https://cloud.google.com/bigquery/docs/reservations-intro)を見ると詳細に理解できます。

### スロットを購入する
1. BigQuery の左メニューから「予約」をクリック
2. 上メニューから「スロットを購入する」を選ぶ
3. 「コミット期間」、「ロケーション」、「スロット」を選ぶ（お試しなら最小単位で、コミット期間は Flex、スロットは 500 がおすすめ）
4. 「購入」ボタンをクリック

### 予約を作成する
1. 上メニューから予約を作成を選ぶ
2. 「予約名」、「場所」、「スロット数」を入力する（お試しなら最小単位で、スロット数は 500 がおすすめ）
3. 「保存」ボタンをクリック

### 割り当てを作成する
1. 画面中央から「割り当て」のタブをクリック
2. 「組織、フォルダ、プロジェクトを選択」、「予約」を入力する（予約には作成したものを入力する）
3. 「作成」ボタンをクリック

## BigQuery ML クエリを実行する
### 訓練
基本的には、他の CREATE MODEL と同様にクエリを書くだけです。引数の名前を設定するオプションもありますが、設定しない場合には、user、item、rating の列が必須になります。
user、item は GROUPABLE な任意の型、rating は INT64、NUMERIC、FLOAT64 のみに対応しています。

オプションの詳細は [The CREATE MODEL statement for Matrix Factorization](https://cloud.google.com/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-create-matrix-factorization) を参照しましょう。

今回は、UNNEST で訓練データを作ってみました（他のモデルをオンデマンドで回す場合には、参照量が 0 になるため無料ですが、Reservations を使ってるため、お金はかかります。）

user|item|rating
---|---|---
1|1|5
1|2|1
1|3|5
2|1|3
2|2|3
3|1|5


```sql
CREATE MODEL
  `project.dataset.model` OPTIONS(MODEL_TYPE='MATRIX_FACTORIZATION') AS(
  SELECT
    *
  FROM
    UNNEST(ARRAY<STRUCT<user INT64,item INT64,rating INT64>>[(1,
        1,
        5),(1,
        2,
        1),(1,
        3,
        5),(2,
        1,
        3),(2,
        2,
        3),(3,
        1,
        5)]))
```

### 推論

今回は、UNNEST で推論用データも作ります。
Reservations を利用していない場合、UNNEST で物理テーブルを一切参照しなければ無料でできます。
気になる方は、モデル作成完了後に Reservations の設定を削除しておきましょう。

user|item
---|---
2|3
4|1

```sql
SELECT
  *
FROM
  ML.PREDICT(MODEL `project.dataset.model`,
    (
    SELECT
      *
    FROM
      UNNEST(ARRAY<STRUCT<user INT64,item INT64>>[(4,
          1),(2,
          3)])))
```

正しく推論できていれば、rating を含むテーブルが返ってきます。
`ML.WEIGHTS` を使うと分散表現も得られるので、word2vec の代わりに使えるかもしれません。

# まとめ
BigQuery ML に Matrix Factorization が来て、無事に利用することができました。
実行環境が分離され、データ（とコスト）のみに注力して Matrix Factorization が利用できるため、とても素晴らしいリリースだと思います。
ただ DNN のリリースも望まれる中、オンデマンド料金をサポート外にするビジネスモデルの変革とも取れるリリースになりました。
今後の BigQuery ML を含む BigQuery 全体の料金体系がどうなっていくのか気になるところです。
