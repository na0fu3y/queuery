---
id: bigquery-access-controls
title: "BigQuery アクセス権設定"
sidebar_label: アクセス権設定
---

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


## 対象レイヤの設定は Cloud IAM、共有データセット、Table access controls、承認済みビュー、列レベルのセキュリティ、Cloud IAM Conditions の 6 種類

組織レベルおよびプロジェクトに対してアクセス権を付与する際に `Cloud IAM` を、
データセットに対してアクセス権を付与する際に `共有データセット` を、
テーブルに対してアクセス権を付与する際に `table access controls` を、
テーブルやビュー以下の単位に対してアクセス権を付与する際に `承認済みビュー` を、
テーブルの列の単位に対してアクセス権を付与する際に `列レベルのセキュリティ` を、
実行時の条件に対してアクセス権を付与する際に `Cloud IAM Conditions` を使います。

これだけ覚えておけば、あとはリファレンスを見ながら設定できます。

### [Cloud IAM](https://cloud.google.com/iam/docs/overview)
Cloud IAM は上記 5 種類のメンバーに対して、組織レベルおよびプロジェクトレベルのアクセス権を付与します。

### [共有データセット](https://cloud.google.com/bigquery/docs/dataset-access-controls)
共有データセットはメンバーに対して、データセットレベルのアクセス権を付与します。
設定は、データセットの詳細から、共有データセットを選択すると Cloud IAM と同じアクセス権限設定を行うことができます。

### [table access controls](https://cloud.google.com/bigquery/docs/table-access-controls-intro)
table access controlsはメンバに対して、テーブルレベルのアクセス権を付与します。
設定は、テーブルの詳細から、テーブルの権限を選択すると Cloud IAM と同じアクセス権限設定を行うことができます。

### [承認済みビュー](https://cloud.google.com/bigquery/docs/authorized-views)
承認済みビューはメンバーに対して、テーブルや、列、行レベルのアクセス権を（疑似的に）付与します。
参照元のテーブルへのアクセス権がないユーザーにも共有でき、SESSION_USER 関数を用いて、ユーザーごとのクエリを実行できる列を制限したりできます。
設定は、共有データセットから、データセットの権限、承認済みのビューと進めます。

### [列レベルのセキュリティ](https://cloud.google.com/bigquery/docs/column-level-security-intro)
列レベルのセキュリティは、列ごとに 1 つのアクセス権を設定できます。
予め人ごとにアクセス権レベルを振っておき、列アクセスを制限したいときに使えます。
承認済みビューよりも静的な設定に向いているように見えます。
設定は、テーブルからスキーマを編集に行くと、ポリシータグを追加できます。

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