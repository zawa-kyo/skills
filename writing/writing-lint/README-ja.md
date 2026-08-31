# writing-lint

`writing-lint` は、Claude Code または Codex が Markdown ファイルを変更した後に textlint を実行する APM の Hook パッケージである。

## 設計

Hook は `PostToolUse` で実行する。実行環境に共通の Hook 定義は TypeScript runner を起動するだけにし、Claude Code と Codex の payload の違いは runner で扱う。

runner は Hook payload から変更されたパスを取り出し、存在する `*.md` だけを lint する。payload から利用できるパスを取得できない場合は、Git の変更ファイルと未追跡ファイルを fallback として使う。`*.mdx` は対象にせず、`textlint --fix` による自動書き換えもしない。

runner は Node.js 標準ライブラリだけを使い、textlint を CLI として実行する。パッケージに含まれる設定を明示して使うため、対象プロジェクトの textlint 設定は結果へ影響しない。lint 違反では textlint の終了ステータスを維持し、セットアップや設定の不足といった runtime 障害は別の終了ステータスで返す。

## 実行環境

runtime には Node.js 22.18 以降が必要である。`runtime/package-lock.json` で textlint と rule preset のバージョンを固定する。Hook を配置した後、配置先ごとに `runtime/setup.ts` を実行して runtime 依存関係をインストールする。このスクリプトは runtime 依存関係だけをインストールし、Vitest はパッケージのテストにだけ使う。

```text
.apm/hooks/markdown-lint.json  Hook 定義
runtime/markdown-lint.ts       payload 処理と textlint の実行
runtime/textlint/              パッケージ固有の textlint 設定
runtime/setup.ts               配置先の runtime をセットアップするスクリプト
```

## 開発

リポジトリのルートからテストを実行する。

```sh
mise run test
```
