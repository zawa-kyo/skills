# 📚 skills

zawa-kyo が管理し、[apm](https://github.com/microsoft/apm) 向けに公開している再利用可能なエージェントスキルと Hook です。

## リポジトリの構成

スキルはカテゴリ別のディレクトリにまとめています。各スキルパッケージは `<category>/<skill>` に置いています。

| カテゴリ   | 用途                                                            |
| ---------- | --------------------------------------------------------------- |
| `dev`      | 設計、実装、レビューなど、開発やコーディングに関わる作業。      |
| `thinking` | 思考整理、意思決定支援、壁打ちなど、考える作業全般。            |
| `writing`  | 文章編集、文書メンテナンス、要約、lint など、文書に関わる作業。 |

各スキルディレクトリには、英語版と日本語版のスキル定義、エージェント向けのメタデータを置いています。
Hook は同じカテゴリの配下に、独立した APM パッケージとして置いています。

## スキルの詳細

## `dev`

| スキル                    | 詳細                                                                                               |
| ------------------------- | -------------------------------------------------------------------------------------------------- |
| `bootstrap-repo-docs`     | 作成直後か、まだ最小構成のままのリポジトリに対して、README と AGENTS の日英対応文書を整備する。    |
| `guide-automated-tests`   | テストレベルをまたいで検証方法を選び、明確な単体、結合、E2E テストの作業を専門スキルへ委ねる。     |
| `guide-e2e-tests`         | 利用者から見える振る舞いやシステム全体の動作を確かめる E2E テストを設計、実装、レビューする。      |
| `guide-integration-tests` | 複数のコンポーネントやレイヤーにまたがる振る舞いを確かめる結合テストを設計、実装、レビューする。   |
| `guide-unit-tests`        | 一つの振る舞いに焦点を当てた単体テストを設計、実装、レビューする。                                 |
| `review-essential-code`   | バグ、リグレッション、テスト不足に加えて、本質的な保守しやすさの観点からコード変更をレビューする。 |
| `suggest-commit-messages` | staged または unstaged の Git diff から、簡潔な英語の Conventional Commit メッセージを提案する。   |

## `thinking`

| スキル                           | 詳細                                                                                 |
| -------------------------------- | ------------------------------------------------------------------------------------ |
| `challenge-completed-work`       | 成果物を完了扱いする前に、目的や基準を満たすかを新しい文脈から反証する。             |
| `compare-distinct-approaches`    | 実装や変更へ進む前に前提を検証し、実質的に異なる3つ以上の案を比較する。              |
| `coordinate-independent-reviews` | 異なる観点のレビュー担当を複数編成し、重複を整理して対立を残したまま結果を統合する。 |
| `refine-developing-reasoning`    | 未整理の考えを対話で深め、主張、前提、因果関係、論点を明確にする。                   |

## `writing`

| スキル                            | 詳細                                                                                           |
| --------------------------------- | ---------------------------------------------------------------------------------------------- |
| `edit-existing-document`          | 既存文書の構成に合わせて編集し、重複や矛盾する説明を増やさないようにする。                     |
| `revise-english-writing`          | コマンド、パス、識別子を保ったまま、英語の技術文書を直接的で自然な文章に整える。               |
| `revise-japanese-writing`         | コマンド、パス、識別子を保ったまま、日本語の技術文書を確認し、自然で読みやすい日本語に整える。 |
| `rewrite-final-plan`              | 修正を重ねたプランを、会話の経緯を知らない読者にも伝わる最終設計として書き直す。               |
| `summarize-discussion-coherently` | 個人の対話ログを、整理フレームを選びつつ、未整理点も残した一貫した構造的な要約にまとめる。     |

## Hook パッケージ

| パッケージ     | 配置                   | 用途                                                                      |
| -------------- | ---------------------- | ------------------------------------------------------------------------- |
| `writing-lint` | `writing/writing-lint` | Claude Code または Codex が Markdown を変更した後に textlint を実行する。 |

## インストール

個別のスキルをグローバルにインストールするには、`zawa-kyo/skills/<category>/<skill>` の形で指定します。

```sh
apm install -g zawa-kyo/skills/dev/guide-automated-tests
apm install -g zawa-kyo/skills/thinking/compare-distinct-approaches
apm install -g zawa-kyo/skills/thinking/refine-developing-reasoning
apm install -g zawa-kyo/skills/writing/revise-japanese-writing
```

上記は代表例です。ほかのスキルを使う場合は、上の一覧から必要なパスを選んでください。
テストレベルをまたぐ戦略と 3 つの専門スキルをまとめて使う場合は、`guide-automated-tests` をインストールします。
単体、結合、E2E のいずれかに限定された明確な作業だけが必要な場合は、対応する専門スキルを直接インストールできます。

または、必要なスキルを `apm.yml` に追加します。

```yaml
dependencies:
  apm:
    - zawa-kyo/skills/dev/guide-automated-tests
    - zawa-kyo/skills/thinking/compare-distinct-approaches
    - zawa-kyo/skills/thinking/refine-developing-reasoning
    - zawa-kyo/skills/writing/revise-japanese-writing
```

### Markdown lint Hook

`writing-lint` を使うには Node.js 22.18 以降が必要です。使用する実行環境を指定し、プロジェクトへインストールします。

```sh
apm install zawa-kyo/skills/writing/writing-lint --target claude,codex
```

APM は実行環境ごとに Hook を配置します。各 Hook の配置先でセットアップスクリプトを実行し、lock ファイルでバージョンを固定した依存関係をインストールします。

```sh
node .claude/hooks/writing-lint/runtime/setup.ts
node .codex/hooks/writing-lint/runtime/setup.ts
```

有効化した実行環境で、対応するセットアップコマンドだけを実行してください。Hook は `PostToolUse` の payload を読み取り、変更された `*.md` を lint します。自動修正は行わず、違反内容をエージェントに返します。

公開しているスキル一式をまとめて入れる場合は、`zawa-kyo/skills` を指定します。

```sh
apm install -g zawa-kyo/skills
```

または、`apm.yml` にコレクション全体を追加します。

```yaml
dependencies:
  apm:
    - zawa-kyo/skills
```
