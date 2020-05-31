(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{136:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return d}));var n=a(2),r=a(9),l=(a(0),a(201)),b={id:"bigquery-ml-tensorflow",title:"BigQuery ML \u3067\u4f7f\u3048\u308b TensorFlow \u30e2\u30c7\u30eb\u3092\u4f5c\u308b",author:"Naofumi Yamada",author_title:"Data Engineer",author_url:"https://github.com/na0fu3y",author_image_url:"https://avatars0.githubusercontent.com/u/17900178?s=400&v=4",tags:["bigquery","tensorflow"]},c={permalink:"/queuery/blog/bigquery-ml-tensorflow",source:"@site/blog/2020-02-16-bigquery-ml-tensorflow.md",description:"\u306f\u3058\u3081\u306b",date:"2020-02-16T00:00:00.000Z",tags:[{label:"bigquery",permalink:"/queuery/blog/tags/bigquery"},{label:"tensorflow",permalink:"/queuery/blog/tags/tensorflow"}],title:"BigQuery ML \u3067\u4f7f\u3048\u308b TensorFlow \u30e2\u30c7\u30eb\u3092\u4f5c\u308b",readingTime:4.035,truncated:!0,prevItem:{title:"BigQuery ML \u3067 Matrix Factorization",permalink:"/queuery/blog/bigquery-ml-matrix-factorization"},nextItem:{title:"Google \u5171\u6709\u30c9\u30e9\u30a4\u30d6\u8a2d\u8a08\u8ad6",permalink:"/queuery/blog/google-drive-design"}},o=[{value:"SavedModel \u3092\u4f5c\u308b",id:"savedmodel-\u3092\u4f5c\u308b",children:[{value:"\u30b7\u30f3\u30d7\u30eb\u306a SavedModel \u3092\u4f5c\u308b",id:"\u30b7\u30f3\u30d7\u30eb\u306a-savedmodel-\u3092\u4f5c\u308b",children:[]},{value:"\u4f5c\u3063\u305f SavedModel \u3092 BigQuery \u306b\u30a4\u30f3\u30dd\u30fc\u30c8\u3059\u308b",id:"\u4f5c\u3063\u305f-savedmodel-\u3092-bigquery-\u306b\u30a4\u30f3\u30dd\u30fc\u30c8\u3059\u308b",children:[]},{value:"\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u305f\u30e2\u30c7\u30eb\u3092\u4f7f\u3046",id:"\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u305f\u30e2\u30c7\u30eb\u3092\u4f7f\u3046",children:[]}]},{value:"\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308b\u578b",id:"\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308b\u578b",children:[]},{value:"tf.estimator \u3092\u4f7f\u3063\u305f SavedModel \u306e\u4f5c\u308a\u65b9",id:"tfestimator-\u3092\u4f7f\u3063\u305f-savedmodel-\u306e\u4f5c\u308a\u65b9",children:[{value:"tf.estimator.BoostedTreesClassifier \u306e SavedModel \u3092\u4f5c\u308b",id:"tfestimatorboostedtreesclassifier-\u306e-savedmodel-\u3092\u4f5c\u308b",children:[]},{value:"tf.estimator \u306e\u4f5c\u6210",id:"tfestimator-\u306e\u4f5c\u6210",children:[]},{value:"SavedModel \u306e\u4f5c\u6210",id:"savedmodel-\u306e\u4f5c\u6210",children:[]},{value:"\u4f5c\u3063\u305f SavedModel \u3092 BigQuery \u306b\u30a4\u30f3\u30dd\u30fc\u30c8\u3059\u308b",id:"\u4f5c\u3063\u305f-savedmodel-\u3092-bigquery-\u306b\u30a4\u30f3\u30dd\u30fc\u30c8\u3059\u308b-1",children:[]},{value:"\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u305f\u30e2\u30c7\u30eb\u3092\u4f7f\u3046",id:"\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u305f\u30e2\u30c7\u30eb\u3092\u4f7f\u3046-1",children:[]}]},{value:"Brainfuck \u3092\u5b9f\u88c5\u3059\u308b",id:"brainfuck-\u3092\u5b9f\u88c5\u3059\u308b",children:[{value:"UnliftableError \u306b\u6557\u5317",id:"unliftableerror-\u306b\u6557\u5317",children:[]},{value:"\u5148\u884c\u7814\u7a76",id:"\u5148\u884c\u7814\u7a76",children:[]}]}],i={rightToc:o};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"\u306f\u3058\u3081\u306b"},"\u306f\u3058\u3081\u306b"),Object(l.b)("p",null,"BigQuery ML \u306f ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://cloud.google.com/bigquery-ml/docs/making-predictions-with-imported-tensorflow-models"}),"\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u305f TensorFlow \u30e2\u30c7\u30eb\u3067\u306e\u4e88\u6e2c")," \u304c\u3067\u304d\u307e\u3059\u3002\nBigQuery ML \u3067\u4f7f\u3048\u308b TensorFlow \u30e2\u30c7\u30eb\u3092\u4f5c\u308b\u305f\u3081\u306b\u8272\u3005\u306a\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u5f80\u5fa9\u3057\u305f\u306e\u3067\u3001\u307e\u3068\u3081\u3066\u304a\u304d\u307e\u3059\u3002\nBigQuery ML \u3092\u4f7f\u3063\u3066 TensorFlow \u30e2\u30c7\u30eb\u3092\u7ba1\u7406\u3067\u304d\u308c\u3070\u3001\u30c7\u30fc\u30bf\u30bd\u30fc\u30b9\u3068\u306e\u8ee2\u9001\u3092\u7701\u7565\u3057\u305f\u308a\u3001\n\u30e2\u30c7\u30eb\u3084\u5b9f\u884c\u74b0\u5883\u306e\u7ba1\u7406\u3092 BigQuery \u3068 Cloud Storage \u306b\u4efb\u305b\u305f\u308a\u3067\u304d\u307e\u3059\u3002"),Object(l.b)("p",null,"\u307e\u305f SavedModel \u5f62\u5f0f\u306f\u3001\u4e88\u6e2c\u306b\u9650\u3089\u305a\u6570\u5f0f\u3092\u5165\u308c\u305f\u308a\u3067\u304d\u308b\u306e\u3067\u3001brainfuck \u304c\u5b9f\u88c5\u3067\u304d\u308b\u304b\u904a\u3093\u3067\u307f\u307e\u3057\u305f\uff08\u6557\u5317\uff09\u3002"),Object(l.b)("h1",{id:"\u30e2\u30c7\u30eb\u306e\u4f5c\u308a\u65b9"},"\u30e2\u30c7\u30eb\u306e\u4f5c\u308a\u65b9"),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://cloud.google.com/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-create-tensorflow"}),"TensorFlow \u30e2\u30c7\u30eb\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3059\u308b CREATE MODEL \u30b9\u30c6\u30fc\u30c8\u30e1\u30f3\u30c8")," \u306b\u3042\u308b\u3088\u3046\u306b\u3001BigQuery ML \u3067\u4f7f\u3048\u308b TensorFlow \u30e2\u30c7\u30eb\u306f SavedModel \u3068\u3057\u3066\u4fdd\u5b58\u3055\u308c\u3066\u3044\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\nSavedModel \u3092\u5b9f\u969b\u306b\u4f5c\u3063\u3066\u3044\u304d\u307e\u3057\u3087\u3046\u3002"),Object(l.b)("h2",{id:"savedmodel-\u3092\u4f5c\u308b"},"SavedModel \u3092\u4f5c\u308b"),Object(l.b)("h3",{id:"\u30b7\u30f3\u30d7\u30eb\u306a-savedmodel-\u3092\u4f5c\u308b"},"\u30b7\u30f3\u30d7\u30eb\u306a SavedModel \u3092\u4f5c\u308b"),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.tensorflow.org/api_docs/python/tf/saved_model/save"}),"tf.saved_model.save")," \u306e\u4f8b\u304b\u3089\u59cb\u3081\u307e\u3057\u3087\u3046\u3002\n\u4f8b\u3067\u306f tf.TensorSpec \u306f ",Object(l.b)("inlineCode",{parentName:"p"},"shape=None")," \u3068\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u307e\u3059\u304c\u3001BigQuery ML \u304b\u3089\u4f7f\u3046\u5834\u5408\u306f\u5fc5\u9808\u306e\u3088\u3046\u3067\u3059\u306e\u3067\u3001\n",Object(l.b)("inlineCode",{parentName:"p"},"shape=1")," \u3068\u3057\u307e\u3059\u3002"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"import tensorflow as tf\n\n\nclass Adder(tf.Module):\n\n  @tf.function(input_signature=[tf.TensorSpec(shape=1, dtype=tf.float32)])\n  def add(self, x):\n    return x + x + 1.\n\nto_export = Adder()\ntf.saved_model.save(to_export, '/tmp/adder')\n# \u8a8d\u8a3c\u3057\u3066\u304a\u3051\u3070 Google Storage \u306b\u76f4\u63a5\u8ee2\u9001\u3067\u304d\u308b\n# tf.saved_model.save(to_export, 'gs://tmp/adder')\n")),Object(l.b)("h3",{id:"\u4f5c\u3063\u305f-savedmodel-\u3092-bigquery-\u306b\u30a4\u30f3\u30dd\u30fc\u30c8\u3059\u308b"},"\u4f5c\u3063\u305f SavedModel \u3092 BigQuery \u306b\u30a4\u30f3\u30dd\u30fc\u30c8\u3059\u308b"),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://cloud.google.com/bigquery-ml/docs/making-predictions-with-imported-tensorflow-models#importing_models"}),"TensorFlow \u30e2\u30c7\u30eb\u306e\u30a4\u30f3\u30dd\u30fc\u30c8")," \u3092\u53c2\u8003\u306b\u30e2\u30c7\u30eb\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u307e\u3059\u3002\nCloud Storage \u306b\u3042\u308b SavedModel \u3092\u53c2\u7167\u3067\u304d\u308b\u306e\u3067\u3001\u4e88\u3081\u8ee2\u9001\u3057\u3066\u304a\u304d\u307e\u3057\u3087\u3046\u3002\n\u30af\u30a8\u30ea 1 \u3064\u3067\u30a4\u30f3\u30dd\u30fc\u30c8\u3067\u304d\u308b\u306e\u3067\u3068\u3066\u3082\u304a\u624b\u8efd\u3067\u3059\u3002"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql"}),"CREATE OR REPLACE MODEL\n  example_dataset.imported_tf_model OPTIONS (MODEL_TYPE='TENSORFLOW',\n    MODEL_PATH='gs://tmp/adder/*')\n")),Object(l.b)("h3",{id:"\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u305f\u30e2\u30c7\u30eb\u3092\u4f7f\u3046"},"\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u305f\u30e2\u30c7\u30eb\u3092\u4f7f\u3046"),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://cloud.google.com/bigquery-ml/docs/making-predictions-with-imported-tensorflow-models#making_predictions_with_imported_models"}),"\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u305f TensorFlow \u30e2\u30c7\u30eb\u3067\u306e\u4e88\u6e2c")," \u3092\u53c2\u8003\u306b\u30e2\u30c7\u30eb\u3067\u4e88\u6e2c\u3057\u307e\u3059\u3002"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql"}),"SELECT\n  *\nFROM\n  ML.PREDICT(MODEL example_dataset.imported_tf_model,\n    (\n    SELECT\n      *\n    FROM\n      UNNEST(GENERATE_ARRAY(1,10))x\n")),Object(l.b)("p",null,"\u5b9f\u884c\u7d50\u679c\u3002"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u884c"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"output_0"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"x"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"3.0"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"5.0"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"7.0"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"3"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"9.0"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"4")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"4"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"11.0"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"5")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"5"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"13.0"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"6")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"6"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"15.0"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"7")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"7"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"17.0"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"8")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"8"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"19.0"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"9")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"9"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"21.0"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"10")))),Object(l.b)("p",null,"\u7121\u4e8b\u306b\u5b9f\u884c\u3067\u304d\u307e\u3057\u305f\u3002"),Object(l.b)("h2",{id:"\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308b\u578b"},"\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308b\u578b"),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://cloud.google.com/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-create-tensorflow#inputs"}),"\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308b\u5165\u529b")," \u306b\u3042\u308a\u307e\u3059\u304c\u3001\u518d\u63b2\u3057\u307e\u3059\u3002"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"TensorFlow \u578b"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"BigQuery ML type"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"tf.int8, tf.int16, tf.int32, tf.int64, tf.uint8, tf.uint16, tf.uint32, tf.uint64"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"INT64")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"tf.float16, tf.float32, tf.float64, tf.bfloat16"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"FLOAT64")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"tf.bool"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"BOOL")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"tf.string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"STRING")))),Object(l.b)("p",null,"2020 \u5e74 2 \u6708 12 \u65e5\u73fe\u5728\u3001\u5bfe\u5fdc\u3057\u3066\u3044\u308b\u5165\u51fa\u529b\u578b\u306f\u9650\u5b9a\u7684\u306a\u305f\u3081\u3001BigQuery \u306e\u30c7\u30fc\u30bf\u578b\u3068\u30e2\u30c7\u30eb\u4f5c\u6210\u6642\u306e\u578b\u306e\u81ea\u7531\u5ea6\u306e\u5dee\u7570\u306b\u6ce8\u610f\u3057\u307e\u3057\u3087\u3046\u3002"),Object(l.b)("h2",{id:"tfestimator-\u3092\u4f7f\u3063\u305f-savedmodel-\u306e\u4f5c\u308a\u65b9"},"tf.estimator \u3092\u4f7f\u3063\u305f SavedModel \u306e\u4f5c\u308a\u65b9"),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://cloud.google.com/ml-engine/docs/tensorflow/exporting-for-prediction"}),"\u4e88\u6e2c\u306b\u4f7f\u7528\u3059\u308b SavedModel \u306e\u30a8\u30af\u30b9\u30dd\u30fc\u30c8")," \u3092\u53c2\u8003\u306b\u3001\u60c5\u5831\u3092\u88dc\u8db3\u3057\u307e\u3059\u3002"),Object(l.b)("h3",{id:"tfestimatorboostedtreesclassifier-\u306e-savedmodel-\u3092\u4f5c\u308b"},"tf.estimator.BoostedTreesClassifier \u306e SavedModel \u3092\u4f5c\u308b"),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.tensorflow.org/tutorials/estimator/boosted_trees"}),"Boosted trees using Estimators")," \u3092\u53c2\u8003\u306b\u4f5c\u308a\u307e\u3059\u3002"),Object(l.b)("h4",{id:"\u30c7\u30fc\u30bf\u306e\u30ed\u30fc\u30c9"},"\u30c7\u30fc\u30bf\u306e\u30ed\u30fc\u30c9"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"import numpy as np\nimport pandas as pd\nimport tensorflow as tf\n\n\ndftrain = pd.read_csv('https://storage.googleapis.com/tf-datasets/titanic/train.csv')\ndfeval = pd.read_csv('https://storage.googleapis.com/tf-datasets/titanic/eval.csv')\ny_train = dftrain.pop('survived')\ny_eval = dfeval.pop('survived')\n")),Object(l.b)("h4",{id:"\u5165\u529b\u5024\u306e\u4f5c\u6210"},"\u5165\u529b\u5024\u306e\u4f5c\u6210"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"NUMERIC_COLUMNS = ['age', 'fare']\n\nfeature_columns = []\n\nfor feature_name in NUMERIC_COLUMNS:\n  feature_columns.append(tf.feature_column.numeric_column(feature_name,\n                                           dtype=tf.float32))\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"NUM_EXAMPLES = len(y_train)\n\ndef make_input_fn(X, y, n_epochs=None, shuffle=True):\n  def input_fn():\n    dataset = tf.data.Dataset.from_tensor_slices((dict(X), y))\n    if shuffle:\n      dataset = dataset.shuffle(NUM_EXAMPLES)\n    # For training, cycle thru dataset as many times as need (n_epochs=None).\n    dataset = dataset.repeat(n_epochs)\n    # In memory training doesn't use batching.\n    dataset = dataset.batch(NUM_EXAMPLES)\n    return dataset\n  return input_fn\n\n# Training and evaluation input functions.\ntrain_input_fn = make_input_fn(dftrain, y_train)\neval_input_fn = make_input_fn(dfeval, y_eval, shuffle=False, n_epochs=1)\n")),Object(l.b)("h3",{id:"tfestimator-\u306e\u4f5c\u6210"},"tf.estimator \u306e\u4f5c\u6210"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"est = tf.estimator.BoostedTreesClassifier(feature_columns,\n                                          n_batches_per_layer=1)\n\nest.train(train_input_fn)\n\n# Eval.\n# result = est.evaluate(eval_input_fn)\n# print(pd.Series(result))\n")),Object(l.b)("h3",{id:"savedmodel-\u306e\u4f5c\u6210"},"SavedModel \u306e\u4f5c\u6210"),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://cloud.google.com/ml-engine/docs/tensorflow/exporting-for-prediction#create_serving_graph_during_training"}),"\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0\u4e2d\u306b\u30b5\u30fc\u30d3\u30b9\u30b0\u30e9\u30d5\u3092\u4f5c\u6210\u3059\u308b")," \u306b\u3042\u308b json_serving_input_fn \u3092\u4f7f\u3063\u3066\u3001export \u3059\u308b\u3068 BigQuery ML \u304b\u3089\u7406\u60f3\u7684\u306a\u5f62\u3067\u547c\u3073\u51fa\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),'def json_serving_input_fn():\n    """Build the serving inputs."""\n    inputs = {}\n    for feat in feature_columns:\n        inputs[feat.name] = tf.placeholder(shape=[None], dtype=feat.dtype)\n\n    return tf.estimator.export.ServingInputReceiver(inputs, inputs)\n\npath = est.export_saved_model(\'gs://tmp/btc\',\n                      json_serving_input_fn)\n')),Object(l.b)("h4",{id:"\u3053\u3053\u304c\u5384\u4ecb"},"\u3053\u3053\u304c\u5384\u4ecb"),Object(l.b)("p",null,"TensorFlow 1.x \u306f tf.placeholder \u304c\u4f7f\u3048\u308b\u306e\u3067\u4e0a\u306e\u30b3\u30fc\u30c9\u304c\u52d5\u4f5c\u3057\u307e\u3059\u3002\nTensorFlow 2.x \u306f tf.placeholder \u304c\u4f7f\u3048\u306a\u3044\u305f\u3081\u3001\u4ee5\u4e0b\u306e serving_input_fn \u3067 Proto Buffers \u3092\u7d4c\u7531\u3057\u3066\u9811\u5f35\u308b\u5fc5\u8981\u304c\u3042\u308a\u305d\u3046\u3067\u3059\u3002\u4e88\u3081 Proto Buffers \u306b\u5909\u63db\u3057\u305f\u30c6\u30fc\u30d6\u30eb\u3092\u7528\u610f\u3059\u308b\u306e\u304c\u89e3\u306b\u306a\u3063\u3066\u3057\u307e\u3044\u307e\u3059\u3002\u4ed6\u306b\u306f ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/tensorflow/tensorflow/tree/master/tensorflow/core/example"}),"tensorflow/tensorflow/core/example")," \u306e .proto \u3092 JavaScript \u306b\u30b3\u30f3\u30d1\u30a4\u30eb\u3057\u3066 UDF \u3092\u4f5c\u6210\u3059\u308b\u3068\u56de\u907f\u3067\u304d\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"serving_input_fn = tf.estimator.export.build_parsing_serving_input_receiver_fn(\n  tf.feature_column.make_parse_example_spec(feature_columns)\n)\n")),Object(l.b)("h3",{id:"\u4f5c\u3063\u305f-savedmodel-\u3092-bigquery-\u306b\u30a4\u30f3\u30dd\u30fc\u30c8\u3059\u308b-1"},"\u4f5c\u3063\u305f SavedModel \u3092 BigQuery \u306b\u30a4\u30f3\u30dd\u30fc\u30c8\u3059\u308b"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql"}),"CREATE OR REPLACE MODEL\n  example_dataset.imported_tf_model OPTIONS (MODEL_TYPE='TENSORFLOW',\n    MODEL_PATH='gs://tmp/btc/1581656284/*')\n")),Object(l.b)("h3",{id:"\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u305f\u30e2\u30c7\u30eb\u3092\u4f7f\u3046-1"},"\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u305f\u30e2\u30c7\u30eb\u3092\u4f7f\u3046"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql"}),"SELECT\n  *\nFROM\n  ML.PREDICT(MODEL bigqueryml.gbdt,\n    (\n    SELECT\n      *\n    FROM\n      UNNEST([STRUCT(10 AS age,\n          0 AS fare), (80,\n          30)])))\n")),Object(l.b)("p",null,"\u5b9f\u884c\u7d50\u679c\u3002"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u884c"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"all_class_ids"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"all_classes"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"class_ids"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"classes"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"logistic"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"logits"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"probabilities"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"age"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"fare"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0.001847356558"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-6.292150497"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0.9981526732"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"10"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0.001847356558"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0.9975745082"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"6.019282341"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0.00242551649"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"80"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"30")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0.9975745082"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))))),Object(l.b)("p",null,"\u52d5\u3044\u3066\u305d\u3046\u3067\u3059\u3002"),Object(l.b)("h2",{id:"brainfuck-\u3092\u5b9f\u88c5\u3059\u308b"},"Brainfuck \u3092\u5b9f\u88c5\u3059\u308b"),Object(l.b)("h3",{id:"unliftableerror-\u306b\u6557\u5317"},"UnliftableError \u306b\u6557\u5317"),Object(l.b)("p",null,"\u5b9f\u88c5\u3057\u3066\u307f\u305f\u306e\u3067\u3059\u304c\u3001\u5faa\u74b0\u53c2\u7167\u304c\u8a08\u7b97\u30b0\u30e9\u30d5\u306b\u5909\u63db\u3067\u304d\u306a\u3055\u305d\u3046\u306a\u30a8\u30e9\u30fc\u3068\u906d\u9047\u3057\u3066\u65ad\u5ff5\u3057\u307e\u3057\u305f\u3002"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"\n---------------------------------------------------------------------------\nUnliftableError                           Traceback (most recent call last)\n<ipython-input-14-2aa1513a2c78> in <module>()\n      1 to_export = Brainfuck()\n----\x3e 2 op = to_export.brainfuck(tf.constant('++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++.', shape=(1,)))\n      3 \n      4 with tf.Session() as sess:\n      5     print(sess.run(op))\n\n52 frames\n/usr/local/lib/python3.6/dist-packages/tensorflow_core/python/ops/op_selector.py in map_subgraph(init_tensor, sources, disallowed_placeholders, visited_ops, op_outputs, add_sources)\n    411           \"Unable to lift tensor %s because it depends transitively on \"\n    412           \"placeholder %s via at least one path, e.g.: %s\"\n--\x3e 413           % (repr(init_tensor), repr(op), _path_from(op, init_tensor, sources)))\n    414     for inp in graph_inputs(op):\n    415       op_outputs[inp].add(op)\n\nUnliftableError: Unable to lift tensor <tf.Tensor 'Variable/Initializer/ReadVariableOp:0' shape=(64,) dtype=int64> because it depends transitively on placeholder <tf.Operation 'add/cond/Identity_1' type=Placeholder> via at least one path, e.g.: Variable/Initializer/ReadVariableOp (ReadVariableOp) <- strided_slice/_assign (ResourceStridedSliceAssign) <- add_2 (AddV2) <- strided_slice_1 (StridedSlice) <- strided_slice_1/stack_1 (Pack) <- add_1 (AddV2) <- add/cond/Identity_1 (Placeholder)\n")),Object(l.b)("h3",{id:"\u5148\u884c\u7814\u7a76"},"\u5148\u884c\u7814\u7a76"),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/akimach/EsotericTensorFlow"}),"EsotericTensorFlow")," \u3067\u3001Brainfuck \u306e\u5b9f\u88c5\u304c\u884c\u308f\u308c\u3066\u3044\u307e\u3059\u3002\n\u3057\u304b\u3057\u3001Brainfuck \u306e\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u3092\u6e21\u3057\u3066\u8a08\u7b97\u30e2\u30c7\u30eb\u3092\u4f5c\u6210\u3059\u308b\u3082\u306e\u3067\u3001\u8a08\u7b97\u30e2\u30c7\u30eb\u306b\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u3092\u6e21\u3057\u3066\u5b9f\u884c\u3059\u308b\u30a4\u30f3\u30bf\u30d7\u30ea\u30bf\u3067\u306f\u306a\u3055\u305d\u3046\u3067\u3059\u3002\n\u305d\u306e\u305f\u3081\u3001\u79c1\u306f TensorFlow \u306e\u8a08\u7b97\u30e2\u30c7\u30eb\u306e\u30c1\u30e5\u30fc\u30ea\u30f3\u30b0\u5b8c\u5168\u6027\u3092\u8a3c\u660e\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f\u3002"),Object(l.b)("h1",{id:"\u304a\u308f\u308a\u306b"},"\u304a\u308f\u308a\u306b"),Object(l.b)("p",null,"BigQuery ML \u3067\u4f7f\u3048\u308b TensorFlow \u306e SavedModel \u3092\u4f5c\u3063\u3066\u52d5\u4f5c\u78ba\u8a8d\u3057\u307e\u3057\u305f\u3002\n\u30c1\u30e5\u30fc\u30ea\u30f3\u30b0\u5b8c\u5168\u6027\u306e\u8a3c\u660e\u306b\u306f\u81f3\u308a\u307e\u305b\u3093\u3067\u3057\u305f\u304c\u3001BigQuery ML \u3067\u30c6\u30f3\u30bd\u30eb\u30b0\u30e9\u30d5\u8a08\u7b97\u3084\u3001\nBigQuery ML \u672a\u30ea\u30ea\u30fc\u30b9\u306e BoostedTreesClassifier \u3092\u5b9f\u73fe\u3067\u304d\u307e\u3057\u305f\u3002\nBigQuery ML \u3092\u4f7f\u3048\u308c\u3070\u3001\u30c7\u30fc\u30bf\u3068\u30e2\u30c7\u30eb\u304c\u8fd1\u3044\u4f4d\u7f6e\u306b\u304a\u3051\u308b\u30e1\u30ea\u30c3\u30c8\u3068\u3001\u30af\u30a8\u30ea\u62e1\u5f35\u6027\u304c\u51fa\u308b\u305f\u3081\u6d3b\u7528\u3067\u304d\u308b\u3068\u826f\u3044\u3067\u3059\u306d\u3002"))}d.isMDXComponent=!0},201:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),d=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=d(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,b=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),p=d(a),u=n,O=p["".concat(b,".").concat(u)]||p[u]||s[u]||l;return a?r.a.createElement(O,c(c({ref:t},i),{},{components:a})):r.a.createElement(O,c({ref:t},i))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,b=new Array(l);b[0]=u;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,b[1]=c;for(var i=2;i<l;i++)b[i]=a[i];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);