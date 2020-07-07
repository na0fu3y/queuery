---
title: "マテリアライズドビュー"
---

## この記事何
BigQuery materialized views が 2020-04-08 に beta になりました。
伴って、ドキュメント[^1][^2][^3][^4]が増えているので、重要だと思ったポイントをまとめました。

[^1]: [Introduction to materialized views](https://cloud.google.com/bigquery/docs/materialized-views-intro)
[^2]: [Materialized views FAQ](https://cloud.google.com/bigquery/docs/materialized-views-faq)
[^3]: [Creating and using materialized views](https://cloud.google.com/bigquery/docs/materialized-views)
[^4]: [BigQuery Materialized View best practices](https://cloud.google.com/bigquery/docs/materialized-views-best-practices)


## materialized view とは
誤解を恐れずに言えば、最新キャッシュの存在を保証した VIEW です。

### メリット
自動 & 手動のキャッシュ再計算が定義されており、メンテ不要で新鮮にできます。

### 作り方
いつもの CREATE VIEW に MATERIALIZED を入れるだけです。

```sql
CREATE MATERIALIZED VIEW `project-id.my_dataset.my_mv_table` AS
SELECT date, AVG(net_paid) AS avg_paid
FROM project-id.my_dataset.my_base_table
GROUP BY date
```

CREATE OR REPLACE ができなかったりちょっと不便です。
また、集約関数を持たない Materialized View は作れません。

### 価格（オンデマンド）
実テーブルと同様の参照、保存コストに加え、ベーステーブルが更新されると差分の計算コストがかかります。
ただし集約関数は、中間データを保持するためテーブルの保存コストとは差異があります。

### 更新頻度

#### 通常の自動更新
自動更新頻度は標準 30 分、最小1分、最大7日間で設定できます。
total_bytes_processed、total_slot_ms を監視して、コストに応じて自動更新間隔を調整しよう。
ベーステーブルの変化率が小さいなら更新頻度下げましょう。ベーステーブルがコロコロ変化するなら更新を頻繁にしましょう。ベーステーブルの取り込みに合わせてキックできるなら自動更新を切って、手動更新も良いでしょう。

DML INSERT や append で更新された時は、前の自動更新のキャッシュとベーステーブルの差分に対するクエリが走ります。この差分を取り込む更新になるため、更新頻度を調整しましょう。

更新頻度が低い場合には、自動更新をオフにして手動更新`CALL BQ.REFRESH_MATERIALIZED_VIEW('project-id.my_dataset.my_mv_table')`を行う戦略もあります。


#### invalidated になった時の自動更新
これらのアクションでベーステーブルが更新されると、5 分以内に Materialized View も自動更新されます。その間は、通常の自動更新同様、ベーステーブルの途中計算結果とアクションの差分を参照してクエリが走ります。

- DML UPDATE
- DML MERGE
- DML DELETE
- truncation
- partition expiration
- console
- bq command-line
- API equivalents of the preceding items in this list

### デメリット
- UNNEST、JOIN、UDF、大部分の集約関数はサポートされていない
- 集約関数は、APPROX_COUNT_DISTINCT、ARRAY_AGG、AVG、COUNT、HLL_COUNT.INIT、MAX、MIN、SUM のみサポートされている（COUNT(DISTINCT x) は非対応）
- ベーステーブルと同じデータセットにある必要がある
- Materialized View はデータセットレベルの権限設定しかできない
- Materialized view はネストできない
- 同じベーステーブルに 20 個までしか定義できない
- まだ各言語の Client API はなさそう

### スケジュールドクエリとの使い分け
可能な限り、スケジュールドクエリよりマテリアライズドビューを使いましょう。
複雑な計算が必要ならスケジュールドクエリもやむなしですが、データの古さを許容できる必要があります。

[Comparison to other BigQuery techniques](https://cloud.google.com/bigquery/docs/materialized-views-intro#comparison) に
Caching、Scheduled queries、Standard views、Materialized views の比較があるので興味があれば読みましょう。

## まとめ
私自身が思ったことをまとめます。

### すぐに使えるポイント
- キャッシュが有効な JOIN のない VIEW やスケジュールドクエリを Materialized View に置き換える
- 中間生成物を Materialized View にして、最終結果は JOIN 出すなどの工夫で、中間生成物の管理コストと計算時間を低減する
- ニアリアルタイムにすべてのデータを扱いたい場合、DWH に JOIN 済のテーブルを用意して全てを Materialized View にする

### ちょっと厄介なポイント
- Materialized View を無理に活用しようとすると既存のビューやテーブルの再設計が必要になる
- JOIN、UNNEST など強力な関数が使えないので、キャッシュ管理コストの低減のためにリプレイス再設計は割に合わない
