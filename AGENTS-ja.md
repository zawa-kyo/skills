# リポジトリ指示

## リポジトリレイアウト

このリポジトリは、再利用可能なエージェントスキルを `apm` で公開する。`dev/` または `writing/` 配下の各ディレクトリは、それぞれ独立したスキルパッケージとして扱う。

各スキルには次のファイルを置く。

- `SKILL.md` は英語版のスキル定義。
- `SKILL-ja.md` は同じ挙動を説明する日本語版のスキル定義。
- `agents/openai.yaml` は OpenAI 向けの表示メタデータと default prompt を定義する。

## 言語バージョン

このリポジトリでテキストを生成または編集する場合は、同じ内容を扱う英語の Markdown ファイルと、それに対応する日本語の `*-ja.md` ファイルが存在するかを確認する。どちらか一方が存在する場合は、同じ変更の中で両方を更新し、内容の対応を保つ。

英語版と日本語版は意味をそろえたうえで、それぞれの言語として自然に書く。日本語として自然な表現で同じ意図を保てる場合は、英語版を機械的に一行ずつ翻訳した文章にしない。

このルールは、特に次のファイルに適用する。

- `README.md` と `README-ja.md`
- `AGENTS.md` と `AGENTS-ja.md`
- 各 `dev/<skill>/SKILL.md`、`dev/<skill>/SKILL-ja.md`、`writing/<skill>/SKILL.md`、`writing/<skill>/SKILL-ja.md`

## Skill のメンテナンス

スキルを追加、改名、削除する場合は、そのスキルに触れているリポジトリ内のファイルをすべて更新する。

- 対応する `dev/<skill>/` または `writing/<skill>/` ディレクトリの内容
- `README.md` と `README-ja.md` のインストール例とスキル一覧
- パッケージ単位の情報が変わる場合は `apm.yml`
- 表示名、short description、default prompt を変える必要がある場合は `agents/openai.yaml`

スキルの指示は、実際の作業に使える具体的な内容にする。広い助言よりも、具体的なワークフロー、起動条件、出力への期待、検証手順を優先する。

対応する `SKILL.md` と `SKILL-ja.md` では、frontmatter の `name` を同一に保つ。`description` は自然にローカライズするが、起動意図と対象範囲は同じにする。
