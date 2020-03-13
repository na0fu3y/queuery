---
id: bigquery-sandbox
title: "BigQuery で 1 円も溶かさない人の顔 (ZERO BYTE STRUCT を考案した)"
author: Naofumi Yamada
author_title: Data Engineer
author_url: https://github.com/na0fu3y
author_image_url: https://avatars0.githubusercontent.com/u/17900178?s=400&v=4
tags: [bigquery]
---

この記事は [Qiita](https://qiita.com/na0/items/2086fd93116ee7ce9a96) と同様の内容です。

自分は BigQuery で Extract-Load されたデータを機械学習モデル用に前処理し、テラバイト級の特徴量エンジニアリングを行っています。この記事では、BigQuery のデータ量を一切消費せず、誇張なく 1 円も溶かさない裏技をまとめます（2019/12/18 現在）。
ただし、定額クエリやストリーミングインサートは、本記事の対象外です。

<!--truncate-->

※ パロ元：[BigQueryで150万円溶かした人の顔](https://qiita.com/itkr/items/745d54c781badc148bb9)
元ネタの方と同じ職場で働くことになりましたので、被せて書いております。この記事では、BigQuery 記事最安値を目指します。

速くて安い BigQuery は、データウェアハウスとしても、特徴量エンジニアリングツールとしても優れています。
機械学習モデルを用いたサービスを構築する際には、ベースラインとして候補に挙がるでしょう。

# BigQuery の料金
オンデマンドクエリを利用する際、極めて重要なのは読み取りデータ量に対して \$5/TB の料金が発生する点です。これと毎月ストレージコスト \$0.02/GB がかかるだけで、BigQuery の請求が完結する点は恐ろしく明快だと言えます（US (multi-region) 2019/12/18 現在）。 
つまり、読み取るデータ量が小さければ、お財布に優しい料金で膨大な計算を BigQuery に担ってもらえるということです。BigQuery ML もスケール 50 倍ですが、同様の料金体系です。

料金の詳細な説明は [公式ページ: BigQuery pricing](https://cloud.google.com/bigquery/pricing)、[公式ページ: BigQuery ML pricing](https://cloud.google.com/bigquery-ml/pricing) をご覧ください。


# Lv.0 [BigQuery サンドボックスの使用](https://cloud.google.com/bigquery/docs/sandbox)
BigQuery にはサンドボックスと呼ばれる、クレジットカード不要で、無料枠分使える機能が実装されています。
この設定をお試ししつつ、利用額の目安を知ることができます。

# Lv.1 UNNEST でテーブルを作る
```sql
SELECT *
FROM UNNEST([STRUCT('a' AS a, '1' AS b), STRUCT('b' AS a, '2' AS b)])
```
クエリの中で生成されたデータは課金されません。UNNEST でどんな大きなデータを作っても読み取りデータ量は 0 になります。CSV, JSON, AVRO などから、UNNEST のデータに変換するコードを用意しておくと、テスト用データとしても使えるのでおすすめです。

詳しくは、[BigQuery で無からリレーションを出現させる（StandardSQL 編）](https://qiita.com/yancya/items/a1ebe6dbc5d635839cc8)や [BigqueryでUNNESTを使いこなせ！クエリ効率１００%！！最強！！](https://medium.com/eureka-engineering/bigquery-unnest-100percent-3d28560b4f0) が参考になります。

# Lv10. CREATE FUNCTION / VIEW で永続データを作る
```sql
CREATE FUNCTION dataset.function_name()AS([STRUCT('a' AS a, '1' AS b), STRUCT('b' AS a, '2' AS b)]);
```
上の方法と組み合わせて使います。ポイントは永続化できる点です。ARRAY を入れるなら UNNEST して擬似テーブルに、スカラ値を入れるなら、擬似定数として呼び出すことができます。VIEW の場合は、SELECT * FROM UNNEST([]) で保存しましょう。VIEW の中でテーブルを参照すると、クエリの度に読み込みコストが発生するので注意しましょう。

# Lv20. ERROR でテーブル参照する
```sql
SELECT
  ERROR(TO_JSON_STRING(ARRAY(
      SELECT
        AS STRUCT MAX(geo_id),
        MIN(geo_id)
      FROM
        `bigquery-public-data.census_bureau_acs.blockgroup_2010_5yr`)))
```
BigQuery は成功したクエリのみ課金されます。つまり絶対に失敗する `SELECT ERROR` でテーブルを読み取ると課金されません。ERROR 関数は STRING 引数を取れるので、TO_JSON_ARRAY_STRING と ARRAY 関数を組み合わせて、テーブルを JSON で返すようにします。このエラーを各種クライアントの実装からキャッチして、JSON 展開することで、無料のテーブル参照が実現できます。Web コンソールでは、表示文字数に制限があるため、大きなデータを見ることはできません。

# Lv45. カラム名としてデータを保管する
(10 MB 分の課金が発生するので、**0 円ではない** です)
クライアント API からテーブルを作成する際に、カラム名に情報 64 文字(a-zA-Z0-9_)を埋め込み、INFOMATION_SCHEMA 経由で参照する。
STRING を適切に加工することで 10 MB の課金で無制限のデータにアクセスできる。STRING は Lv 100.と違い、データ変換前の列サイズ制約にかかりやすいので注意しましょう。

# Lv70. JavaScript で計算する


```sql

CREATE TEMP FUNCTION `magic_function`(x ARRAY<INT64>) RETURNS ARRAY<INT64> LANGUAGE js AS '''
const memory = new WebAssembly.Memory({ initial: 256, maximum: 256 });

const env = {
    'abortStackOverflow': _ => { throw new Error('overflow'); },
    'table': new WebAssembly.Table({ initial: 0, maximum: 0, element: 'anyfunc' }),
    'tableBase': 0,
    'memory': memory,
    'memoryBase': 1024,
    'STACKTOP': 0,
    'STACK_MAX': memory.buffer.byteLength,
};

const imports = { env };

const bytes = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 139, 128, 128, 128, 0, 2, 96, 1, 127, 0, 96, 2, 127, 127, 1, 127, 2, 254, 128, 128, 128, 0, 7, 3, 101, 110, 118, 8, 83, 84, 65, 67, 75, 84, 79, 80, 3, 127, 0, 3, 101, 110, 118, 9, 83, 84, 65, 67, 75, 95, 77, 65, 88, 3, 127, 0, 3, 101, 110, 118, 18, 97, 98, 111, 114, 116, 83, 116, 97, 99, 107, 79, 118, 101, 114, 102, 108, 111, 119, 0, 0, 3, 101, 110, 118, 6, 109, 101, 109, 111, 114, 121, 2, 1, 128, 2, 128, 2, 3, 101, 110, 118, 5, 116, 97, 98, 108, 101, 1, 112, 1, 0, 0, 3, 101, 110, 118, 10, 109, 101, 109, 111, 114, 121, 66, 97, 115, 101, 3, 127, 0, 3, 101, 110, 118, 9, 116, 97, 98, 108, 101, 66, 97, 115, 101, 3, 127, 0, 3, 130, 128, 128, 128, 0, 1, 1, 6, 147, 128, 128, 128, 0, 3, 127, 1, 35, 0, 11, 127, 1, 35, 1, 11, 125, 1, 67, 0, 0, 0, 0, 11, 7, 136, 128, 128, 128, 0, 1, 4, 95, 115, 117, 109, 0, 1, 9, 129, 128, 128, 128, 0, 0, 10, 196, 128, 128, 128, 0, 1, 190, 128, 128, 128, 0, 1, 7, 127, 2, 64, 35, 4, 33, 8, 35, 4, 65, 16, 106, 36, 4, 35, 4, 35, 5, 78, 4, 64, 65, 16, 16, 0, 11, 32, 0, 33, 2, 32, 1, 33, 3, 32, 2, 33, 4, 32, 3, 33, 5, 32, 4, 32, 5, 106, 33, 6, 32, 8, 36, 4, 32, 6, 15, 0, 11, 0, 11]);

async function main() {
  const wa = await WebAssembly.instantiate(bytes, imports);
  const magic_sum = wa.instance.exports._sum;
  return x.map((val) => {
    return magic_sum(val, val);
  });
}

return main();
''';

SELECT magic_function(GENERATE_ARRAY(1,100))

```


[running async JS functions on BigQuery with #standardSQL](https://stackoverflow.com/questions/57897905/running-async-js-functions-on-bigquery-with-standardsql/57897906#57897906)なら、web assembly を BigQuery で動かせます。テーブル参照ではないので、普通に SQL 関数を大量に呼ぶのと一緒ではありますが、BigQuery が苦手な再帰関数も JavaScript なら呼べます。web assembly なら、BigQuery の計算時間の範囲内で割と自由に呼びまわせます。
データ参照の方法ではないので、他の手法と組み合わせましょう。


# Lv100. ZERO BYTE STRUCT でテーブルを作る

## 定義

この記事で使う用語として ZERO BYTE STRUCT を定義します。これは NULL や STRUCT に NULL を入れたデータ、ARRAY に STRUCT(NULL) を入れた状態で、参照コストが 0 であるデータと定義します。後述しますが、BigQuery では NULL の参照コストがかかりません。しかし、NULL と STRUCT(NULL) は明確に区別されます。この仕様により、参照コスト 0 にもかかわらず、1 bit の情報量を持つことができます。

2019/12/18 現在、データ容量は以下のようになっています。
データサイズな説明は [公式ページ: Pricing Data size calculation](https://cloud.google.com/bigquery/pricing#data) をご覧ください。

データの種類|サイズ
|---|---|
INT64/INTEGER|8 バイト
FLOAT64/FLOAT|8 バイト
NUMERIC|16 バイト
BOOL/BOOLEAN|1 バイト
STRING|2 バイト + UTF-8 エンコードされた文字列のサイズ
BYTES|2 バイト + 値のバイト数
DATE|8 バイト
DATETIME|8 バイト
TIME|8 バイト
TIMESTAMP|8 バイト
STRUCT/RECORD|0 バイト + 含まれているフィールドのサイズ
GEOGRAPHY|16 バイト + 24 バイト × GEOGRAPHY 型の頂点の数

**どのデータ型でも、null 値は 0 バイトとして計算されます。**

## 例
もしお暇な方がいれば以下のクエリを実行し、テーブルに保存し、容量を確認してみてください。

```sql
CREATE TEMP FUNCTION
  CONVERT_BOOL_TO_ZERO_BYTE_STRUCT(b BOOL)AS(
  IF
    (b,
      STRUCT(NULL),
      STRUCT(STRUCT(NULL))));
CREATE TEMP FUNCTION
  CONVERT_INT64_TO_ZERO_BYTE_STRUCT(i INT64)AS(ARRAY(
    SELECT
      CONVERT_BOOL_TO_ZERO_BYTE_STRUCT(i&1<<u=0)
    FROM
      UNNEST(GENERATE_ARRAY(0, 63))u
    ORDER BY
      u));
SELECT
  CONVERT_INT64_TO_ZERO_BYTE_STRUCT(i)
FROM
  UNNEST(GENERATE_ARRAY(1,1000000))i
```
表のサイズが 0 B になっていることを確認できましたか。それでは戻しましょう。

```sql
CREATE TEMP FUNCTION
  CONVERT_BOOL_TO_ZERO_BYTE_STRUCT(b BOOL)AS(
  IF
    (b,
      STRUCT(NULL),
      STRUCT(STRUCT(NULL))));
CREATE TEMP FUNCTION
  CONVERT_ZERO_BYTE_STRUCT_TO_BOOL(s STRUCT<_ STRUCT<INT64>>)AS(s._ IS NULL);
CREATE TEMP FUNCTION
  CONVERT_INT64_TO_ZERO_BYTE_STRUCT(i INT64)AS(ARRAY(
    SELECT
      CONVERT_BOOL_TO_ZERO_BYTE_STRUCT(i&1<<u=0)
    FROM
      UNNEST(GENERATE_ARRAY(0, 63))u
    ORDER BY
      u));
CREATE TEMP FUNCTION
  CONVERT_ZERO_BYTE_STRUCT_TO_INT64(a ARRAY<STRUCT<_ STRUCT<INT64>>>)AS((
    SELECT
      SUM(
      IF
        (CONVERT_ZERO_BYTE_STRUCT_TO_BOOL(a[
          OFFSET
            (u)]),
          0,
          1<<u))
    FROM
      UNNEST(GENERATE_ARRAY(0,ARRAY_LENGTH(a)-1))u));
SELECT
  CONVERT_ZERO_BYTE_STRUCT_TO_INT64(CONVERT_INT64_TO_ZERO_BYTE_STRUCT(i))
FROM
  UNNEST(GENERATE_ARRAY(1,1000000))i
  -- 先ほどのテーブルを参照する
```

元に戻っていること、課金されるバイト数が 0 B であること確認できたでしょうか。
このように情報を埋め込むことができ、全ての列をこの形に変形すれば、テラバイト情報量を持った 0 バイトテーブルを作成できます。
もちろん ZERO BYTE STRUCT 相互変換に計算時間はかかりますが、これが許容できるのであれば、参照コストなしで無限のデータを扱うことができます。

## ZERO BYTE STRUCT FUNCTIONS
ここで自作公開した関数群があるので紹介します。
ZERO BYTE STRUCT 変換関数 `bqfunc.zerobyte.(ARRAY_)?{type}_TO_ZEROBYTE` です。
この関数は、STRUCT を除く任意の型を ZERO BYTE STRUCT に変換します（{type}が、STRUCT 以外の任意の型に対応します）。
また、逆関数 `bqfunc:zerobyte.ZEROBYTE_TO_(ARRAY_)?{type}` も用意しました。
STRUCT は個別に関数を組み合わせて作るか、TO_JSON_STRING で詰め込むと良いです。

```sql
SELECT
  bqfunc.zerobyte.BOOL_TO_ZEROBYTE(TRUE)
```

# 終わりに
ZERO BYTE STRUCT は、BigQuery の課金の抜け穴のようなものですので、実用は避けるべきでしょう。
みんな BigQuery 使おう。

# （追記） 
## BigQuery は黒魔術か

<blockquote class="twitter-tweet">
<a href="https://twitter.com/algas/status/1202779751280082944"></a>
</blockquote>

黒魔術を使わずとも、他の SQL を触ったことがある方なら、BigQuery は安心してお使いいただけます（言語は PostgreSQL が最も近いかも）。ただ、使い方が違います。従来の SQL はデータを取得するだけのものでしたが、BigQuery は多段のデータ変換まで担わせることでコストパフォーマンスを高めることができます。

BigQuery 黒魔術の先駆に [BigqueryStandardSQLの黒魔術ってなに！？記してみました！](https://medium.com/eureka-engineering/bigquery-standard-sql-f13b04c0b6c4) がいらっしゃいます。ぜひこちらもご覧ください。


## 0 円クエリの賛否

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">BigQuery で 1 円も溶かさない人の顔 (ZERO BYTE STRUCT を考案した) <a href="https://t.co/N23rpUKS32">https://t.co/N23rpUKS32</a> SELECT ERRORで例外キャッチして中身を抜くとかSTRUCT(NULL)をarrayに突っ込んでテーブルサイズの見かけをゼロにするとか…．うーん…</p>&mdash; Yuta Kashino (@yutakashino) <a href="https://twitter.com/yutakashino/status/1202877337844568065?ref_src=twsrc%5Etfw">December 6, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

利用者への課金が 0 円でも、BigQuery は計算コストを払っていることでしょう。一部分が 0 円で提供されているのは、それでもサービスが全体として成り立つからでしょう。容量用法を守ってお使いください。WHERE 句で IF を使えば条件によって N％ ERROR を返すクエリになりますが、それらが悪かなどの議論は避けます。可能なら、BigQuery としての立場を確認したいところです。(ZERO BYTE STRUCT については、記事の投稿前に GCP へフィードバック送信済みです。)
