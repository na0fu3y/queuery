---
id: bq-fun-slack
title: "データ活用組織を進める振り返り"
author: Naofumi Yamada
author_title: Data Engineer
author_url: https://github.com/na0fu3y
author_image_url: https://avatars0.githubusercontent.com/u/17900178?s=400&v=4
tags: [データ]
---

この記事は、datatech-jp Advent Calendar 2021の14日目の記事となります。

ここ最近はBigQueryとデータポータルを使い、社内のデータ利活用を進めてきました。
その取り組みを振り返った気持ちを、ポエムとして残しておこうと思います。話半分にお読みください。

# データ活用の中心は「人」である

当たり前ですが、データを活用する最終端は人です。
データ使って、情報の閲覧者に行動してもらうことがデータ活用を重要な点になります。

例えば、データ視覚化は、データを分かりやすく見せることで、解釈を可能にし、閲覧者に行動を促すものです。視覚化の他にも、直接的なData Consumerは機械学習モデルで、商品を推薦した結果、閲覧者が購買行動を取るなど、最終的に人中心であるものが多い（ように見えて、認知されやすい）です。

データの活用は、ツールのデジタル化を進め、データで見えるものを増やした結果受けられる恩恵ですね。

# データ活用のためのデジタル化レベル

## Lv. 0. デジタル化されていない状態

便宜的に、ビジネスのデータがほとんどなく、最低限必要な外向けのデータが人によって記録されている状態を指します。ツールのデジタル化なしに、人が記録しようと思うと労力が高い割に品質が安定しないなどデータ活用に向くようなデータが得にくい問題が発生しやすいです。一方で、このレベルの組織は現状維持バイアスも強く、課題意識はあっても、外からの強いエネルギー提供がないとレベルアップが難しいです。

## Lv. 1. ツールのデジタル化

ツールのデジタル化を進めると、プロセスのデジタル化が可能になり、データを使った仕組みによって、人が行うプロセスの一部を代替可能になります。ここまで来れるとデータ活用によって、ビジネスを高速に進め差別化可能な要素の一つになりやすいですね。

## Lv. 2. プロセスのデジタル化

プロセスのデジタル化が進むと、ビジネスの中間プロセスで人を介在しなくなり、I/Oの末端でのみ人や物、金が必要になります。中間プロセスの人、物、金はデータで代替するようになります。Lv. 1.に不満を持てる組織では、Lv. 2.へのレベルアップも難しくないでしょう。データ活用の事例も増えてきており、事例を目標にデジタル化を進めることも、進める人材を調達してくることも容易になってきた印象です。

## Lv. 3. ビジネスモデルのデジタル化〜

プロセスの自動化が進み、各種プロセスの最適化が可能になり、最適化されたプロセスそのものがビジネスになるなど、ビジネスとデジタルが融合した状態です。データ活用の理想形の一つではありますが、これを推進できる人材はまだまだ多くなさそうです。

# データ活用の方法論の充実

デジタル化レベルが上がってきており、データ活用の方法論も充実してきています。
特にデータ可視化はデータウェアハウスによって再定義されつつある印象です。

## データ可視化

### データウェアハウスによってデータ視覚化に必要なタスクが再定義された

近年のデータウェアハウス台頭により、データソース上の物理モデルを、データウェアハウス上で使いやすく「リモデリング」する動きが進み、担当者が簡単なデータ視覚化を行う世界になってきています。

結果として、職人芸であったデータのリモデリングが、データの視覚化に向けて必要なタスクの1つとして認識されるようになりました。

「**データソース→（ブラックボックス）→データ視覚化**」な世界から
「**データソース→物理モデル→汎用データ→特化データ→データ視覚化**」な世界になり、だいぶ明るくなりました。

このようにデータ視覚化までの道筋が明らかになり、データマネジメント領域の一つとして広く認知されたことで、一部の職人芸がはがれ、従来よりデータの視覚化を誰でもやりやすい世界が訪れました。

### データ視覚化の役割

データ視覚化は、データの次元数を落としたり、並べ替えてデータの関連性を付加して、人に解釈しやすくするものです。Data Consumerの中でもデータ視覚化は、組織の共通認識を得やすく、データの民主化のスタート地点にしやすいですね。

データ視覚化は「有効な仮説を継続的に検証すること」と「新たな仮説を発見すること」が重要な価値になります。
有効な仮説がある場合は、データ可視化を行って良いですが、有効性が明らかでない仮説がある場合はデータ分析によって確度を上げることを優先すべきです。検証できない仮説があれば追加のデータ収集を検討しましょう。もし、仮説を持っていない場合は調査や検討を実施していきましょう。

## データ分析

### AutoMLの充実

### データ分析の役割

データ分析は、事実を表現するデータを詳細に調べ、仮説の真偽を確かめたり、有用な情報を抽出することで、人の意思決定を支援するものです。基本的なデータ視覚化と同時に実施が求められ、仮説の立案から一連の流れとして実施されることも多いですね。ピボットテーブルなど基本的な技術を活用することで多くの検証は実現可能で、基本技術の布教活動は始めやすいです。Data Consumerの中でも高度なデータ分析や、ビジネスから仮説を立てて検証できるスキルの重要性は増していますね。

データ分析は「仮説の有効性を見定めること」が重要な価値になります。そのためには、真実を表現するデータの収集が必要になるため、データ活用のためのデータづくりを実施していきましょう。

## データ活用のためのデータづくり

DMBOKでいう以下のような項目を進めていく必要があります。

- データアーキテクチャ
- データモデリングとデザイン
- データストレージとオペレーション
- データ統合と相互運用性
- ドキュメントとコンテンツ管理
- 参照データとマスターデータ
- メタデータ
- データ品質

こちらは他の方も多く書かれているため、そちらを参考にしていただくのが良さそうです。
https://qiita.com/advent-calendar/2021/datatech-jp

データ活用のバランスを取るためにも、データ活用が軌道に乗り始めたタイミングでデータマネジメント成熟度アセスメントを実施はお勧めです。組織として弱い部分の補強とビジネス的に優先度の高い部分の把握を行い、優先度をつけながらデータ活用を行っていきましょう。
分かりやすい成果と、中長期的に効果が出るものをうまく実施し、組織のモチベーションを維持しながら進めていけると良いですね。

# まとめ

データ活用組織は人の集合体で、人のレベルアップなしにデータ活用は進みません。
また、デジタル化とデータ活用は非常に近い距離にあります。データ活用を行うために最低限のデジタル化は必要で、データ活用が進むとデジタル化も進みます。
デジタル化が進むにつれ、Data Consumerはデータ視覚化だけでなく、機械学習モデルやソフトウェアなどの終端ノードをもち、人や物、金と接続するようになります。
データ視覚化は効果が分かりやすく、デジタル化の最初に始めやすいもので、それを皮切りにデータガバナンスを進めていけると、比較的、組織のモチベーションを維持しながら進めていけます。

ぜひ、データ活用組織をみんなで推し進めていきましょう。
