---
id: automl-tables-dataset-cleaner
title: "AutoML Tables 推論結果データセットの大掃除"
author: Naofumi Yamada
author_title: Data Engineer
author_url: https://github.com/na0fu3y
author_image_url: https://avatars0.githubusercontent.com/u/17900178?s=400&v=4
tags: [bigquery]
---

# やること
BigQuery にたまった AutoML の推論結果を全部削除する。
BigQuery は、1000 より多くのデータセットがあると、作成が古い順に Web UI から見れなくなる。AutoML の推論結果はデータセットを増やしやすいので、たまにお掃除する。

<!--truncate-->

# Python
とても危険なので、dry_run で結果を必ず確認して実行すること。

```python
import re
from google.cloud import bigquery

dry_run = True
project_id = 'your-project'

client = bigquery.Client(project_id)
pattern = re.compile(r'prediction_[a-zA-Z0-9_]+_20\d\d_\d\d_\d\dT\d\d_\d\d_\d\d_\d\d\dZ')

# list() しないと list_datasets の paging に対してうまく動作しない
datasets = (dataset for dataset in list(client.list_datasets()) if pattern.match(dataset.dataset_id))

for dataset in datasets:
    print("{}".format(dataset.dataset_id))
    if not dry_run:
        client.delete_dataset(dataset.reference, delete_contents=True)
```

# 結果
大掃除できる。正規表現でマッチして削除はお手軽だけど、確認しながらやらないと使ってる物も消すので注意しよう。
