---
id: bigquery-last-reference-date
title: "Stackdriver Logging を用いて BigQuery テーブルの最終参照日を求める"
author: Naofumi Yamada
author_title: Data Engineer
author_url: https://github.com/na0fu3y
author_image_url: https://avatars0.githubusercontent.com/u/17900178?s=400&v=4
tags: [bigquery]
---

# やりたいこと
BigQuery テーブルの最終参照日を求めて、使ってないテーブルを整理したい。
最終更新日はテーブルのメタ情報に載っているが、参照日は載っておらず簡単に見ることはできない。
BigQuery のクエリログが全て載る Stackdriver Logging に集計処理をかけることで求めてみる。

<!--truncate-->

## 寿命でよいのでは
寿命が正しく設計できるなら問題ないが、後から追いたくなる場合は必ずある。
また、AutoML 推論で BigQuery に出力するとデータセットを見境なく作るため、寿命の設定ができない。
これらの問題に対処すべく、Stackdriver Logging を用いる。
ちなみに、AutoML 推論の大掃除には `prediction_\w+_20\d\d_\d\d_\d\dT\d\d_\d\d_\d\d_\d\d\dZ` の正規表現を利用した。


## Storage に移動するべきか

```
Storage Archive Storage $0.004
< Storage Coldline Storage $0.007
< Storage Nearline Storage $0.010
= BigQuery Long-term storage $0.010
< BigQuery Active storage $0.020
< Storage Standard Storage $0.026
(per GB per Month)(US)
```

AVRO データ圧縮率など無視すると、編集から 90 日より前なら Nearline 以下の、90 日以後なら Coldline 以下の Storage に移動すると価格を抑えられる。
無編集かつアクセスが年 1 未満なら Archive、年 1 程度なら Coldline が妥当なラインだと思われる。
それ以外は（サイズ次第ではあるが）作業時間に見合わなそうなため、 BigQuery にそのまま放置する。

# 準備
## Stackdriver Logging ログシンクの設定
ログシンク設定は以下のフィルタで行う。参照可能な全てのプロジェクトから行う必要があるため、外部公開のデータセットについては、参照を追えない点に留意する。

```
resource.type="bigquery_resource" AND
proto_payload.method_name="jobservice.jobcompleted"
```

# 掃除に必要な情報を得る

## 最終参照日
ログシンク先から BigQuery テーブルの最近参照日を出すクエリは以下の通り。
このクエリで参照日を見て、要不要の判断を行う。

```sql
CREATE TEMP FUNCTION
  ADD_PROJECT_ID_IF_NEEDED(table_id STRING,
    project_id STRING)AS(CASE CHAR_LENGTH(table_id)-CHAR_LENGTH(REPLACE (table_id, ".", ""))
      WHEN 1 THEN CONCAT(project_id,'.',table_id)
      WHEN 2 THEN table_id
    ELSE
    ERROR('The format is not supported')
  END
    );
SELECT
  table_id,
  last_referenced
FROM (
  SELECT
    CONCAT(project_id,'.',dataset_id,'.',table_id)table_id
  FROM
    < your-dataset >.__TABLES__)
FULL JOIN (
  SELECT
    ADD_PROJECT_ID_IF_NEEDED(REGEXP_REPLACE(table_id, r"[\s`]", ""),
      protopayload_auditlog.servicedata_v1_bigquery.jobCompletedEvent.job.jobName.projectId)table_id,
    MAX(timestamp)last_referenced
  FROM
    < your-bigquery-log >.cloudaudit_googleapis_com_data_access
  INNER JOIN
    UNNEST(REGEXP_EXTRACT_ALL(protopayload_auditlog.servicedata_v1_bigquery.jobCompletedEvent.job.jobConfiguration.query.query, r"(?:FROM|JOIN)\s*(`(?:[\-\w]+\.)?\w+\.\w+`|(?:[\-\w]+\.)?\w+\.\w+\s|(?:[\-\w]+\.)?\w+\.\w+$)"))table_id
  GROUP BY
    table_id)
USING
  (table_id)
```

## 依存 VIEW の洗い出し
[BigQuery View Analyzer](https://github.com/servian/bigquery-view-analyzer) を用いると、
BigQuery VIEW が依存するテーブルを再帰的に探索して可視化してくれる。
VIEW 中心に作っている場合には、こちらも実施する。

# まとめ
最終参照日 & 依存 VIEW の洗い出しで大体使っていないテーブルを見分けて整理できたはずだ。
自分の管理外のプロジェクトから呼ばれる公開データセットがある場合には、その告知も必要になるため気をつけて掃除を行ってほしい。