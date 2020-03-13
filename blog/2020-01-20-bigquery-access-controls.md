---
id: bigquery-access-controls
title: "BigQuery アクセス権設定まとめ & グループ設計例"
author: Naofumi Yamada
author_title: Data Engineer
author_url: https://github.com/na0fu3y
author_image_url: https://avatars0.githubusercontent.com/u/17900178?s=400&v=4
tags: [bigquery, cloudiam, gcp]
---

この記事は [Qiita](https://qiita.com/na0/items/dcb7030a1b5c5e707807) と同様の内容です。

BigQuery リソースのアクセス権設定は難しいですが、データ資産の保護と活用のバランスを自由に設計できます。組織に合わせたアクセス権をうまく設定 & 設計して、データ資産を活かしていきたいですね。
本稿では、アクセス権の設定方法と、叩き台になりそうな具体的な設計例について述べます。

<!--truncate-->


# アクセス権の設定方法
BigQuery リソースのアクセス権設定にあたり、覚えておく軸は 3 つです。
具体的な人間やアカウントを示す `メンバー`、権限範囲の対象（プロジェクトやデータセット）を示す `対象レイヤ`、具体的な個々の `権限`、これらをおさえておけば、BigQuery の権限設定は安心です。

## メンバーは Google アカウントを筆頭に 5 種類
以下のメンバーに対して個別に役割を振ることができます。グループやドメインは自由に作成が可能です。

- Google アカウント
- サービス アカウント
- Google グループ
- G Suite ドメイン
- Cloud Identity ドメイン

またこれらの認証を持つ全利用者を示す `allAuthenticatedUsers` と全利用者 `allUsers` のグループが存在します。


## 対象レイヤの設定は Cloud IAM、共有データセット、承認済みビュー、Cloud IAM Conditions の 4 種類

組織レベルおよびプロジェクトに対してアクセス権を付与する際に `Cloud IAM` を、
データセットに対してアクセス権を付与する際に `共有データセット` を使います。
テーブル以下の単位に対してアクセス権を付与する際に `承認済みビュー` を、
実行時の条件に対してアクセス権を付与する際に `Cloud IAM Conditions` を使います。

これだけ覚えておけば、あとはリファレンスを見ながら設定できます。

### [Cloud IAM](https://cloud.google.com/iam/docs/overview)
Cloud IAM は上記 5 種類のメンバーに対して、組織レベルおよびプロジェクトレベルのアクセス権を付与します。

### [共有データセット](https://cloud.google.com/bigquery/docs/dataset-access-controls)
共有データセットはメンバーに対して、データセットレベルのアクセス権を付与します。
設定は、データセットの詳細から、共有データセットを選択すると Cloud IAM と同じアクセス権限設定を行うことができます。

### [承認済みビュー](https://cloud.google.com/bigquery/docs/authorized-views)
承認済みビューはメンバーに対して、テーブルや、列、行レベルのアクセス権を（疑似的に）付与します。
参照元のテーブルへのアクセス権がないユーザーにも共有でき、SESSION_USER 関数を用いて、ユーザーごとのクエリを実行できる列を制限したりできます。
設定は、共有データセットから、データセットの権限、承認済みのビューと進めます。

### [Cloud IAM Conditions](https://cloud.google.com/iam/docs/conditions-overview)
Cloud IAM Conditions は Cloud IAM のアクセス権を `実行時の状態` によって切り替えることができます。対象テーブル名や実行時間などによって、権限を制限できます。終了が明確な場合の権限剥奪漏れや、定時内のみ実行可能な権限を用意してホワイト企業演出に活用できます。
限定公開ベータ版のため、Cloud IAM Conditions の申請をした上で、Cloud IAM から設定します。

## 権限は大きく 9 種類
[事前定義された役割と権限](https://cloud.google.com/bigquery/docs/access-control) を参考に説明をつけて BigQuery で使用可能な権限を記載します。

### ジョブ（クエリを含む）
クエリを実行したり、データをコピーしたり、BigQuery のあらゆる実行権限を担います。
逆に言えば、これらの権限を与えなければ、そのプロジェクトの配下で一切のジョブを走らせることができなくなります。

| 権限 | 説明 |
|:--|:--|
| bigquery.jobs.create | 新しいジョブを作成します。 |
| bigquery.jobs.listAll | すべてのジョブを一覧表示し、あらゆるユーザーが送信したあらゆるジョブのメタデータを取得します。 |
| bigquery.jobs.list | すべてのジョブを一覧表示し、あらゆるユーザーが送信したあらゆるジョブのメタデータを取得します。他のユーザーが送信したジョブについては、詳細とメタデータが削除されます。 |
| bigquery.jobs.get | ジョブのデータとメタデータを取得します。 |
| bigquery.jobs.update | ジョブをキャンセルします。ジョブを作成すると、ジョブの作成者に、そのジョブの bigquery.jobs.get 権限および bigquery.jobs.update 権限に相当する権限が自動的に付与されます。 |


### データセット
データセットの CRUD に関する権限です。

| 権限 | 説明 |
|:--|:--|
| bigquery.datasets.create | 新しい空白のデータセットを作成します。 |
| bigquery.datasets.delete | データセットを削除します。 |
| bigquery.datasets.get | データセットに関するメタデータを取得します。 |
| bigquery.datasets.update | データセットのメタデータを更新します。 |


### テーブル
テーブルの CRUD に関する権限です。

| 権限 | 説明 |
|:--|:--|
| bigquery.tables.create | 新しいテーブルを作成します。 |
| bigquery.tables.list | テーブルとテーブルのメタデータをリスト表示します。 |
| bigquery.tables.delete | テーブルを削除します。 |
| bigquery.tables.get | テーブルのメタデータを取得します。テーブルのデータを取得するには、bigquery.tables.getData が必要です。 |
| bigquery.tables.getData | テーブルのデータを取得します。この権限は、テーブルのデータを検索するために必要です。テーブルのメタデータを取得するには、bigquery.tables.get が必要です。 |
| bigquery.tables.export | BigQuery からテーブルのデータをエクスポートします。 |
| bigquery.tables.update | テーブルのメタデータを更新します。テーブルのデータを更新するには、bigquery.tables.updateData が必要です。 |
| bigquery.tables.updateData | テーブルのデータを更新します。テーブルのメタデータを更新するには、bigquery.tables.update が必要です。 |


### 関数とストアド プロシージャ
関数とストアド プロシージャの CRUD に関する権限です。

| 権限 | 説明 |
|:--|:--|
| bigquery.routines.create | 新しいルーティン（関数とストアド プロシージャ）を作成します。 |
| bigquery.routines.list | ルーティンおよびルーティンのメタデータを一覧表示します。 |
| bigquery.routines.delete | ルーティンを削除します。 |
| bigquery.routines.get | ルーティンの定義とメタデータを取得します。 |
| bigquery.routines.update | ルーティンの定義とメタデータを更新します。 |


### BigQuery Data Transfer Service
BigQuery Data Transfer Service の実行に関する権限です。

| 権限 | 説明 |
|:--|:--|
| bigquery.transfers.get | 転送のメタデータを取得します。 |
| bigquery.transfers.update | 転送を作成、更新、削除します。 |


### 保存したクエリ
保存したクエリの CRUD に関する権限です。

| 権限 | 説明 |
|:--|:--|
| bigquery.savedqueries.create | 保存したクエリを作成します。 |
| bigquery.savedqueries.get | 保存したクエリのメタデータを取得します。 |
| bigquery.savedqueries.list | 保存したクエリを一覧表示します。 |
| bigquery.savedqueries.update | 保存したクエリを更新します。 |
| bigquery.savedqueries.delete | 保存したクエリを削除します。 |

### Storage API
Storage API 経由の読み取りに関する権限です。


| 権限 | 説明 |
|:--|:--|
| bigquery.readsessions.create | BigQuery Storage API を介した新しい読み取りセッションを作成します。 |

### 外部データソース
外部データソースの接続に関する権限です。

| 権限 | 説明 |
|:--|:--|
| bigquery.connections.create | プロジェクト内で新しい接続を作成します。 |
| bigquery.connections.get | 接続のメタデータを取得します。認証情報は除外されます。 |
| bigquery.connections.list | プロジェクト内の接続を一覧表示します。 |
| bigquery.connections.use | 接続構成を使用して、リモート データソースに接続します。 |
| bigquery.connections.update | 接続とその認証情報を更新します。 |
| bigquery.connections.delete | 接続を削除します。 |

### Reservations
Reservations（容量コミットメントの予約）に関する権限です。

| 権限 | 説明 |
|:--|:--|
| bigquery.reservations.create | プロジェクトに予約を作成します。 |
| bigquery.reservations.list | プロジェクト内の全予約を一覧表示します。 |
| bigquery.reservations.get | 予約の詳細を取得します。 |
| bigquery.reservations.delete | 予約の削除 |
| bigquery.reservations.update | 予約のプロパティを更新します。 |
| bigquery.capacityCommitments.create | プロジェクトに容量コミットメントを作成します。 |
| bigquery.capacityCommitments.list | プロジェクト内の容量コミットメントすべてを一覧表示します。 |
| bigquery.capacityCommitments.get | 容量コミットメントに関する詳細を取得します。 |
| bigquery.capacityCommitments.delete | 容量コミットメントを削除します。 |
| bigquery.reservationAssignments.create | 予約割り当てを作成します。所有者プロジェクトと割り当て先リソースには、この権限が必要です。予約割り当てを移動するには、新しい所有者プロジェクトと割り当て先リソースに bigquery.reservationAssignments.create が必要です。 |
| bigquery.reservationAssignments.delete | 予約割り当てを削除します。この権限は、所有者プロジェクトと割り当て先リソースに必要です。予約の割り当てを移動するには、古い所有者プロジェクトと割り当て先リソースに bigquery.reservationAssignments.delete が必要です。 |
| bigquery.reservationAssignments.list | 予約割り当てを一覧表示します。特定のプロジェクト、フォルダ、組織の予約割り当てを検索するには、割り当て先リソースに bigquery.reservationAssignments.list が必要です。 |

# アクセス権の設計方法
ここまでにあげた、`メンバ`、`対象レイヤ`、`権限` をおさえておけば、BigQuery の権限設定は問題なくできるでしょう。その上で、組織のアクセス権設計はどうするべきでしょうか。ここでは、最小考慮事項として、リスクアセスメントの紹介と権限グループの例を示すに留めます。

## リスクアセスメントをしよう
ISO/IEC 27002, ISO/IEC 27018, JIS Q 15001, GDPR を確認して、組織ごとのリスクアセスメントを行いましょう。
やることは単純で、リスク分析と評価、コントロールです。個人情報は白黒決めにくい領域であることに加え、BigQuery ML のような機械学習の出力結果（個人情報でなくても）の倫理も問われることになる時代です。小さな母集団にフィットして出力自体が個人情報となる場合や、個人情報のうち性別以外全てをマスクして企業の採用可否を決めるような機械学習モデルを作ると偏見になる場合、多種多様なリスクを孕んでいます。

BigQuery の一部の情報が漏れたらどうなるか、モデルの中間出力は偏見を生まないか、リスクを思いつく限り洗い出しましょう。その上で、洗い出したリスクが回避可能か、予防低減可能か複数人で検討しましょう。リスクに関して思考停止せず、機密度合いに応じて権限を小さくできないか検討し続ける環境づくりができると良いです。

## グループを活用しよう
人にアクセス権が割り当てられている状態は、ライフサイクルが全く異なる物を同一管理しているため、健全な組織とは言い難いです。グループに権限を与え、ライフサイクルを切り離しましょう。グループにすることで、スケールアウトに強くなります。

1 つのグループに属すのではなく、複数のグループに跨って属するような運用を認めていただけると、エンジニア的に動きやすいです。プロジェクト A の管理者でありながら、プロジェクト B, C の分析担当者であったりといった縦横の組織構造がある場合に特に有効です。それ以外の場合でも、組織構造にそってグループを作って権限を与えると、権限管理者も例外処理が少なくてすみます。

### プロジェクト横断の階層構造の例
BigQuery の標準の役職ですが、組織の階層構造にそのまま当てはめることができます。管理者から順々に権限が減っていくので、Cloud IAM を用いて組織レベルやプロジェクト単位で設定するのがおすすめのレイヤになります。

| 役職 | 説明 |
|:--|:--|
| BigQuery 管理者 | プロジェクト内のすべてのリソースを管理する権限を提供します。プロジェクト内のすべてのデータを管理でき、プロジェクト内で実行されている他のユーザーのジョブもキャンセルできます。 |
| BigQuery データ編集者 | データセットのメタデータを読み取り、データセット内のテーブルを一覧表示する。データセットのテーブルを作成、更新、取得、削除する。プロジェクトまたは組織レベルで適用した場合、この役割は新しいデータセットを作成することもできます。 |
| BigQuery データオーナー | データセットを読み取り、更新、削除する。 データセットのテーブルを作成、更新、取得、削除する。プロジェクトまたは組織レベルで適用した場合、この役割は新しいデータセットを作成することもできます。 |
| BigQuery ユーザー | プロジェクト内でジョブ（クエリを含む）を実行する権限を付与します。ユーザーの役割は、自分が所有するジョブの列挙、自分が所有するジョブのキャンセル、プロジェクト内のデータセットの列挙ができます。また、プロジェクト内に新しいデータセットを作成することもできます。作成者には新しいデータセットに対する bigquery.dataOwner 役割が付与されます。 |
| BigQuery データ閲覧者 | データセットのメタデータを読み取り、データセット内のテーブルを一覧表示する。データセットのテーブルからデータとメタデータを読み取る。プロジェクトまたは組織レベルで適用した場合、この役割はプロジェクト内のすべてのデータセットを列挙することもできます。ただし、ジョブを実行するためには追加の役割が必要です。 |

### データセット横断の案件別アサイン構造の例
案件など組織の縦割りに当てはまるような構造です。管理者がいるわけではなく、個別のデータに対して、作成レベルと参照レベルの人がいるような構造です。データセットレイヤの権限設定のため、共有データセットを用いて設定するのがおすすめです。

| 担当案件 | 説明 |
|:--|:--|
| お客様 A の担当者 | プロジェクト A 内のデータセット、テーブルの一覧、取得の権限を持ちます。 |
| お客様 A の受注案件 X の担当者 | プロジェクト A のデータセット X 内のテーブルの作成、更新、削除の権限を持ちます。 |
| お客様 A の受注案件 Y の担当者 | プロジェクト A のデータセット Y 内のテーブルの作成、更新、削除の権限を持ちます。 |


### 利用者ごとに振る舞いを変える、データマスキングの例
役割横割りチームにフィットする構造です。データを触れる人間を少なくしたい時に使うイメージです。テーブルレイヤの権限設定のため、承認済みビューを用いて設定します。

| チーム | 説明 |
|:--|:--|
| プライバシ検証チーム | 組織内のテーブルの一覧、作成、更新、取得、削除の権限を持ちます。 |
| EL チーム | プライバシ検証、保護作業後の承認済みビューの一覧、取得の権限を持ちます。 |
| 分析チーム | EL 時の作業列を落とした、承認済みビューの一覧、取得の権限を持ちます。 |


### アクセス状態によって権限を変える、権限管理の例
時限式権限やリソース名などで実行時制約をかけたい時に使います。実行時レイヤの権限設定のため Cloud IAM Conditions を使って設定します。

| アカウント | 説明 |
|:--|:--|
| 社外監査アカウント | BigQuery データ閲覧者の権限を 1 ヶ月間、9 時から 17 時の間だけ有効にします。 |
| 社外連携アカウント | 案件の検証期間中、Storage の所定のディレクトリに BigQuery エクスポートジョブを投げる権限を持たせます。 |

## 現状を把握しよう
組織に合ったアクセス権設計のために、誰がいつどのように使っているか調査する必要があります。BigQuery と Cloud IAM の現状分析の方法を触りだけ紹介します。


### BigQuery アクセスの現状分析の進め方
#### クエリログをエクスポート or ログシンクする
この辺りを参考に、今までのクエリログを分析可能な状態にします。

- [Stackdriver Logging のエクスポートのためのシナリオ: セキュリティとアクセス解析](https://cloud.google.com/solutions/exporting-stackdriver-logging-for-security-and-access-analytics?hl=ja#configure_the_logging_export)
- [ログビューアによるエクスポート](https://cloud.google.com/logging/docs/export/configure_export_v2#dest-create)

Stackdriver Logging のエクスポートまたはログシンクの対象は、これくらいで十分です。

```
resource.type="bigquery_resource" AND
proto_payload.method_name="jobservice.jobcompleted"
```

#### 誰がどのテーブルにクエリを実行しているか眺める
ログシンクしたテーブルにこのクエリを発行すると、誰がいつ、どのテーブルを触ったのかがわかります。
これで、Cloud IAM と見比べて過剰な権限が付与されていないか確認しましょう。

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
  last_referenced,
  principal_email
FROM (
  SELECT
    CONCAT(project_id,'.',dataset_id,'.',table_id)table_id
  FROM
    < your-dataset >.__TABLES__)
FULL JOIN (
  SELECT
    protopayload_auditlog.authenticationInfo.principalEmail principal_email,
    ADD_PROJECT_ID_IF_NEEDED(REGEXP_REPLACE(table_id, r"[\s`]", ""),
      protopayload_auditlog.servicedata_v1_bigquery.jobCompletedEvent.job.jobName.projectId)table_id,
    MAX(timestamp)last_referenced
  FROM
   < your-log-sync-dataset >.cloudaudit_googleapis_com_data_access
  INNER JOIN
    UNNEST(REGEXP_EXTRACT_ALL(LOWER(protopayload_auditlog.servicedata_v1_bigquery.jobCompletedEvent.job.jobConfiguration.query.query), r"(?:from|join)\s*(`(?:[\-\w]+\.)?\w+\.\w+`|(?:[\-\w]+\.)?\w+\.\w+\s|(?:[\-\w]+\.)?\w+\.\w+$)"))table_id
  GROUP BY
    table_id,
    principal_email)
USING
  (table_id)
```

### Cloud IAM の現状分析の進め方
#### 泥臭く頑張る
組織が拡大していく中で臭うポイントはこれです。

- Cloud IAM の Web UI から過剰に付与された権限がある
- メンバーがデフォルトの役割を持っている or メンバーが継承されていない

これらを見つけたら過剰な権限の剥奪と、同じ仕事をしている人をグルーピングしてデフォルトじゃない役割を作って付与できないか、継承関係にできないかを考えると良いです。

# まとめ
組織構造に合わせてグループを作成し、グループに対してアクセス権を振りましょう。このアクセス権は、対象レイヤに応じて 4 種類の設定の仕方があります。ぜひ、みんなでデータ利活用を進め、幸せになれる世界を作っていきましょう。
