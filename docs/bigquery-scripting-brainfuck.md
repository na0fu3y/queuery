---
title: "Brainf*ck"
---

## 書いた動機
BigQuery 中心アーキテクチャでは、統計分析や機械学習のデータ準備を、Cloud Composer などから SQL を使ったデータ変換によって実現する。しかし、直列でデータ変換を行う場合には [標準 SQL のスクリプト](https://cloud.google.com/bigquery/docs/reference/standard-sql/scripting) で十分なケースもあり、開発をしてつらくないなら採用したい思いがあった。
先日のサイレントアップデートで、小さなクエリの高速化が行われたことから、十分な速度がでると予想した。
BigQuery で Brainf*ck を実現して、チューリング完全であることを確認したかった。欲を言えば SELECT 文だけで実現したいが、再帰 WITH 句が使えないことから自分には実現手段がわからなかった。スクリプトならできると思い、やってみた。


## 公開データセットに関数公開しました
```sql
CALL `bqfunc.brainfuck.brainfuck`(input, commands, output);
```

## BigQuery スクリプトとは
1 ジョブで複数のステートメントと制御構文を利用できる。
よく使うものだけ解説を入れる。

### DECLARE

```sql
DECLARE name type [ DEFAULT expression]
```
変数宣言。DEFAULT を指定しないと NULL で初期化される。

### SET

```sql
SET name = expression
```
変数代入。

### IF

```sql
IF condition THEN
  [if_statement_list]
[ELSE
  else_statement_list
]
END IF;
```
条件分岐。

### LOOP

```sql
LOOP
  sql_statement_list
END LOOP;
```
終了条件のない繰り返し。IF, BREAK と合わせて使う。

### WHILE

```sql
WHILE boolean_expression DO
  sql_statement_list
END WHILE;
```
終了条件のある繰り返し。

### BREAK

繰り返しから抜ける。

### CONTINUE

今のブロックをスキップして、繰り返しの先頭に戻る。


### RETURN
スクリプトを終了する。早期リターンで使う。

### CALL

```sql
CALL procedure_name
```

プロシージャを呼ぶ。構造化プログラミングに使う。

## 開発してみてつらかったこと
- BigQuery のジョブ実行時間 6 時間制約が、スクリプト 1 つでかかってくるため、多段に時間がかかるクエリの実行は難しい
- クエリ履歴が大量の `CREATE TEMP FUNCTION __type_coercion_internal__` で汚染され、複数同時実行するとウェブ UI では結果が追えなくなる
- ARRAY の 1 つの要素だけ書き換えるコストが高い
- スクリプトによるオーバヘッドがとても大きく感じる
- API から結果を回収できない

## 実行結果
|行|f0_|
|---|---|
|1|Hello World!|

```
経過時間 10 分 26 秒
処理されたステートメント 450
```

うまく動いていそう。

## ソースコード
### 再帰じゃない版

```sql
CREATE OR REPLACE PROCEDURE
  brainfuck.brainfuck(IN input ARRAY<INT64>,
    IN commands STRING,
    INOUT output ARRAY<INT64>)
BEGIN

    DECLARE command STRING;

    DECLARE buffer ARRAY<INT64> DEFAULT ARRAY(SELECT 0 FROM UNNEST(GENERATE_ARRAY(1, 64)));
    DECLARE buffer_offset INT64 DEFAULT 0;
    DECLARE input_offset INT64 DEFAULT 0;
    DECLARE depth INT64;

    DECLARE commands_position INT64 DEFAULT 0;

    LOOP
        SET commands_position = commands_position + 1;
        SET command = SUBSTR(commands, commands_position, 1);
        IF command = '' THEN
            RETURN;
        END IF;

        IF command = '>' THEN
            SET buffer_offset = buffer_offset + 1;
            CONTINUE;
        END IF;

        IF command = '<' THEN
            SET buffer_offset = buffer_offset - 1;
            CONTINUE;
        END IF;

        IF command = '+' THEN
            SET buffer = ARRAY(SELECT IF(offset = buffer_offset, b + 1, b) FROM UNNEST(buffer) b WITH OFFSET AS offset ORDER BY offset);
            CONTINUE;
        END IF;

        IF command = '-' THEN
            SET buffer = ARRAY(SELECT IF(offset = buffer_offset, b - 1, b) FROM UNNEST(buffer) b WITH OFFSET AS offset ORDER BY offset);
            CONTINUE;
        END IF;

        IF command = '.' THEN
            SET output = ARRAY_CONCAT(output, [buffer[OFFSET(buffer_offset)]]);
            CONTINUE;
        END IF;

        IF command = ',' THEN
            SET buffer = ARRAY(SELECT IF(offset = buffer_offset, input[OFFSET(input_offset)], b) FROM UNNEST(buffer) b WITH OFFSET AS offset ORDER BY offset);
            SET input_offset = input_offset + 1;
            CONTINUE;
        END IF;

        IF command = '[' AND buffer[OFFSET(buffer_offset)] = 0 THEN
            SET depth = 1;
            WHILE depth > 0 DO
                SET commands_position = commands_position + 1;
                SET command = SUBSTR(commands, commands_position, 1);
                IF command = '[' THEN
                    SET depth = depth + 1;
                    CONTINUE;
                END IF;
                IF command = ']' THEN
                    SET depth = depth - 1;
                    CONTINUE;
                END IF;
                IF command = '' THEN
                    SELECT ERROR('missing-bracket');
                END IF;
            END WHILE;
            CONTINUE;
        END IF;

        IF command = ']' AND buffer[OFFSET(buffer_offset)] <> 0 THEN
            SET depth = 1;
            WHILE depth > 0 DO
                SET commands_position = commands_position - 1;
                SET command = SUBSTR(commands, commands_position, 1);
                IF command = ']' THEN
                    SET depth = depth + 1;
                    CONTINUE;
                END IF;
                IF command = '[' THEN
                    SET depth = depth - 1;
                    CONTINUE;
                END IF;
                IF command = '' THEN
                    SELECT ERROR('missing-bracket');
                END IF;
            END WHILE;
            CONTINUE;
        END IF;
    END LOOP;
END;
```
```sql
DECLARE
  output ARRAY<INT64> DEFAULT [];
CALL
  bqfunc.brainfuck.brainfuck([],
    '++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++.',
    output);
SELECT
  CODE_POINTS_TO_STRING(output);
```

### 再帰 PROCEDURE 版
PROCEDURE で再帰を使ってきれいにかけると思ったのですが、エラーにより Hello World を動作させることはできませんでした。
`Out of stack space due to deeply-nested procedure call to a.brainfuck`とのエラーなため、ネストの小さい記述は動きます。

```sql
CREATE OR REPLACE PROCEDURE
  a.brainfuck(IN input ARRAY<INT64>,
    IN input_index INT64,
    IN commands ARRAY<STRING>,
    IN commands_index INT64,
    IN buffer ARRAY<INT64>,
    IN buffer_index INT64,
    INOUT output ARRAY<INT64>)
BEGIN
    DECLARE command STRING;
    DECLARE depth INT64;
    DECLARE counter INT64;
    SET command = commands[SAFE_OFFSET(commands_index)];
    IF command IS NULL THEN
        RETURN;
    END IF;
    IF command = '>' THEN
        CALL a.brainfuck(input, input_index, commands, commands_index + 1, buffer, buffer_index + 1, output);
        RETURN;
    END IF;
    IF command = '<' THEN
        CALL a.brainfuck(input, input_index, commands, commands_index + 1, buffer, buffer_index - 1, output);
        RETURN;
    END IF;
    IF command = '+' THEN
        CALL a.brainfuck(
            input,
            input_index,
            commands,
            commands_index + 1,
            ARRAY(SELECT IF(offset = buffer_index, b + 1, b)
                    FROM UNNEST(buffer) b
                    WITH OFFSET AS offset
                    ORDER BY offset),
            buffer_index,
            output);
        RETURN;
    END IF;
    IF command = '-' THEN
        CALL a.brainfuck(
            input,
            input_index,
            commands,
            commands_index + 1,
            ARRAY(SELECT IF(offset = buffer_index, b - 1, b)
                    FROM UNNEST(buffer) b
                    WITH OFFSET AS offset
                    ORDER BY offset),
            buffer_index,
            output);
        RETURN;
    END IF;
    IF command = '.' THEN
        SET output = ARRAY_CONCAT(output, [buffer[OFFSET(buffer_index)]]);
        CALL a.brainfuck(input, input_index, commands, commands_index + 1, buffer, buffer_index, output);
        RETURN;
    END IF;
    IF command = ',' THEN
        CALL a.brainfuck(
            input,
            input_index + 1,
            commands,
            commands_index + 1,
            ARRAY(SELECT IF(offset = buffer_index, input[OFFSET(input_index)], b)
                    FROM UNNEST(buffer) b
                    WITH OFFSET AS offset
                    ORDER BY offset),
            buffer_index,
            output);
        RETURN;
    END IF;
    IF command = '[' AND buffer[OFFSET(buffer_index)] = 0 THEN
        SET depth = 1;
        WHILE depth > 0 DO
            SET commands_index = commands_index + 1;
            SET command = commands[OFFSET(commands_index)];
            IF command = '[' THEN
                SET depth = depth + 1;
                CONTINUE;
            END IF;
            IF command = ']' THEN
                SET depth = depth - 1;
                CONTINUE;
            END IF;
        END WHILE;
        CALL a.brainfuck(
            input,
            input_index,
            commands,
            commands_index + 1,
            buffer,
            buffer_index,
            output);
        RETURN;
    END IF;
    IF command = ']' AND buffer[OFFSET(buffer_index)] <> 0 THEN
        SET depth = 1;
        WHILE depth > 0 DO
            SET commands_index = commands_index - 1;
            SET command = commands[OFFSET(commands_index)];
            IF command = ']' THEN
                SET depth = depth + 1;
                CONTINUE;
            END IF;
            IF command = '[' THEN
                SET depth = depth - 1;
                CONTINUE;
            END IF;
        END WHILE;
        CALL a.brainfuck(
            input,
            input_index,
            commands,
            commands_index + 1,
            buffer,
            buffer_index,
            output);
        RETURN;
    END IF;
    CALL a.brainfuck(input, input_index, commands, commands_index + 1, buffer, buffer_index, output);
END
```

```sql
DECLARE commands ARRAY<STRING> DEFAULT ['-','-','[','>','-','-','-','>','-','>','-','>','+','+','>','-','<','<','<','<','<','-','-','-','-','-','-','-',']','>','-','-','.','>','-','-','-','-','-','-','-','-','-','.','>','-','-','.','.','+','+','+','.','>','-','-','-','-','.','>','+','+','+','+','+','+','+','+','+','.','<','<','.','+','+','+','.','-','-','-','-','-','-','.','<','-','.','>','>','+','.'];
DECLARE output ARRAY<INT64> DEFAULT [];
DECLARE buffer ARRAY<INT64> DEFAULT ARRAY(SELECT 0 FROM UNNEST(GENERATE_ARRAY(1, 1024)));

CALL a.brainfuck([], 0, commands, 0, buffer, 0, output);

SELECT CODE_POINTS_TO_STRING(output);
```

## おわりに
BigQuery スクリプトで brainf*ck のインタプリタが実装できた。
再帰プロシージャの移植は不可能と結論づけました。再帰が可能なほど、スタックが詰めませんでした。再帰は 50 までの制約があります。
