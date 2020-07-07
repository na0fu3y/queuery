---
title: "JOBS_BY_* でジョブ警察"
---

2020-02-14 に `INFORMATION_SCHEMA.JOBS_BY_*` ビューがベータになり、誰でも使えるようになりました（[BigQuery release notes](https://cloud.google.com/bigquery/docs/release-notes)）。

Cloud Logging で見ていた BigQuery ジョブが BigQuery 単体で追えるようになるアップデートです。何ができるようになったのか見ていきましょう。
最新情報は、公式ドキュメント [Getting jobs metadata using INFORMATION_SCHEMA](https://cloud.google.com/bigquery/docs/information-schema-jobs) をご確認ください。


## `INFORMATION_SCHEMA.JOBS_BY_*` ビューで BigQuery ジョブの履歴を見る

`INFORMATION_SCHEMA.JOBS_BY_*` ビューを使うと、実行中の BigQuery ジョブと過去 180 日間[^1]の完了したジョブのメタデータを取得できます。
[^1]: 180 日間とのことですが、私の手元で確認できたログは 2020-01-03 が最新でした。ログの保存開始日が 180 日前より最近である可能性があります。

スキーマは後ほど紹介します。まずはできることの例を見ていきましょう。

### 用途例 5 つ

#### 高価なクエリを摘発する
今年のプロジェクト一課金されたクエリを発見します。
権限がない方が試したい場合には、`JOBS_BY_PROJECT` を `JOBS_BY_USER` に書き換えて、個人史上一課金されたクエリを見つけてみましょう。
`JOBS_BY_ORGANIZATION` には、`query` 列がないかもしれません。

```sql
SELECT
 job_id,
 user_email,
 query,
 total_bytes_processed
FROM `region-us`.INFORMATION_SCHEMA.JOBS_BY_PROJECT
WHERE EXTRACT(YEAR FROM creation_time) = 2020
ORDER BY total_bytes_processed DESC
LIMIT 5
```


| job_id | user_email | query | total_bytes_processed |
|:--|:--|:--|:--|
| bquxjob_549481d2_170433e2ef2 | abc@xyz.com | SELECT ... FROM ... | 296581077362 |
| bquxjob_1889199f_17037f62246 | def@xyz.com | SELECT ... FROM ... | 296272073862 |
| bquxjob_276128e9_17037f57be5 | ghi@xyz.com | SELECT ... FROM ... | 296272062336 |
| bquxjob_23f9c0e7_17037f2407b | jkl@xyz.com | SELECT ... FROM ... | 296272062336 |
| bquxjob_254cda14_17037f422e5 | mno@xyz.com | SELECT ... FROM ... | 296272062336 |


#### プロジェクト利用者を特定する
特定のプロジェクトにジョブを送信したすべてのユーザーまたはサービスアカウントを一覧表示します。プロジェクトの棚卸し時に使えそうです。

```sql
SELECT
 DISTINCT user_email
FROM
 `region-us`.INFORMATION_SCHEMA.JOBS_BY_PROJECT
```

| user_email |
|:--|
| abc@xyz.com |
| def@xyz.com |


#### 低速な野良クエリを摘発する
予め保存されたクエリリストに属さない、スロットを大量消費するクエリを見つけます。スケジュールされたクエリを最適化する際に使えそうです。

```sql
SELECT
  user_email,
  query,
  total_slot_ms
FROM
  `region-us`.INFORMATION_SCHEMA.JOBS_BY_PROJECT
WHERE
  query IN(
    SELECT
      query
    FROM
      <your_dataset>.query_list
  )
ORDER BY total_slot_ms DESC
LIMIT 5
```

| user_email | query | total_slot_ms |
|:--|:--|:--|:--|
| abc@xyz.com | SELECT ... FROM ... | 5274048808 |
| def@xyz.com | SELECT ... FROM ... | 3384028972 |
| ghi@xyz.com | SELECT ... FROM ... | 3143715099 |
| jkl@xyz.com | SELECT ... FROM ... | 3095278727 |
| mno@xyz.com | SELECT ... FROM ... | 2370765019 |

#### 使われていないデータセットを摘発する
使われていないデータセットを発見し、棚卸しを行います。
ただし、`JOBS_BY_ORGANIZATION` は組織内のクエリのログですので、外部公開されたデータセットの場合には、使われていないかの判別に使うことはできません。

```sql
WITH
  referenced_dataset AS(
  SELECT
    DISTINCT referenced_table.project_id,
    referenced_table.dataset_id
  FROM
    `<your-project>.region-us.INFORMATION_SCHEMA.JOBS_BY_ORGANIZATION`
  JOIN
    UNNEST(referenced_tables)referenced_table)
SELECT
  catalog_name,
  schema_name
FROM
  `<your-project>.INFORMATION_SCHEMA.SCHEMATA`
LEFT JOIN
  referenced_dataset
ON
  catalog_name=project_id
  AND schema_name=dataset_id
WHERE
  project_id IS NULL
```
 
| catalog_name | schema_name |
|:--|:--|:--|:--|
| project-a | dataset_1 |
| project-a | dataset_2 |


#### 平均使用スロットの多い日を特定する
特定のプロジェクトの平均使用スロットを表示します。BigQuery Reservations を使ったり、スケジュールされたクエリを使う場合には、スロット使用率の監視が重要になってきます。

```sql
SELECT
  DATE(end_time) AS end_date,
  SUM(total_slot_ms) / (1000*60*60*24) AS avg_slots
FROM
  `region-us`.INFORMATION_SCHEMA.JOBS_BY_PROJECT
GROUP BY
  end_date
ORDER BY
  end_date DESC
LIMIT
  3
```


| end_date | avg_slots |
|:--|:--|
| 2020-02-16 | 811.4027300231481 |
| 2020-02-14 | 30.734837708333334 |
| 2020-02-13 | 71.37354623842593 |


### INFORMATION_SCHEMA.JOBS_BY_* ビュー 3 種
ここからはドキュメントベースの解説になります。

#### INFORMATION_SCHEMA.JOBS_BY_USER
- 現在のプロジェクトで実行ユーザーから送信されたジョブのみを返す
- bigquery.jobs.list の権限が必要

#### INFORMATION_SCHEMA.JOBS_BY_PROJECT
- 現在のプロジェクトで送信されたすべてのジョブを返す
- bigquery.jobs.listAll 権限が必要

#### INFORMATION_SCHEMA.JOBS_BY_ORGANIZATION
- 現在のプロジェクトの組織で送信されたすべてのジョブを返す
- **組織**の bigquery.jobs.listAll の権限が必要



### BigQuery ジョブのメタデータスキーマ
公式ドキュメントから引用し、日本語を併記、特に重要そうなものを太字にします。

| 列名 | データタイプ | 値 |
|:--|:--|:--|
| creation_time | TIMESTAMP | ジョブの作成時間 |
| **project_id** | STRING | プロジェクト ID |
| project_number | INTEGER | プロジェクト番号 |
| **user_email** | STRING | ジョブ実行者のメールアドレス |
| job_id | STRING | ジョブ ID |
| **job_type** | STRING | ジョブタイプ（QUERY、LOAD、 EXTRACT、COPY、UNKNOWN） |
| statement_type | STRING | クエリステートメントタイプ（SELECT、INSERT、UPDATE、DELETE） |
| **start_time** | TIMESTAMP | ジョブの開始時間 |
| **end_time** | TIMESTAMP | ジョブの終了時間 |
| **query** | STRING | SQLクエリ文字列 |
| state | STRING | 実行状態（PENDING、 RUNNING、DONE） |
| reservation_id | STRING | 割り当てられた reservation 名 |
| **total_bytes_processed** | INTEGER | 処理されたバイト数 |
| **total_slot_ms** | INTEGER | スロットミリ秒 |
| error_result | RECORD | エラー |
| cache_hit | BOOLEAN | クエリ結果がキャッシュを返したか |
| destination_table | RECORD | 宛先テーブル |
| referenced_tables | RECORD | 参照されたテーブル |
| labels | RECORD | ラベルの配列 |
| timeline | RECORD | タイムライン※クエリ実行進捗状況 |
| job_stages | RECORD | クエリステージ※BigQuery Web UI の実行の詳細から見れるもの |


## Cloud Logging と比較して
### 優れるところ
- ログの保存期間が 180 日と長い
- ログシンク不要で直ぐにクエリが叩ける
- statement_type、referenced_tables など BigQuery の痒いところに手が届く

### 劣るところ
BigQuery 以外の Google Cloud Platform のジョブを見ることはできないです。用途の違いなので使い分けが大事なようです。

## まとめ
INFORMATION_SCHEMA.JOBS_BY_* を触って、思いつくユースケース 5 つを書き起こしてみました。
ログベースで色々な分析ができて、まだまだ色々な活用方法があるはずです。
ぜひ活用していきましょう。
