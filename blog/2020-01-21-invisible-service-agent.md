---
id: invisible-service-agent
title: "【解決済】Cloud IAM でサービスエージェントから全権限を削除すると見えなくなる"
author: Naofumi Yamada
author_title: Data Engineer
author_url: https://github.com/na0fu3y
author_image_url: https://avatars0.githubusercontent.com/u/17900178?s=400&v=4
tags: [bigquery]
---

# ことの発端
AutoML Tables のサービスエージェント権限を持つサービスアカウントで、大量に推論してたら、推論がエラーを吐くようになった。
BigQuery ジョブ一覧を除くと以下のようなジョブが大量に失敗していた。

<!--truncate-->

```
Quota exceeded: Your usage exceeded quota for ExtractBytesPerDay.

<project>:<dataset>.<table> を gs://cloud-automl-tenant-gcs-RRRRRRRR-RRRR-4RRR-rRRR-RRRRRRRRRRRR/userinput/oi-yyyy-MM-ddTHH:mm:ss.SSSZ/* にエクスポート
```

後からわかったことだが、AutoML Tables の入出力に BigQuery を指定すると Storage インポートエクスポートを自動でやってくれるだけであった。そのため、1 日のエクスポート上限 11 TB 弱に引っかかってしまった（インポートは上限なし）。

話を戻そう。これを知らずに異常発生と思い、サービスエージェント `service-*************@gcp-sa-******.iam.gserviceaccount.com` から全ての権限を剥奪した。
ゆっくり検証して、上記のように不正利用ではないことがわかって、サービスエージェントの権限を戻そうとした。

しかし、Cloud IAM のメンバーに `service-*************@gcp-sa-******.iam.gserviceaccount.com` が見つからないのだ。

# いろいろ調べる
API を一度無効にして、有効化することで戻るらしいが、AutoML Tables のデータが飛ぶ可能性を考えると怖くて実施できなかった。

# サポートに問い合わせる
こんな時頼りになるのが Google Cloud Platform サポート。
事情を説明するとこんな回答がきた。

```
社内の情報を確認しましたところ、削除してから 30 日以内であれば、以下の手順で復旧できる可能性がございます。

1. 以下のコマンドを実行し、削除されたサービスアカウントの Unique ID を取得する

gcloud logging read --freshness=30d --format='table(timestamp,resource.labels.email_id,resource.labels.project_id,resource.labels.unique_id)' 'protoPayload.methodName="google.iam.admin.v1.DeleteServiceAccount" resource.type="service_account" logName:"cloudaudit.googleapis.com%2Factivity"'

2. 削除されたサービスアカウントについて undelete API [1] を実行して復旧を試みる

curl -H "Authorization: Bearer $(gcloud auth print-access-token)" -X POST "https://iam.googleapis.com/v1/projects/-/serviceAccounts/{ACCOUNT_UNIQUE_ID}:undelete"

但し、undelete API のリファレンスページ [1] に記載がありますように、サービスアカウントは常に復旧できるとは限らないことにご注意ください。
```

`1.` を実行するも、以下のように、目新しい情報は見つからない。
```
TIMESTAMP                       EMAIL_ID  PROJECT_ID       UNIQUE_ID
yyyy-MM-ddTHH:mm:ss.SSSSSSSSSZ            < my-project >
yyyy-MM-ddTHH:mm:ss.SSSSSSSSSZ            < my-project >
```

UNIQUE_ID が分からないので、`2.` は実行できなかった。
ただ、実行結果を見るに削除されていないと判断し、見えなくなっているだけと仮説をおいて復旧を試みた。


# 解決策
Cloud IAM から、`service-*************@gcp-sa-******.iam.gserviceaccount.com` に剥奪前と同等の権限を付与することで復旧した。

めでたいが、次回以降、曖昧な解決では困るので、サポートにもう一度連絡した。

# 権限のふられていないサービスアカウントを一覧する方法

問い合わせたら、もう少し待ってときた。

```
サービスアカウントを復旧できた旨、ご返信頂きましてありがとうございます。

ご質問頂きました、権限が付与されていないサービスアカウントを参照する方法ですが、gcloud コマンドを少し確認しただけでは表示できるか分かりませんでした。更に調査致しますので、お時間を頂けますでしょうか。

日本時間1月22日（水）17時を目処に、ご回答または、調査状況を報告致します。
```

今日、1 月 21 日（火）18 時に返信がきた。

```
ご質問頂きました、権限が付与されていないサービスアカウントを参照する方法の件です。

調べました所、上記を直接出力するコマンドはございませんでしたが、下記で特定することはできると考えられます。

１．IAMに登録されているサービスアカウントの一覧を表示[1]
２．プロジェクトのIAMリストを権限を含めて表示[2]

下記のように指定するとサービスアカウントだけ表示できます。
$ gcloud projects get-iam-policy <PROJECT ID> | grep " - serviceAccount"

３．上記２つのコマンドの表示結果に下記の違いがあります。
「１」：権限なしのサービスアカウントも含め表示される
「２」：権限なしのサービスアカウント自体が表示されない

４．上記の差異から、権限なしのサービスアカウントを特定する

以上になります。
その他ご不明な点などがございましたら、遠慮なくご連絡ください。
どうぞよろしくお願い致します。

[1] https://cloud.google.com/sdk/gcloud/reference/iam/service-accounts/list
[2] https://cloud.google.com/sdk/gcloud/reference/projects/get-iam-policy
```

重ねていうが、権限がついていないサービスアカウントを簡単に特定するコマンドはないということだ。
2 つのコマンドの差分を見て、特定、そのアカウントに元の権限を付与することで解決する。
元の権限が分からなければ、新規プロジェクトで API 有効化して Cloud IAM を見ればよい。

というわけで収束した。

# まとめ
サービスエージェント `service-*************@gcp-sa-******.iam.gserviceaccount.com` から全権を剥奪すると見えなくなる。
見えなくなっても、削除されておらず `service-*************@gcp-sa-******.iam.gserviceaccount.com` に元の権限を与えれば元通りである。
見えなくなった物を見るには、「１．IAMに登録されているサービスアカウントの一覧を表示」、「２．プロジェクトのIAMリストを権限を含めて表示」の差分を使う。
