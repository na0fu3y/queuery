---
id: bigquery-ml-tensorflow
title: "BigQuery ML で使える TensorFlow モデルを作る"
author: Naofumi Yamada
author_title: Data Engineer
author_url: https://github.com/na0fu3y
author_image_url: https://avatars0.githubusercontent.com/u/17900178?s=400&v=4
tags: [bigquery, tensorflow]
---

# はじめに
BigQuery ML は [インポートした TensorFlow モデルでの予測](https://cloud.google.com/bigquery-ml/docs/making-predictions-with-imported-tensorflow-models) ができます。
BigQuery ML で使える TensorFlow モデルを作るために色々なドキュメントを往復したので、まとめておきます。
BigQuery ML を使って TensorFlow モデルを管理できれば、データソースとの転送を省略したり、
モデルや実行環境の管理を BigQuery と Cloud Storage に任せたりできます。

また SavedModel 形式は、予測に限らず数式を入れたりできるので、brainfuck が実装できるか遊んでみました（敗北）。

<!--truncate-->

# モデルの作り方
[TensorFlow モデルをインポートする CREATE MODEL ステートメント](https://cloud.google.com/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-create-tensorflow) にあるように、BigQuery ML で使える TensorFlow モデルは SavedModel として保存されている必要があります。
SavedModel を実際に作っていきましょう。

## SavedModel を作る

### シンプルな SavedModel を作る
[tf.saved_model.save](https://www.tensorflow.org/api_docs/python/tf/saved_model/save) の例から始めましょう。
例では tf.TensorSpec は `shape=None` と定義されていますが、BigQuery ML から使う場合は必須のようですので、
`shape=1` とします。

```python
import tensorflow as tf


class Adder(tf.Module):

  @tf.function(input_signature=[tf.TensorSpec(shape=1, dtype=tf.float32)])
  def add(self, x):
    return x + x + 1.

to_export = Adder()
tf.saved_model.save(to_export, '/tmp/adder')
# 認証しておけば Google Storage に直接転送できる
# tf.saved_model.save(to_export, 'gs://tmp/adder')
```

### 作った SavedModel を BigQuery にインポートする
[TensorFlow モデルのインポート](https://cloud.google.com/bigquery-ml/docs/making-predictions-with-imported-tensorflow-models#importing_models) を参考にモデルをインポートします。
Cloud Storage にある SavedModel を参照できるので、予め転送しておきましょう。
クエリ 1 つでインポートできるのでとてもお手軽です。

```sql
CREATE OR REPLACE MODEL
  example_dataset.imported_tf_model OPTIONS (MODEL_TYPE='TENSORFLOW',
    MODEL_PATH='gs://tmp/adder/*')
```

### インポートしたモデルを使う
[インポートした TensorFlow モデルでの予測](https://cloud.google.com/bigquery-ml/docs/making-predictions-with-imported-tensorflow-models#making_predictions_with_imported_models) を参考にモデルで予測します。
```sql
SELECT
  *
FROM
  ML.PREDICT(MODEL example_dataset.imported_tf_model,
    (
    SELECT
      *
    FROM
      UNNEST(GENERATE_ARRAY(1,10))x
```

実行結果。

|行 | output_0 | x |
| --- | --- | --- |
| 0 | 3.0 | 1 |
| 1 | 5.0 | 2 |
| 2 | 7.0 | 3 |
| 3 | 9.0 | 4 |
| 4 | 11.0 | 5 |
| 5 | 13.0 | 6 |
| 6 | 15.0 | 7 |
| 7 | 17.0 | 8 |
| 8 | 19.0 | 9 |
| 9 | 21.0 | 10 |


無事に実行できました。

## サポートされている型
[サポートされている入力](https://cloud.google.com/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-create-tensorflow#inputs) にありますが、再掲します。

|TensorFlow 型 | BigQuery ML type |
| --- | --- |
| tf.int8, tf.int16, tf.int32, tf.int64, tf.uint8, tf.uint16, tf.uint32, tf.uint64 | INT64 |
| tf.float16, tf.float32, tf.float64, tf.bfloat16 | FLOAT64 |
| tf.bool | BOOL |
| tf.string | STRING |

2020 年 2 月 12 日現在、対応している入出力型は限定的なため、BigQuery のデータ型とモデル作成時の型の自由度の差異に注意しましょう。

## tf.estimator を使った SavedModel の作り方
[予測に使用する SavedModel のエクスポート](https://cloud.google.com/ml-engine/docs/tensorflow/exporting-for-prediction) を参考に、情報を補足します。

### tf.estimator.BoostedTreesClassifier の SavedModel を作る
[Boosted trees using Estimators](https://www.tensorflow.org/tutorials/estimator/boosted_trees) を参考に作ります。

#### データのロード
```python
import numpy as np
import pandas as pd
import tensorflow as tf


dftrain = pd.read_csv('https://storage.googleapis.com/tf-datasets/titanic/train.csv')
dfeval = pd.read_csv('https://storage.googleapis.com/tf-datasets/titanic/eval.csv')
y_train = dftrain.pop('survived')
y_eval = dfeval.pop('survived')
```

#### 入力値の作成
```python
NUMERIC_COLUMNS = ['age', 'fare']

feature_columns = []

for feature_name in NUMERIC_COLUMNS:
  feature_columns.append(tf.feature_column.numeric_column(feature_name,
                                           dtype=tf.float32))
```

```python
NUM_EXAMPLES = len(y_train)

def make_input_fn(X, y, n_epochs=None, shuffle=True):
  def input_fn():
    dataset = tf.data.Dataset.from_tensor_slices((dict(X), y))
    if shuffle:
      dataset = dataset.shuffle(NUM_EXAMPLES)
    # For training, cycle thru dataset as many times as need (n_epochs=None).
    dataset = dataset.repeat(n_epochs)
    # In memory training doesn't use batching.
    dataset = dataset.batch(NUM_EXAMPLES)
    return dataset
  return input_fn

# Training and evaluation input functions.
train_input_fn = make_input_fn(dftrain, y_train)
eval_input_fn = make_input_fn(dfeval, y_eval, shuffle=False, n_epochs=1)
```

### tf.estimator の作成
```python
est = tf.estimator.BoostedTreesClassifier(feature_columns,
                                          n_batches_per_layer=1)

est.train(train_input_fn)

# Eval.
# result = est.evaluate(eval_input_fn)
# print(pd.Series(result))
```

### SavedModel の作成
[トレーニング中にサービスグラフを作成する](https://cloud.google.com/ml-engine/docs/tensorflow/exporting-for-prediction#create_serving_graph_during_training) にある json_serving_input_fn を使って、export すると BigQuery ML から理想的な形で呼び出すことができます。

```python
def json_serving_input_fn():
    """Build the serving inputs."""
    inputs = {}
    for feat in feature_columns:
        inputs[feat.name] = tf.placeholder(shape=[None], dtype=feat.dtype)

    return tf.estimator.export.ServingInputReceiver(inputs, inputs)

path = est.export_saved_model('gs://tmp/btc',
                      json_serving_input_fn)
```

#### ここが厄介
TensorFlow 1.x は tf.placeholder が使えるので上のコードが動作します。
TensorFlow 2.x は tf.placeholder が使えないため、以下の serving_input_fn で Proto Buffers を経由して頑張る必要がありそうです。予め Proto Buffers に変換したテーブルを用意するのが解になってしまいます。他には [tensorflow/tensorflow/core/example](https://github.com/tensorflow/tensorflow/tree/master/tensorflow/core/example) の .proto を JavaScript にコンパイルして UDF を作成すると回避できる可能性があります。

```python
serving_input_fn = tf.estimator.export.build_parsing_serving_input_receiver_fn(
  tf.feature_column.make_parse_example_spec(feature_columns)
)
```

### 作った SavedModel を BigQuery にインポートする
```sql
CREATE OR REPLACE MODEL
  example_dataset.imported_tf_model OPTIONS (MODEL_TYPE='TENSORFLOW',
    MODEL_PATH='gs://tmp/btc/1581656284/*')
```

### インポートしたモデルを使う
```sql
SELECT
  *
FROM
  ML.PREDICT(MODEL bigqueryml.gbdt,
    (
    SELECT
      *
    FROM
      UNNEST([STRUCT(10 AS age,
          0 AS fare), (80,
          30)])))
```

実行結果。

|行 | all_class_ids | all_classes | class_ids | classes | logistic | logits | probabilities | age | fare |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 0 | 0 | 0 | 0 | 0.001847356558 | -6.292150497 | 0.9981526732   | 10 | 0  |
|   | 1 | 1 |   |   |                |              | 0.001847356558 |    |    |
| 2 | 0 | 0 | 1 | 1 | 0.9975745082   | 6.019282341  | 0.00242551649  | 80 | 30 |
|   | 1 | 1 |   |   |                |              | 0.9975745082   |    |    |

動いてそうです。



## Brainfuck を実装する

### UnliftableError に敗北
実装してみたのですが、循環参照が計算グラフに変換できなさそうなエラーと遭遇して断念しました。

```

---------------------------------------------------------------------------
UnliftableError                           Traceback (most recent call last)
<ipython-input-14-2aa1513a2c78> in <module>()
      1 to_export = Brainfuck()
----> 2 op = to_export.brainfuck(tf.constant('++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++.', shape=(1,)))
      3 
      4 with tf.Session() as sess:
      5     print(sess.run(op))

52 frames
/usr/local/lib/python3.6/dist-packages/tensorflow_core/python/ops/op_selector.py in map_subgraph(init_tensor, sources, disallowed_placeholders, visited_ops, op_outputs, add_sources)
    411           "Unable to lift tensor %s because it depends transitively on "
    412           "placeholder %s via at least one path, e.g.: %s"
--> 413           % (repr(init_tensor), repr(op), _path_from(op, init_tensor, sources)))
    414     for inp in graph_inputs(op):
    415       op_outputs[inp].add(op)

UnliftableError: Unable to lift tensor <tf.Tensor 'Variable/Initializer/ReadVariableOp:0' shape=(64,) dtype=int64> because it depends transitively on placeholder <tf.Operation 'add/cond/Identity_1' type=Placeholder> via at least one path, e.g.: Variable/Initializer/ReadVariableOp (ReadVariableOp) <- strided_slice/_assign (ResourceStridedSliceAssign) <- add_2 (AddV2) <- strided_slice_1 (StridedSlice) <- strided_slice_1/stack_1 (Pack) <- add_1 (AddV2) <- add/cond/Identity_1 (Placeholder)
```

### 先行研究
[EsotericTensorFlow](https://github.com/akimach/EsotericTensorFlow) で、Brainfuck の実装が行われています。
しかし、Brainfuck のソースコードを渡して計算モデルを作成するもので、計算モデルにソースコードを渡して実行するインタプリタではなさそうです。
そのため、私は TensorFlow の計算モデルのチューリング完全性を証明することはできませんでした。


# おわりに
BigQuery ML で使える TensorFlow の SavedModel を作って動作確認しました。
チューリング完全性の証明には至りませんでしたが、BigQuery ML でテンソルグラフ計算や、
BigQuery ML 未リリースの BoostedTreesClassifier を実現できました。
BigQuery ML を使えれば、データとモデルが近い位置におけるメリットと、クエリ拡張性が出るため活用できると良いですね。
