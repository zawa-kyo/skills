# 📚 skills

zawa-kyo が管理する [apm](https://github.com/microsoft/apm) で配布する再利用可能なエージェントスキル集です。

`meta/` 配下の各ディレクトリは、それぞれ独立したスキルパッケージです。

## 🚀 インストール

個別のスキルをグローバルにインストールする場合:

```sh
apm install -g zawa-kyo/skills/meta/review-essential-code
apm install -g zawa-kyo/skills/meta/suggest-commit-messages
apm install -g zawa-kyo/skills/meta/revise-japanese-writing
apm install -g zawa-kyo/skills/meta/cleanup-english-writing
apm install -g zawa-kyo/skills/meta/edit-existing-document
```

または `apm.yml` に追加します。

```yaml
dependencies:
  apm:
    - zawa-kyo/skills/meta/review-essential-code
    - zawa-kyo/skills/meta/suggest-commit-messages
    - zawa-kyo/skills/meta/revise-japanese-writing
    - zawa-kyo/skills/meta/cleanup-english-writing
    - zawa-kyo/skills/meta/edit-existing-document
```

## 🎒 スキルの詳細

| Skill                   | Install path                   | Description                                                                                        |
| ----------------------- | ------------------------------ | -------------------------------------------------------------------------------------------------- |
| Review Essential Code   | `meta/review-essential-code`   | バグ、リグレッション、テスト不足に加えて、本質的な保守しやすさの観点からコード変更をレビューする。 |
| Suggest Commit Messages | `meta/suggest-commit-messages` | staged または unstaged の Git diff から、簡潔な英語の Conventional Commit メッセージを提案する。   |
| Revise Japanese Writing | `meta/revise-japanese-writing` | コマンド、パス、識別子を保ったまま、日本語の技術文書を確認し、自然で読みやすい日本語に整える。     |
| Cleanup English Writing | `meta/cleanup-english-writing` | コマンド、パス、識別子を保ったまま、英語の技術文書を直接的で AI っぽさの少ない文章に整える。       |
| Edit Existing Document  | `meta/edit-existing-document`  | 既存文書の構成に合う形で編集し、重複や矛盾する説明を増やさないようにする。                         |
