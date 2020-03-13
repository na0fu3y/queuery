---
id: gcp-logging
title: "Stackdriver Logging でできること"
author: Naofumi Yamada
author_title: Data Engineer
author_url: https://github.com/na0fu3y
author_image_url: https://avatars0.githubusercontent.com/u/17900178?s=400&v=4
tags: [stackdriverlogging, gcp]
---

この記事は [Stackdriver LoggingとBQシンクの差（料金と検索性、保存期間）を知りたい](https://github.com/na0fu3y/na0fu3y.github.io/issues/25) の対応記事です。[rhoboro](https://github.com/rhoboro) さん、依頼ありがとうございます。

<!--truncate-->

# はじめに
1 ヶ月前にしたことを思い出せますか。思い出せないなら Stackdriver Logging を使いましょう。
1 ヶ月以上前にしたことを思い出せますか。思い出せないなら Stackdriver Logging のログシンクを使いましょう。

# そもそも Stackdriver でできること
「サービス、コンテナ、アプリケーション、インフラストラクチャのモニタリングと管理。 」とあるように、監視系です。
その中でもいくつかのサービスに分かれています。

- [Stackdriver Monitoring](https://cloud.google.com/stackdriver/docs#stackdriver-monitoring)
- [Stackdriver Logging](https://cloud.google.com/stackdriver/docs#stackdriver-logging)
- [Stackdriver Error Reporting](https://cloud.google.com/stackdriver/docs#stackdriver-error-reporting)
- [Stackdriver Debugger](https://cloud.google.com/stackdriver/docs#stackdriver-debugger)
- [Stackdriver Trace](https://cloud.google.com/stackdriver/docs#stackdriver-trace)
- [Stackdriver Profiler](https://cloud.google.com/stackdriver/docs#stackdriver-profiler)

この記事では、「過去に起きたこと」のログに焦点を当てて、Stackdriver Logging でできることを紹介します。

# Stackdriver Logging でできること
Google Cloud Platform や Amazon Web Services からのログデータやイベントの格納、検索、分析、モニタリング、通知ができます。
書き込むこともできるのですが、今回は読み込みに絞っての紹介です。

## [ログの表示](https://cloud.google.com/logging/docs/view/overview)
まずは公式ドキュメントを元に、ログを表示して何が吐かれているのか見てみましょう。
除外フィルタを触っていなければ Google Cloud Platform の全てのサービスのログが見られるはずです。
いろんなところをグリグリして、ログフィルタに慣れましょう（ちょっと遅延が大きいサービスですが）。

グリグリしていたら、集計もしてみたくなってきませんか。そうなったらログベースの指標の概要にいきましょう。

## [ログベースの指標の概要](https://cloud.google.com/logging/docs/logs-based-metrics)
ログがグリグリできるようになったら、指標を閲覧、グリグリできるようになりましょう。
指標をいじれるようになると、ログフィルタと合わせて、グラフ化やアラート作成ができます。


## [監査ログ](https://cloud.google.com/logging/docs/audit)
ここまでグリグリやってきたもの誰がいつ吐いたものでしょうか。
答えは、監査ログです。GCP の監査ログはおしゃべりで、ずっとログを吐き続けています（後述しますが、黙らせることもできません）。
stdout や stderr に書いたり、意図的に Logging API を使ったりしていなければ、ほとんど全てが監査ログなはずです。

詳細はリンク先を見ていただきたいですが、重要な表を抜粋します。
この表は、監査ログを持つサービス一覧です（2020 年 1 月 27 日現在）。

監査ログを持つサービス|管理 アクティビティ ログ|データ アクセス ログ
-|-|-
App Engine|GA|なし
Application Identity4|ベータ版|なし
BigQuery|GA|GA
Cloud AutoML|ベータ版|ベータ版
Cloud Bigtable|ベータ版|なし
Cloud Billing|ベータ版|なし
Cloud Composer|GA|なし
Cloud Dataflow|GA|なし
Cloud Dataproc|GA|GA
Cloud Datastore|GA|GA
Cloud Deployment Manager|GA|GA
Cloud Data Loss Prevention|GA|GA
Cloud DNS|GA|GA
Cloud Functions|ベータ版|ベータ版
Cloud Genomics|ベータ版|ベータ版
Cloud Healthcare|ベータ版|ベータ版
Cloud Identity and Access Management|GA|GA
Cloud Identity-Aware Proxy|なし|GA
Cloud IoT Core|GA|GA
Cloud Key Management Service|GA|GA
Cloud Memorystore|ベータ版|ベータ版
AI Platform|ベータ版|ベータ版
Cloud Pub/Sub|GA|GA
Cloud Run|ベータ版|ベータ版
Cloud Source Repositories|GA|GA
Cloud Spanner|GA|GA
Cloud SQL|GA|GA
Cloud Storage5|GA|GA
Cloud AutoML Vision|GA|なし
Compute Engine|GA|GA
Compute Engine シリアルポート アクセス|GA|なし
Container Analysis|ベータ版|ベータ版
Cloud Build|GA|GA
Dialogflow|GA|GA
Google Kubernetes Engine|GA|GA
Service Management|GA|なし
Resource Manager|GA|GA
Stackdriver Debugger|GA|GA
Stackdriver Error Reporting|GA|GA
Stackdriver Logging|GA|GA
Stackdriver Monitoring|GA|GA
Stackdriver Trace|なし|GA
Stackdriver Profiler|なし|GA

これらのサービスは意識することなく、ログを吐き続けてくれていて、後から自由にログを追うことができます。
しかし、保存期間に制限があります。

監査ログのタイプ|保持期間
-|-
管理アクティビティ|400 日
データアクセス|30 日
システム イベント|400 日

提供しているサービスによっては、データアクセス 30 日はとても短いことでしょう。
ログエントリをエクスポートすれば、永続化できます（もちろん不要になったら削除もできます）。

ちなみに具体的な監査ログを確認する場合には、[Cloud Audit Logging 活用のベスト プラクティス](https://cloud.google.com/blog/ja/products/gcp/best-practices-for-working-with-google-cloud-audit-logging) を参考にフィルタリングができます。
記事からの抜粋になりますが、以下のフィルタで SetIamPolicy の利用状況や保持期間などが確認できます。
```
resource.type="project"
logName="projects/a-project-id-here/logs/cloudaudit.googleapis.com%2Factivity"
protoPayload.methodName="SetIamPolicy"
```

## [ログの除外](https://cloud.google.com/logging/docs/exclusions)
ログが鬱陶しい場合には、除外もできます。
Stackdriver Logging の料金は [$0.5/GiB](https://cloud.google.com/stackdriver/pricing) ですが、気になる場合には除外を行いましょう。

注意点として、この料金には監査ログ（すべての管理アクティビティ ログと BigQuery データアクセス ログ）は含まれません。
監査ログは無料であり、除外することはできないことに留意しましょう。

逆に含まれるログは、意図的に出した物です。
例えば Cloud Functions では、Logging API で意図的に書いたデータ、 stdout や stderr に書かれたデータは通常のログになります（情報元：[ログの書き込み](https://cloud.google.com/functions/docs/monitoring/logging#writing_logs)）。

## [ログのエクスポートの概要](https://cloud.google.com/logging/docs/export)
Stackdriver Logging そのままでは、30 日と 400 日の制約があるため、ログの長期保存に向きません。
長期保存や BigQuery で分析したい、他のアプリケーションと連携したいといった場合にはエクスポートしましょう。

### 設定値
重要な設定値を 2 つ紹介します。

#### ログフィルタ
エクスポートするログエントリを選択します。
[高度なログフィルタ](https://cloud.google.com/logging/docs/view/advanced-queries) をみながら、用途に合わせて設計しましょう。

#### エクスポート先
サポートされているエクスポート先は 3 つです。

- 長期保存するなら Cloud Storage
- データ分析するなら BigQuery
- 連携ストリーミングするなら Cloud Pub/Sub

### [シンクを作成する](https://cloud.google.com/logging/docs/export/configure_export_v2#dest-create)
簡単にエクスポートできるので、ビジネスを監視するのに重要な値がある場合には積極的に活用しましょう。

活用例を挙げてみます。

#### App Engine へのリクエストのログエントリ
リクエストログをとりあえず、Cloud Storage に保管して、バックアップに使えます。
```
resource.type=gae_app AND
  logName:request_log
```

#### BigQuery の実行完了したジョブのログエントリ
実行クエリを BigQuery でデータ分析して、重いクエリを発見するのに使えます。
[Stackdriver Logging を用いて BigQuery テーブルの最終参照日を求める](https://www.queuery.com/2020/01/21/bigquery-last-reference-date.html) でも利用しています。
```
resource.type=bigquery_resource AND
  proto_payload.method_name=jobservice.jobcompleted
```

#### Compute Engine の重大度が ERROR 以上のログエントリ
ERROR を Cloud Pub/Sub から外部サービス連携して通知に使えます。

```
resource.type=gce_instance AND
   severity>=ERROR
```


### データを使う
あとは、データが随時溜まっていくので、処理するパイプを作るだけです。
Cloud Storage に保管してあるならバックアップを元に再現できるような仕組みを、
BigQuery に保持するなら定期的な目視ができるデータパイプラインを作りましょう。
Cloud Pub/Sub に転送しているなら Slack 通知などサブスクライブする仕組みまで作り込み、ログを余すとこなく活用しましょう。

# おわりに
Stackdriver Logging でできることを公式ドキュメントをかじりながら一通り眺めました。
Stackdriver Logging も進化し続けているサービスなので、まずは公式ドキュメントを眺めるのが重要です。
応用として、ログフィルタを 3 つ紹介しました。ビジネスに合わせてログを活用できると、
よりデータドリブンな組織運営ができるのではないでしょうか。
ぜひ、Stackdriver Logging を活用しましょう。