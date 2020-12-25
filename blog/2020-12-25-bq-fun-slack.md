---
id: bq-fun-slack
title: "BQ FUN Slackを立ち上げた話"
author: Naofumi Yamada
author_title: Data Engineer
author_url: https://github.com/na0fu3y
author_image_url: https://avatars0.githubusercontent.com/u/17900178?s=400&v=4
tags: [bigquery]
---

[BigQuery Advent Calendar 2020](https://qiita.com/advent-calendar/2020/bigquery)最終日、25日目のポエムです。

私は今回初めて、アドベントカレンダーを立てる経験をしましたが、25日埋まる**BigQueryの技術そのもの、取り巻くコミュニティ、どちらも素晴らしい**ものだと思いました。実際立てなければ、25記事が埋もれていたのかと思うと感慨深いです。

<!--truncate-->

正直5, 6記事は書くつもりでいましたが、蓋を開けてみたら埋められていて、書いていただいた方も、他の場でBigQueryに関する記事を書いていただいた方も、応援していただいた関係の方々もありがとうございました。

[クラスメソッド BigQuery Advent Calendar 2020](https://qiita.com/advent-calendar/2020/classmethod-bigquery)もぜひお楽しみください！次回があればぜひ一緒にやってみたいですね。

# みんなのBigQuery 2020
みなさんの今年のBigQuery生活はいかがお過ごしだったでしょうか。機能面の振り返りは、Release notesの他、いくつかまとめてくださっている方がいますので、ぜひ参照いただければと思います。

- [Release notes](https://cloud.google.com/bigquery/docs/release-notes)

- [BigQueryの2020年アップデートを（だいたい）全部振り返る](https://medium.com/google-cloud-jp/bigquery-2020-update-summary-dfd245e77e44)

- [2020 年の BigQuery リリースまとめ](https://dev.classmethod.jp/articles/2020-bigquery-release-sumup/)

リリースにワクワクする一年でしたね。これからも楽しみです。
個人的に恩恵を受けたものもたくさんあり紹介しきれないですが、私に影響が大きかったものはこの辺ですね。
EXTERNAL_QUERY、列レベルセキュリティ、スケジューリング、Data Catalog、INFORMATION_SCHEMA、ML、コネクテッド シート、GA4、Dataformなどなど。

マルチタブエディタ、Feature Store、QnA、Omniにも期待してます！


# 私のBigQuery 2020
私のBigQuery 2020は、新UIに出会うことなく終わりそうです。

精神面の振り返りをすると、様々な機能を実装していただき、BigQuery開発者の方々ありがとうございます。SnowflakeもAzure Synapse AnalyticsもRedshiftもMaxComputeも楽しい一年でした。

BigQueryのおかげで仕事ができたと言っても過言でないくらいにBigQueryを利用させていただきました。お返しというと恐縮ですが、社内向けにBigQueryの関数を共有して、利用者を少しでも増やせたらと思っていました。


# BQ FUN Slackの立ち上げ

前置きが長くなりました。社内向けだけでなく、BigQuery関数の使い方を共有するためのSlackワークスペースを立ち上げました。BQ FUNというコミュニティ名には、**BigQuery関数・機能を紹介する、ファンになってもらう思い**を込めています。
今日までで100を超える関数を一言以上触れる投稿をしています。今後は機能やファンを増やすことを目指して情報共有を行っていきたいですね。

## リンク
### [bqfun.slack.comワークスペース](https://bqfun.slack.com/)
Slackワークスペースです。現在は104人の登録があります。
情報流通量はまだまだなので、もっと盛り上げていきたいですね。Slack Exportも活かして可視化していきたいです。
Slackのクローズドコミュニティがベストかは議論の余地ありと感じています。

### [bqfun.slack.com招待フォーム](https://docs.google.com/forms/d/e/1FAIpQLSeJraWYxQr91zo3nfh6GKdczqsV40FGLq49enk9aSO1V6Hj0g/viewform)
裏でおじさんが働いて、入力されたメールアドレス宛に招待をお送りします。
5分以内にこなければ、本体のおじさん[@na0fu3y](https://twitter.com/na0fu3y)にDMください。

### [BQ FUN Issues](https://trello.com/b/EHyZuRFS/bq-fun-issues)
Trelloで課題管理をしています。ぜひ一緒に課題感を共有し、BigQueryコミュニティを盛り上げていけると嬉しいです。

## なぜ立ち上げたのか
2020-09-05に立ち上げて111日が経過しました。[マネーフォワードケッサイ](https://mfkessai.co.jp/)に入社した直後、[マネーフォワード](https://moneyforward.com/)社内Slackに個人的な趣味でBigQueryチャネルを立ち上げ、ユーザを増やしたい、効率の良いクエリを書いて欲しい思いで、関数の紹介を始めました。

社内的にも好評で、ウインドウ関数周りのクエリの効率化や、より簡潔な関数の存在の共有、ちょっと便利なテクニックやサイレントリリースの検証、データ基盤の周辺技術など様々な観点でBigQueryに関する情報が共有できています。

社内だけで始めた頃に、社外に公開しても便利なのではと思い、同じようにSlackワークスペースを作ってみることにしました。

## 何を共有しているか
関数の紹介を中心に行っています。が、100日を超えたあたりから平日毎日更新のネタがなくなり、更新が滞っています。
関数以外にもリリースがあった日には取りあげたり、少しでも早く便利機能利用者が増えることを願って情報共有しています。



## 立ち上げてどう変わったか

私自身、このようなコミュニティを立ち上げるのが初めてで、社内に共有する情報のうち、BigQuery関数に関するものを毎日投下することでスタートしました。

大きく2つ以下のような変化を感じました。

### 情報を共有しようという意識が生まれた

情報を共有できる場が生まれたことで、インプットした分は吐き出そう、吐き出すためにインプットしようと好サイクルに乗れました。これは、アウトプット先に限らない効果ですが、アウトプット先が限定的なコミュニティである方がアウトプットしやすいと思いました。Google CloudコミュニティよりBigQueryコミュニティの方がアウトプットしやすい感覚があります。

### 一対一ではなく多対多のコミュニティになった

考えれば当たり前ですが、全員がある程度同じ目標に向かってアウトプットするコミュニティは職場くらいなものです。自由なコミュニティでは、インプットの質も、アウトプットの方向も、まちまちです。ただ、人数が増えることでアウトプットの量が増え、Q&Aの質も増します。
数の力はすごいです。

## 今後何を考えているか
考えていることは[BQ FUN Issues](https://trello.com/b/EHyZuRFS/bq-fun-issues)に載せていますが、大きく2つあります。

### コミュニティを可視化したい
BQ FUNコミュニティが上手く情報交換の場になっているか、縮退傾向にないかを確認できるようにしていきたいです。

### 情報がパブリックに留まる環境を作りたい
情報流量が増えるのと同時に、情報を留め、誰でも参照可能にしていきたいです。


# BigQueryはいいぞ

BigQueryそれ自体の魅力も多いですが、加えて、コミュニティの強さもGoogle CloudやBigQueryの魅力であると思います。BigQueryの魅力をみんなで分かちあい、より多くの人が目的の達成に向けて活用できる状態にしていく手助けができたら良いですね。
来年のBigQueryもまた、楽しみましょう！
