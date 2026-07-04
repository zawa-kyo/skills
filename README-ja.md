# 📚 skills

zawa-kyo が管理し、[apm](https://github.com/microsoft/apm) 向けに公開している再利用可能なエージェントスキル集です。

`dev/`、`thinking/`、`writing/` 配下の各ディレクトリは、それぞれ独立したスキルパッケージです。

## インストール

個別のスキルをグローバルにインストールするには、次のように指定します。

```sh
apm install -g zawa-kyo/skills/dev/guide-unit-tests
apm install -g zawa-kyo/skills/thinking/refine-reasoning-logic
apm install -g zawa-kyo/skills/writing/revise-japanese-writing
```

または、必要なスキルを `apm.yml` に追加します。

```yaml
dependencies:
  apm:
    - zawa-kyo/skills/dev/guide-unit-tests
    - zawa-kyo/skills/thinking/refine-reasoning-logic
    - zawa-kyo/skills/writing/revise-japanese-writing
```

## スキルの詳細

## `dev`

| Skill                     | Description                                                                                        |
| ------------------------- | -------------------------------------------------------------------------------------------------- |
| `bootstrap-repo-docs`     | 作成直後か、まだ最小構成のままのリポジトリに対して、README と AGENTS の日英対応文書を整備する。    |
| `guide-unit-tests`        | 目的とプロジェクト文脈から、単体テストの戦略、実装、レビューまでを支援する。                       |
| `review-essential-code`   | バグ、リグレッション、テスト不足に加えて、本質的な保守しやすさの観点からコード変更をレビューする。 |
| `suggest-commit-messages` | staged または unstaged の Git diff から、簡潔な英語の Conventional Commit メッセージを提案する。   |

## `thinking`

| Skill                    | Description                                                      |
| ------------------------ | ---------------------------------------------------------------- |
| `refine-reasoning-logic` | 未整理の考え、提案、違和感を、構造化された壁打ちを通じて深める。 |

## `writing`

| Skill                             | Description                                                                                    |
| --------------------------------- | ---------------------------------------------------------------------------------------------- |
| `edit-existing-document`          | 既存文書の構成に合わせて編集し、重複や矛盾する説明を増やさないようにする。                     |
| `revise-english-writing`          | コマンド、パス、識別子を保ったまま、英語の技術文書を直接的で自然な文章に整える。               |
| `revise-japanese-writing`         | コマンド、パス、識別子を保ったまま、日本語の技術文書を確認し、自然で読みやすい日本語に整える。 |
| `summarize-discussion-coherently` | 個人の対話ログを、整理フレームを選びつつ、未整理点も残した一貫した構造的な要約にまとめる。     |
