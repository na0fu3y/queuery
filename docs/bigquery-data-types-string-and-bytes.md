---
title: "文字列型"
---

[文字列型](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-types#string_type) は、その名の通り文章で表現するようなデータを保持するのに使います。他にも、カテゴリカルなデータをリーダブルな形で残しておくのにも便利なデータ型です。

ここでは、大半の関数を共有する[バイト型](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-types#bytes_type)と一緒に見ていきましょう。

## ストレージサイズ

型によるストレージサイズは以下のようになっています。
BYTESでストレージコスト節約効果があるわけでもないですね。

|名前|説明|ストレージ サイズ|
|---|---|---|
|STRING|文字列型|2 バイト + UTF-8 エンコードされた文字列のサイズ|
|BYTES|バイト型|2 バイト + 値のバイト数|

## 文字列型
可変長文字（Unicode）データです。BigQueryの一行のサイズ制限に引っかからなければ何文字でも保持することができます。

STRINGはUTF-8でエンコードされており、全ての関数はUnicode文字として処理します。
例えば、LENGTH関数にSTRINGを入れるとUnicode文字数が帰ってきます。

BigQuery上では、`'シングルクオート囲み'`か`"ダブルクオート囲み"`で定義します。
改行を含む場合には、`'''トリプルクオート'''`、`"""トリプルクオート"""`を利用することもできます。

## バイト型
可変長文字バイナリデータです。文字列型同様、BigQueryの一行のサイズ制限に引っかからなければ何文字でも保持することができます。

BYTESはRAWバイトを操作するため、LENGTH関数はバイト数を返します。

ただし、ビット型を集合として扱うのは辞めるべきです。
なぜなら、ビット演算をする際には、同じ長さのバイト型を用意する必要があり、コードポイントやシフト演算を上手に使わなければなりません。どうしてもビットセットを扱いたい場合は、INT64を推奨します。

BigQuery上では、STRING定義の前に`b`をつけて`b'このように'`定義します。
もちろん改行含むトリプルクオートにつけても問題なく動作します。

## STRINGとBYTESのキャスト

それぞれ、暗黙的なキャストは行われないため、必要な時はキャストで相互変換を行います。
BYTESが無効な文字列だった場合STRINGへのキャストは失敗します。

### BYTES -> STRING
`CAST(b'BYTES' AS STRING)`を使いましょう。
後述するSTRING->BYTESと合わせるために`CODE_POINTS_TO_STRING(TO_CODE_POINTS(b'STRING'))`を使っても良いでしょう。

### STRING -> BYTES
前述のように、BYTESを直接定義できる場合には、`b`プレフィクスを使いますが、使えない場合もあります。

STRINGからBYTESへの変換は、`CODE_POINTS_TO_BYTES(TO_CODE_POINTS('STRING'))`を使いましょう。

`CAST('STRING' AS BYTES)`で定義すると、ハマる値域（0x80 - 0xff）があるため非推奨です。

### `CAST('STRING' AS BYTES)`をなぜ使わないか
`CAST('\x80' AS BYTES)`、`b'\x80'`これらは同じ値を定義しようとしていますが、結果が異なります。

おそらく、`CAST('\x80' AS BYTES)`は 0x80 のコードポイントの文字からなる文字列を UTF-8 としてエンコード解釈した後にバイト列に変換します。
これに対し、`b'\x80'`は単に 0x80 の1バイトバイト列として解釈されるはずです。

`CODE_POINTS_TO_BYTES(TO_CODE_POINTS('\x80'))` を使うと、`b'\x80'`と同じBYTESが返ってきますので、こちらを推奨します。


## どう使い分けるか
基本的にはSTRING型、画像などリーダブルな文字列でなく、RAWバイトとして扱うべきもののみBYTES型を選びましょう。

BYTESでストレージコスト節約効果があるわけでもないです。
むしろ、AutoML TablesはBYTESに対応していないなど、不便な点も多いです。

## ||演算子
ひっそりリリースされた文字列結合演算子`||`は、ドキュメントにはSTRINGやBYTES、ARRAYについてしか記載がありませんが、暗黙的文字列キャストをしてくれます。
`SELECT 1||2`で`12`を返したりちょっとお節介な演算子ですが、`CONCAT`や`FORMAT`より`CAST`の手間が減ったり、記述量が減ったりする場合もあります。見通しがよくなる書き換えでしたらぜひ行いましょう。

参照：https://cloud.google.com/bigquery/docs/reference/standard-sql/functions-and-operators#operators


## まとめ
STRING、BYTESについてまとめました。
基本的にはSTRING、RAWバイトにのみBYTESを選びましょう。
