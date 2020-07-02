---
id: bigquery-style-guide
title: "BigQueryコーディングスタイル"
sidebar_label: "BigQueryコーディングスタイル"
---

# この記事の趣旨
オレオレSQLの乱立は組織内の引継ぎや移行のコスト増大につながります。
これを避けるべく、共有され得るBigQuery StandardSQLの規約を設けました。

# 目的
コードを読みやすくするとともに、SQLで書かれた幅広いコードのスタイルを一貫させることです。

このコーディング規約に合わせることは重要ですが、プロジェクトの中で一貫性を保つことはもっと重要です。一番重要なのは、特定のモジュールや関数の中で一貫性を保つことです。

しかし、一貫性を崩すべき場合も有ります。疑問に思ったときは、あなたの判断を優先してください。他の例を調べ、一番良さそうなものを決めて下さい。そして、躊躇せずに質問して下さい！特に、このコーディング規約に準拠するためにコードの後方互換性を壊すようなことは絶対にしないで下さい！

# BigQueryコーディング規約
原則BigQueryのフォーマット機能を利用します。
その上でフォーマットで強制してくれない部分を差分を以下の規約で運用したいです。
2020-07-02時点、[google/zetasql](https://github.com/google/zetasql)を使うとコメントを消してしまうので、[Matts966/zetasql-formatter](https://github.com/Matts966/zetasql-formatter) を使いましょう。
[na0fu3y/bqformat](https://github.com/na0fu3y/bqformat)も作ったので使ってください。Matts966/zetasql-formatterと異なり、コメントは消えますが、エイリアスが酷いと弾いてくれる機能をつけています。

## コメントで始める
リーダブルコードに「優れたコード>ひどいコード+優れたコメント」とありますが、SQLでコメントと同等以上の情報量を持つコードを書くことは困難です。SQLはそれ自体がTable-valued functionです。テーブルを受けてテーブルを返します。全力でコメントを書きましょう。
共有され得るとしましたが、SQLは確実に同じクエリを2回以上叩きますし、BigQuery Web UIから追いやすくなる意味でも、原則コメントをつける意識です。

「他の人（or数ヶ月後の自分）」が最短時間で理解できるようにコメントを書きましょう。
例は、Google Python Style Guide を参考に、コメント困難な情報はスプレッドシートから参照できるようにしてます。（jinjaテンプレートを想定）

```sql
  -- 利用者ごとのRFMを計算する
  --
  --     Args:
  --         transactions: 購入履歴(https://docs.google.com/spreadsheets/d/xxxxxxxx)
  --             user_id (STRING): 利用者ID
  --             date (TIMESTAMP): 購入日時
  --             amount (INT64): 購入総額
  --
  --     Returns:
  --         rfm: RFM(https://docs.google.com/spreadsheets/d/yyyyyyyy)
  --             user_id (STRING): 利用者ID
  --             recency (TIMESTAMP): 最終購入日時
  --             frequency (INT64): 購入回数
  --             monetary (INT64): 累計購入金額
SELECT
  user_id,
  MAX(date) AS recency,
  COUNT(*) AS frequency,
  SUM(amount) AS monetary,
FROM
  {{ transaction }}
GROUP BY
  user_id
```

### コメントテクニック
これらのタグの利用を推奨します。
```
TODO: あとで手を付ける
FIXME: 既知の不具合があるコード
HACK: あまりキレイじゃない解決策
XXX: 危険！大きな問題がある
```

## LegacySQL vs StandardSQL
StandardSQLです。LegacySQLは禁止です。

## 大文字と小文字の使い分け
キーワード（予約語）と関数名は大文字、テーブル名や列名は小文字です。

## 最後の列のカンマ
最後の列にもカンマをつけることを推奨します。
GitHubのdiffは行単位のため、つけておくと余計な行の変更が走らなくて済みます。

## エイリアスのAS句
省略しません。

## JOINのOUTER
省略します。

## 2項演算子
前後にスペースです。

## 文字列
ダブルクォート`""`です。シングルクォート`''`は非推奨とします。
カンマ区切りにしたい時`format("%'d", hoge)`が使いにくいためです。

## コメント
### 単一行コメント
`--`です。`#`は非推奨とします。

### 複数行コメント
これ以外に選択肢はありません。行頭を揃えましょう。
```
/* データ前処理用のクエリ。
 * - 誕生日が未来の場合 NULL に置換する
 */
```

## 改行
可読性に寄与しない改行は避けましょう。STRUCTやARRAY、IFで発生します。

```sql
SELECT
  value, expected
FROM
  UNNEST([STRUCT<value INT64, expected INT64> (1,
      1), (2,
      4), (3,
      9)])
```

```sql
SELECT
  value, expected
FROM
  UNNEST([STRUCT<value INT64, expected INT64>
    (1, 1),
    (2, 4),
    (3, 9)])
```

## サブクエリ
サブクエリよりはWITH句で適切に名前をつけて理解を促進しましょう。
6行以上のサブクエリは避け、使う場合もサブクエリの結果を自然言語でコメントする。
再利用性の高いものならWITH句を作るより、VIEWやテーブルを作りましょう。

tmpやretvalなどの汎用的な名前を避け、明確な単語を選びましょう。
特に、変数の意味を誤って解釈しバグになりそうなところでは、名前に単位をつけたり、コメント情報量の大きい名前をつけましょう。

## テーブルエイリアス
- テーブル名が8文字以下の場合は、テーブル名をそのまま使う。
- テーブル名が8文字を超える場合は、エイリアスを貼る。
- 自己結合の場合には、意味をエイリアスに込める。
- チーム内でも、そのテーブルについて会話するときはあえて積極的にその省略名を使う
- 一般的でないテーブルについては、当該SQL内でのコンテクストをもとに命名する
- JOINの基礎になるテーブルについては`base`と命名する
- `base`に情報を付加するものについては`hoge_info`, `fuga_info`と命名する


## TIMEZONE
TIMESTAMPを推奨します。非推奨ですがDATETIMEを使う場合、暗黙的JSTです。


## 他のRDBMSの互換性
IFNULL、データチェックはERRORなど、ML.QUANTILE_BUCKETIZEなどBigQueryならではの関数があり、見やすさも速度も上です。互換性のために可読性や品質保持速度を落とさないようにします。

## テーブル命名規約
### 同時に見たい意味グループ順にプレフィクスをつける
同時に使う物にプレフィクスをつけて、ウェブUIの可読性を向上させます。同じ型だから思考停止的にプレフィクスをつけるのは非推奨。

### ウェブUIでまとめてくれる`yyyyMMdd`サフィクスをつける
日別バックアップテーブル作るときは`_yyyyMMdd`です。`_yyMMdd`は禁止。

## クエリチューニングは適切に
- [BigQuery ドキュメント：クエリ パフォーマンスの最適化の概要](https://cloud.google.com/bigquery/docs/best-practices-performance-overview)
- [Qiita：安い速い旨い BigQuery の 18 の最適化法](https://qiita.com/na0/items/2b58237cae08a217e3a7)


## 参考文献
- [クックパッド開発者ブログ：分析SQLのコーディングスタイル](https://techlife.cookpad.com/entry/2016/11/09/000033)
- [Qiita：Bigquery時代における、分析SQLコーディングスタイルの提唱](https://qiita.com/piyoSakai/items/e1b97366ca5940dad517)

