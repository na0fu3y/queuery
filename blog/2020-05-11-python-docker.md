---
id: python-docker
title: "Python 開発環境の Docker 化"
author: Naofumi Yamada
author_title: Data Engineer
author_url: https://github.com/na0fu3y
author_image_url: https://avatars0.githubusercontent.com/u/17900178?s=400&v=4
tags: [python, docker]
---

# Python の環境 / パッケージ管理色々ありすぎ問題
Python の仮想環境やパッケージ管理周りのツールは種類が多くてどれ使ったら良いか分からないですね。
古参の Pip 派もいれば、安定の Pipenv、toml カッコ良いから Poetry、Pyflow など。

<!--truncate-->

- Pip
- conda
- Pipenv
- Poetry
- Pyflow

ここは悩まずに Docker にしてしまいましょう。
これで、開発マシンへの依存を Docker のみにすることができます。

# Dockerfile
開発が進んだ際に debug と production でステージを分けやすいよう pipenv か poetry を使います。ここでは pipenv を使ってみましょう。

```dockerfile
FROM python:3.8

RUN mkdir -p /usr/src/app && pip install pipenv
WORKDIR /usr/src/app

ONBUILD COPY Pipfile /usr/src/app/
ONBUILD RUN pipenv install -d

ONBUILD COPY . /usr/src/app
```

# Makefile
Dockerfile だけでなく、Makefile でラップコマンドを用意しておくと、開発環境からよく使う作業を `make xxx` で実行できます。
ここでは、vet で型検査、fmt でコードフォーマット、doc でドキュメントビルド、test でテストをするように設定します。必要なライブラリは、Pipfile に書いておきましょう。

```
NAME=docker_example
LINT_IMAGE=transform_lint

build:
	docker build -t ${NAME} .

vet: build
	docker run -it --rm ${NAME} pipenv run mypy --ignore-missing-imports /src

fmt: build
	docker run -it --rm -v $$(pwd):/src ${NAME} pipenv run autoflake -ri /src
	docker run -it --rm -v $$(pwd):/src ${NAME} pipenv run isort -rc /src
	docker run -it --rm -v $$(pwd):/src ${NAME} pipenv run black /src

doc: build
	docker run -it --rm -v $$(pwd):/src ${NAME} pipenv run mkdocs build /src

test: build
	docker run -it --rm ${NAME} pipenv run pytest /src

```

# おしまい
Dockerfile と Makefile を作って、ライブラリを包んでやることでローカルマシンに依存しない環境ができました。Pipenv でもできますが、Makefile でコマンドもつけておくと、Linux 環境では `make xxx` で処理をラップできて捗ります。