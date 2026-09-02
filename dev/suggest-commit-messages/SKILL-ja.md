---
name: suggest-commit-messages
description: 現在の Git 差分から、簡潔な英語の Conventional Commit メッセージ候補を提案する。ステージング済みの変更を優先し、なければ未ステージングの変更 (未追跡ファイルを含む) を対象にする。コミットメッセージの候補を求められたときに使う。
---

# コミットメッセージ候補の提案

## 概要

リポジトリの変更から、簡潔な英語のコミットメッセージ候補を作成する。以前の文脈に関係なく、実行時の Git の状態を確認する。

## ワークフロー

1. `git status --short` でリポジトリの状態を確認する。
2. `git diff --cached --stat` と `git diff --cached` で、まずステージング済み差分を確認する。
3. ステージング済み差分がなければ、`git diff --stat` と `git diff` で未ステージングの追跡済み差分を確認する。
4. 未追跡ファイルも確認し、関連するテキストファイルは意図を理解できる範囲で読む。
5. 変更がなければ、その旨を伝えてメッセージを生成しない。
6. 変更の主な意図と Conventional Commit の type (`feat`、`fix`、`refactor`、`style`、`chore`、`docs`、`test`、`build` など) を判断する。
7. 複数の独立した意味単位があれば論理的なコミット単位に分け、各単位について候補と推薦を提示する。分割が明確な場合は、その旨を明示する。
8. 各コミットについて、簡潔な英語の候補を 3-6 個挙げ、最も適切なものを 1 つ推薦する。
9. ユーザーが求めない限り 1 行で書き、subject は簡潔で行動を表す表現にする。末尾にピリオドは付けない。

## スタイル

- `feat`、`fix`、`refactor`、`style`、`chore`、`docs`、`test`、`build`、`ci` など、小文字の Conventional Commit type を使う。
- `type:` の後に続く subject の最初の単語は大文字で始める。
- 明確さのために必要な場合を除き、scope は付与しない。
- type は、ユーザーから見た主な意図で選ぶ。ドキュメントのみの変更は `docs`、挙動の修正は `fix`、新規の機能実装は `feat`、挙動を変えない内部整理は `refactor`、フォーマットのみの変更は `style`、テストは `test` とする。ビルドや CI 基盤は `build` または `ci`、依存関係、ツール、保守作業で他に当てはまらないものは `chore` とする。
- 推薦メッセージを選ぶときは、選択した変更を最も直接的に表し、英語話者のメンテナーにとって自然に聞こえる候補を優先する。
- 簡潔さを優先する。例:
  - `feat: Simplify eza abbreviations`
  - `feat: Limit mise lockfiles to supported platforms`
  - `refactor: Move CLI tools from Homebrew to mise`
- 差分の説明は最小限にし、候補を先に出す。

## 最終回答

回答本文はユーザーの言語に合わせ、コミットメッセージは英語で書く。候補を先に、簡潔な箇条書きで示す。

```text
ステージング済み差分を確認しました。コミットメッセージの候補です。

- feat: Simplify eza abbreviations
- feat: Limit mise lockfiles to supported platforms
- refactor: Move CLI tools from Homebrew to mise

もっとも自然なものは次のとおりです。

- feat: Limit mise lockfiles to supported platforms
```

ステージング済み差分がなければ、未ステージングの変更と未追跡ファイルを確認したことを明示する。
