# Markdown textlint Hook 設計書

## 1. 目的

Claude Code / Codex が Markdown ファイル (`*.md`) を変更した直後に `textlint` を実行し、
lint 違反があれば Agent にフィードバックして修正を促す。

Hook の配布は APM で共通化し、Claude Code / Codex の双方で同じ文章品質ルールを適用できるようにする。

## 2. スコープ

### 対象

- `*.md` の変更検知
- `PostToolUse` Hook からの実行
- Claude Code / Codex への APM 配布
- TypeScript 製 Hook runner
- `textlint` 設定ファイルの同梱
- lint 違反を Agent に返す
- textlint / rule のバージョンを再現可能にする

### 対象外

以下は初期実装では扱わない。

- `*.mdx`
- 日本語 / 英語の自動判定
- `textlint --fix` による自動書き換え
- MCP
- LSP
- daemon 化
- filesystem watcher
- 独自キャッシュ
- lint-staged / Husky 等の追加フレームワーク
- Markdown 以外の formatter / linter
- CI への組み込み

## 3. 設計方針

### 3.1 Hook は品質ゲートとして使う

Markdown が変更された場合に必ず textlint を通す。

Agent の判断で lint を実行するかどうかを決めるのではなく、
`PostToolUse` を契機として決定論的に検証する。

```text
Claude Code / Codex
        |
        | Markdown を編集
        v
   PostToolUse
        |
        v
markdown-lint.ts
        |
        | *.md の変更か判定
        v
     textlint
      /    \
    OK      NG
    |       |
 exit 0   diagnostics
            |
            v
        Agent が修正
```

### 3.2 Hook 定義は薄く保つ

Claude Code / Codex の差異や変更ファイル判定などのロジックを
Hook 設定ファイルへ書かない。

Hook は TypeScript runner を起動するだけにする。

### 3.3 Harness 固有差分は runner 内で吸収する

Claude Code / Codex の `PostToolUse` payload は完全には同一ではないため、
`markdown-lint.ts` に adapter 層を持たせる。

優先順位は次の通り。

1. Hook payload から変更されたファイルを抽出
2. 抽出できない場合のみ Git diff を fallback として利用

`git diff --name-only` のみを使うと既存の dirty な Markdown を毎回 lint するため、
原則として payload から今回の変更対象を取得する。

### 3.4 textlint は CLI として呼び出す

初期実装では textlint の Node API を直接利用しない。

Hook runner の責務は「変更対象を判断して textlint を実行する」ことに限定し、
textlint の内部 API への依存を避ける。

### 3.5 Hook 自身の npm 依存は増やさない

`markdown-lint.ts` は Node.js 標準 API のみで実装する。

想定利用 API:

- `node:process`
- `node:path`
- `node:child_process`
- 必要に応じて `node:fs`

TypeScript 実行用に `tsx` / `ts-node` は追加しない。
Node.js の TypeScript 型除去実行で扱える構文だけを利用する。

## 4. ディレクトリ構成

```text
writing-lint/
├── apm.yml
├── package.json
├── package-lock.json
│
├── .apm/
│   └── hooks/
│       └── markdown-lint.json
│
├── hooks/
│   └── markdown-lint.ts
│
└── textlint/
    ├── .textlintrc.json
    └── rules/
        └── ...
```

必要に応じて `prh.yml` などを `textlint/` 配下へ追加する。

## 5. APM

APM package の target は Claude Code / Codex とする。

```yaml
name: writing-lint
version: 1.0.0

targets:
  - claude
  - codex
```

Hook の共通定義は `.apm/hooks/markdown-lint.json` に置く。

APM が各 Agent Harness 向けの Hook 設定へ変換・配布する。

## 6. Hook

イベントは `PostToolUse` を利用する。

Hook 自体では Tool 名を過度に絞り込まない。

理由:

- Claude Code と Codex で編集に利用される Tool 名が異なる
- `Edit` / `Write` / `apply_patch` / shell 等、複数経路があり得る
- Markdown 判定を TypeScript 側へ集約した方が portable

概念例:

```json
{
  "hooks": {
    "PostToolUse": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "node \"${PLUGIN_ROOT}/hooks/markdown-lint.ts\"",
            "timeout": 15
          }
        ]
      }
    ]
  }
}
```

実際の APM Hook schema に合わせて最終調整する。

## 7. markdown-lint.ts

### 責務

runner は以下の責務だけを持つ。

1. stdin から Hook payload を読む
2. Harness を意識せず共通形式に変換する
3. 今回変更されたファイルを抽出する
4. `*.md` 以外なら終了する
5. textlint を実行する
6. lint 結果を Agent に返す

### 想定構造

```ts
async function main(): Promise<void>

async function readHookInput(): Promise<unknown>

function extractChangedFiles(input: unknown): string[]

function extractClaudeChangedFiles(input: unknown): string[]

function extractCodexChangedFiles(input: unknown): string[]

function getGitDiffFiles(cwd: string): string[]

function isMarkdown(path: string): boolean

function runTextlint(files: string[], cwd: string): LintResult
```

### ファイル抽出

原則:

```text
Hook payload
    |
    +-- path が分かる --> 利用
    |
    +-- 分からない ----> git diff fallback
```

複数ファイルを変更する Tool にも対応できるよう、
内部表現は常に `string[]` とする。

### Markdown 判定

初期実装では `.md` のみ。

```ts
function isMarkdown(filePath: string): boolean {
  return filePath.toLowerCase().endsWith(".md");
}
```

### cwd

Hook payload から `cwd` を取得できる場合は利用する。
取得できない場合は `process.cwd()` を fallback とする。

## 8. textlint

### 設定

textlint 設定は APM package 内で管理する。

```text
textlint/.textlintrc.json
```

実行時には `--config` を明示し、
対象プロジェクト側の `.textlintrc` に依存しない。

概念例:

```text
textlint \
  --config <PLUGIN_ROOT>/textlint/.textlintrc.json \
  README.md
```

これにより Claude Code / Codex / repository の違いによらず、
同一ルールを適用する。

### 自動修正

初期実装では `--fix` を使用しない。

理由:

- Agent が認識していない変更を Hook が発生させない
- Agent 自身に修正させることで編集履歴を一貫させる
- feedback loop を単純に保つ

```text
Agent edit
   |
   v
textlint
   |
 error
   |
   v
Agent が修正
   |
   v
textlint
```

## 9. package.json と依存管理

### package.json は保持する

Hook runner 自体には npm library を使わないが、
textlint と textlint rule の実行環境を再現可能にするため、
`package.json` は APM package 側で保持する。

例:

```json
{
  "private": true,
  "devDependencies": {
    "textlint": "<fixed-version>",
    "textlint-rule-preset-ja-technical-writing": "<fixed-version>"
  }
}
```

利用する rule に応じて追加する。

### textlint もバージョン固定する

textlint 本体と rule の組み合わせで diagnostics が変化し得るため、
APM package version が同じなら lint 結果も極力再現できる状態を目指す。

そのため:

- `package.json` で version を固定
- `package-lock.json` を commit

とする。

### 実行方法

実行時に npm registry から取得しない。

優先:

```text
<PLUGIN_ROOT>/node_modules/.bin/textlint
```

環境上の制約で直接解決が難しい場合のみ、

```text
npx --no-install textlint
```

を fallback とする。

## 10. エラー処理

以下を区別する。

### lint 成功

- exit code: `0`
- Agent への追加 feedback なし

### lint 違反

- textlint の diagnostics を Agent へ返す
- Agent が修正可能な状態にする

### Hook / runtime 障害

例:

- Node.js が非対応
- textlint が未インストール
- config が見つからない
- Hook payload が壊れている

lint 違反とは異なる明確なエラーメッセージを返す。

例:

```text
[markdown-lint] textlint executable was not found.
Run the package setup before using this hook.
```

## 11. 性能方針

初期段階では最適化しない。

まず実測し、PostToolUse ごとの Node + textlint 起動コストが
開発体験上問題になるかを確認する。

問題が出た場合の検討順:

1. textlint 自身の cache
2. 対象ファイル抽出の改善
3. CLI 起動方法の改善
4. daemon / MCP / LSP

daemon / MCP / LSP は性能問題が確認されるまでは導入しない。

## 12. v1.0 完了条件

以下を満たせば v1.0 とする。

- Claude Code で Markdown 編集後に textlint が実行される
- Codex で Markdown 編集後に textlint が実行される
- Markdown 以外では textlint が実行されない
- 1 Tool 呼び出しで複数 Markdown が変更された場合に扱える
- 既存 dirty file を不要に毎回 lint しない
- textlint 違反が Agent へ返る
- Agent が修正後、再度 lint される
- textlint / rule / config が package 内で再現可能
- textlint 未セットアップ時に原因が明確
- APM から Claude Code / Codex 双方へ配布できる

---

# TODO

## Phase 1: PoC

- [ ] APM package の最小構成を作成する
- [ ] Claude Code / Codex の target を定義する
- [ ] `PostToolUse` Hook を登録する
- [ ] `hooks/markdown-lint.ts` を作成する
- [ ] stdin の Hook payload をログ出力できるようにする
- [ ] Claude Code で Markdown を編集し、実 payload を確認する
- [ ] Codex で Markdown を編集し、実 payload を確認する
- [ ] 両者の payload から変更ファイルを取得する adapter を実装する
- [ ] `.md` 以外を即時 skip する
- [ ] 仮の textlint 設定で `textlint` を実行する
- [ ] lint 違反を Agent に返せることを確認する

## Phase 2: textlint 設定

- [ ] `textlint/.textlintrc.json` を追加する
- [ ] 採用する textlint rule を決める
- [ ] 必要なら `prh.yml` 等の追加設定を用意する
- [ ] Hook から `--config` を明示して実行する
- [ ] repository 側の `.textlintrc` に影響されないことを確認する
- [ ] `--fix` を使用しないことを確認する

## Phase 3: 依存管理

- [ ] `package.json` を追加する
- [ ] textlint の version を固定する
- [ ] textlint rule の version を固定する
- [ ] `package-lock.json` を commit する
- [ ] package 内の `node_modules/.bin/textlint` を優先して実行する
- [ ] 必要なら `npx --no-install` fallback を実装する
- [ ] textlint 未インストール時のエラーメッセージを実装する

## Phase 4: ファイル変更検知の堅牢化

- [ ] Claude Code の主要な Markdown 編集経路を確認する
- [ ] Codex の主要な Markdown 編集経路を確認する
- [ ] 1 Tool で複数ファイル変更された場合を扱う
- [ ] payload から path を取得できない場合の Git diff fallback を実装する
- [ ] 既存 dirty Markdown が毎回 lint されないことを確認する
- [ ] path の重複排除を行う
- [ ] 削除済みファイルを lint 対象から除外する

## Phase 5: エラー制御

- [ ] lint 成功時は静かに終了する
- [ ] lint 違反時は diagnostics のみを Agent に返す
- [ ] runtime error と lint error を区別する
- [ ] textlint config 不在時のエラーを明確にする
- [ ] timeout 時の挙動を確認する
- [ ] 不正な Hook payload でも Agent セッションを壊さない

## Phase 6: APM 配布確認

- [ ] APM から Claude Code へ install する
- [ ] Claude Code 側の Hook 設定を確認する
- [ ] APM から Codex へ install する
- [ ] Codex 側の Hook 設定を確認する
- [ ] package path / `${PLUGIN_ROOT}` の解決を確認する
- [ ] update / reinstall 後も設定が再現されることを確認する

## Phase 7: v1.0 判定

- [ ] Claude Code で E2E 確認
- [ ] Codex で E2E 確認
- [ ] Markdown 以外で余計な lint が発生しない
- [ ] lint → Agent 修正 → lint 成功の feedback loop を確認する
- [ ] 体感上の起動遅延を測定する
- [ ] 性能問題がなければ daemon / MCP / LSP を導入しない
- [ ] README に install / setup / troubleshooting を記載する
- [ ] v1.0.0 としてタグ付け可能な状態にする

## 将来検討

実運用で必要性が確認された場合のみ検討する。

- [ ] `.mdx` 対応
- [ ] textlint cache
- [ ] 日本語 / 英語ルール切り替え
- [ ] Stop Hook で最終 lint
- [ ] MCP による Agent からの能動的 lint
- [ ] daemon / LSP による常駐化
- [ ] Markdown 以外の linter / formatter への一般化
