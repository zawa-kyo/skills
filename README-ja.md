# 📚 skills

zawa-kyo が管理する [apm](https://github.com/microsoft/apm) で配布する再利用可能なエージェントスキル集です。

`dev/` または `writing/` 配下の各ディレクトリは、それぞれ独立したスキルパッケージです。

## 🚀 インストール

個別のスキルをグローバルにインストールする場合:

```sh
apm install -g zawa-kyo/skills/dev/review-essential-code
apm install -g zawa-kyo/skills/dev/suggest-commit-messages
apm install -g zawa-kyo/skills/dev/bootstrap-repo-docs
apm install -g zawa-kyo/skills/writing/revise-japanese-writing
apm install -g zawa-kyo/skills/writing/revise-english-writing
apm install -g zawa-kyo/skills/writing/edit-existing-document
apm install -g zawa-kyo/skills/writing/summarize-discussion-coherently
```

または `apm.yml` に追加します。

```yaml
dependencies:
  apm:
    - zawa-kyo/skills/dev/review-essential-code
    - zawa-kyo/skills/dev/suggest-commit-messages
    - zawa-kyo/skills/dev/bootstrap-repo-docs
    - zawa-kyo/skills/writing/revise-japanese-writing
    - zawa-kyo/skills/writing/revise-english-writing
    - zawa-kyo/skills/writing/edit-existing-document
    - zawa-kyo/skills/writing/summarize-discussion-coherently
```

## 🎒 スキルの詳細

## 👨‍💻 `dev`

| Skill                     | Description                                                                                        |
| ------------------------- | -------------------------------------------------------------------------------------------------- |
| `bootstrap-repo-docs`     | 作成直後か、まだ最小構成のままのリポジトリに対して、README と AGENTS の日英対応文書を整備する。     |
| `review-essential-code`   | バグ、リグレッション、テスト不足に加えて、本質的な保守しやすさの観点からコード変更をレビューする。 |
| `suggest-commit-messages` | staged または unstaged の Git diff から、簡潔な英語の Conventional Commit メッセージを提案する。   |

## ✏️ `writing`

| Skill                             | Description                                                                                    |
| --------------------------------- | ---------------------------------------------------------------------------------------------- |
| `edit-existing-document`          | 既存文書の構成に合う形で編集し、重複や矛盾する説明を増やさないようにする。                     |
| `revise-english-writing`          | コマンド、パス、識別子を保ったまま、英語の技術文書を直接的で AI っぽさの少ない文章に整える。   |
| `revise-japanese-writing`         | コマンド、パス、識別子を保ったまま、日本語の技術文書を確認し、自然で読みやすい日本語に整える。 |
| `summarize-discussion-coherently` | 個人の対話ログを、整理フレームを選びつつ、未整理点も残した一貫した構造的な要約にまとめる。       |
