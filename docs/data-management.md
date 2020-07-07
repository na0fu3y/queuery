---
id: data-management
title: "データマネジメントとは"
sidebar_label: データマネジメントとは
---

「データマネジメント知識体系ガイド」、「データマネジメントが30分でわかる本」から引用、加筆してます。

## そもそもデータマネジメントとは
組織が財務的・物理的な資産から価値を得るためにそれらを効果的に管理するのと同様に、組織がデータを資産と見なす時、データ資産から効果的に価値を引き出すため、データマネジメントが必要となる。（引用元：DAMA-DMBOK Second edition）

## データを資産として見ると何が必要か
- 置き場所を決める
- 盗まれたり、無くなったりしないように管理する
- どこからきて、どこに行くのか把握する
- 価値が減らないように気を付ける
- 管理者とルールを整備する


## DMBOK における 11 のデータマネジメント領域
- データアーキテクチャ
- データモデリングとデザイン
- データストレージとオペレーション
- データセキュリティ
- データ統合と相互運用性
- ドキュメントとコンテンツ管理
- 参照データとマスターデータ
- データウェアハウジングとビジネスインテリジェンス
- メタデータ
- データ品質

## データアーキテクチャの整備計画
### 整備の目的
データとビジネスの紐付けが可視化され、予期しない影響範囲を減らすことができる。

### 作るもの
- データ種別ごとの、データ発生からビジネスまでのアーキテクチャ図
- アーキテクチャを改善する計画

### TODO
- 既存のデータアーキテクチャを書き出す
    - どこからデータを取ってきて
    - どこに保存して
    - どのビジネスに使っているか
- 理想のアーキテクチャとそのビジネス価値を思い描く
- 改善方向を決める


## データストレージとオペレーションの整備計画
### 整備の目的
事業の継続性を確保し、事業が中断されるリスクを減らすことができる。

### 作るもの
- データのライフサイクル全体の可用性を管理する仕組み
- データの最低限の完全性を保証する仕組み
- データベースオペレーションの管理計画

### TODO
- 業務ニーズをデータベース要件に落として合致する技術を管理する
- データの保存、活用、移動などの要件を満たすようなアプリケーション開発を行う

##  データ統合と相互運用性
### 整備の目的
データ統合のハブとなるシステムを設け、システムと利用者の負荷を軽減し、過剰なリクエストや誤集計などのビジネスリスクを低減する。

### 作るもの
- 必要なフォーマットとタイミングで安全にデータを提供する仕組み
- 共通のモデルとインタフェースの提供
- 重要なイベントアラートの定義

### TODO
- 業務に必要なデータ、データソースが業務要件を満たすか評価する
- データを統合するシステムの設計、開発をする


## データモデリングとデザイン
### 整備の目的
業務要件や整合性を保つためのデータ仕様を理解するコストを低減し、それに依るリスクを低減する。

### 作るもの
- データの関連性を概念、論理、物理モデルで維持管理する仕組み

### TODO
- データの関連性を書き出す
- アジャイルなデータモデリングの仕組みを設計して全社に浸透させる

## マスタデータ管理
### 整備の目的
システム間のデータのばらつきを整え、マスタデータとして信頼できるデータソースを提供することで、一定の品質とビジネス要件を保証する。

### 作るもの
- 照合済みかつ品質評価済みの正式なソースとしてのマスタデータ
- マスタデータの業務横断性を確保する仕組みを作る

### TODO
- データ定義の所有者や責任の所在を定義する
- マスタデータの変更プロセスを定義する
- SLA と評価尺度を決める
- マスタデータを参照するルールを決める

## ドキュメントとコンテンツ管理
### 整備の目的
非定型なデータは管理プロセスが定義されないまま放置されるため、非構造化データを積極的に管理し、法令遵守、業務記録、訴訟準備、セキュリティ、リスク領域管理を実施可能にする。

### 作るもの
- ドキュメントとコンテンツを効果的に蓄積、検索、利用できる仕組み
- ドキュメントの法的義務を遵守する仕組み
- 構造化データと非構造化データの統合機能

### TODO
- 散らばっているドキュメントが何なのか分類と整理
- リスクの大きな非構造化データを管理する業務ルールの規定
- 非構造化データを管理できる情報システム資産台帳を作る

## データセキュリティ
### 整備の目的
法的、道徳的責任を多尺、顧客や社員の信頼を勝ち取ると共に、データセキュリティがビジネスの足かせとならないようにする。

### 作るもの
- データ資産の不適切なアクセスを防止する仕組み
- プライバシと機密性に関する規制とポリシー

### TODO
- どんなデータを持っているか特定する
- データのセキュリティレベルを定める
- セキュリティレベルを定期的に見直す業務フローを設計する
- プライバシと機密性に関するポリシーを浸透させる

##  データ品質
### 整備の目的
低品質なデータにより生じる、誤集計や課題解決力の低下、事業機会の損失、業務統合の遅延、不正行為の増加、信用力の低下などのリスクを低減する。

### 作るもの
- データ品質の基準、要件、仕様
- データ品質を測定、監視、報告するプロセス

### TODO
- 高品質なデータを定義する
- データごとの重要性を評価し、重要な順に品質向上の計画を立てる
- データ品質の管理ルールを改善する仕組みを作る

##  データウェアハウジングとビジネスインテリジェンス
### 整備の目的
業務分析と意思決定のために、高品質な統合データを提供し、組織の競争優位性を確立する。


### 作るもの
- 統合データの提供に必要な環境と業務プロセス
- データ利用者が効果的な分析と意思決定を行う支援プロセス

### TODO
- 支援対象となるデータ利用者の要件を理解する
- データソースと BI の整備を行う
- 運用チームを整備する


##  メタデータ管理
### 整備の目的
データの種類と量が増え続ける中で、データの説明や調査した性質を保管することで、データ分析と調査に要する時間を短縮したり、データ利用者とのコミュニケーションを改善したり、サービスレベルの無視などの誤ったデータの使い方を防いたりすることができる。

### 作るもの
- 業務用語の定義
- メタデータを収集し統合したもの
- メタデータの標準的なアクセス方法

### TODO
- メタデータをビジネス、テクニカル、オペレーショナルな領域に分類する
- メタデータに必要な要件を定義する
- メタデータリポジトリを用意する
- メタデータの運用方法を決める

## データガバナンス
### 整備の目的
組織戦略とデータマネジメントを接続して計画を立て、他の各領域に対して、ルールと権限を提供する。

### 作るもの
- データマネジメントの役割分担、権限の管理、監視体制

### TODO
- 現状分析して組織の戦略とギャップの大きい部分を把握する
- データ管理の全体指針とルールを定める
- トップダウンの推進、承認、支援、報告体制を浸透させる