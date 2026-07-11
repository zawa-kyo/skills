# ルール索引

このファイルは、安定した Rule ID と、そのルールを含む実行時資料を対応付けるための索引である。
実行時資料ではなく、スキル設計を重ねて説明する場所でもない。

実際のガイドは `references-ja/` に置く。
参照元との対応や採用理由は `sources.md` に置く。
設計意図は `design.md` に置く。

## 書き方

ルールを追加するときは、実行時資料との対応を追うために必要な項目だけを書く。

- Rule ID: 参照元対応と保守時の会話で使う安定した識別子。
- 置き場所: そのルールを記載する実行時資料。
- 優先度: Essential / Recommended / Suggested。
- 参照元グループ: そのルールの元になった参照元や調整方針。
- 判断内容: 実行時資料で利用者に見せるルールや確認項目。

採用理由、作成過程、長い例外説明はここに書かない。
説明がないとルールを理解できない場合は、実行時資料または `sources.md` を改善する。
適用場面は、原則として置き場所のファイル名と見出しから分かるようにする。

## 目的 (`references/01-purpose.md`)

### UT-PUR-001

優先度: Essential。
参照元グループ: `khorikov-core`。
判断内容: 単体テストは、テスト数やカバレッジの最大化ではなく、持続可能な変更を支えるために書く。

### UT-PUR-002

優先度: Essential。
参照元グループ: `khorikov-core`。
判断内容: テストは、意味のある振る舞いを守り、保守コストに見合うときだけ残す。

### UT-PUR-003

優先度: Essential。
参照元グループ: `khorikov-core`。
判断内容: 単体テストは、リグレッションに対する保護、リファクタリング耐性、迅速なフィードバック、保守性で評価する。

### UT-PUR-004

優先度: Recommended。
参照元グループ: `khorikov-core`。
判断内容: カバレッジは、警告信号として使い、テストを書く理由そのものにはしない。

## コンテキスト (`references/02-context.md`)

### UT-CTX-001

優先度: Essential。
参照元グループ: `workflow-adaptations`。
判断内容: 既存プロジェクトのコードに対しては、ドメイン、アーキテクチャ、依存関係、既存テストのコンテキストを読んでからテストを設計する。

### UT-CTX-002

優先度: Recommended。
参照元グループ: `khorikov-core`。
判断内容: 価値のある振る舞いがテストしにくい場合は、モックやテスト専用の逃げ道を増やす前に設計上の問題を疑う。

### UT-CTX-003

優先度: Recommended。
参照元グループ: `khorikov-core`。
判断内容: 重要な判断と副作用は、可能な範囲で分ける。

### UT-CTX-004

優先度: Recommended。
参照元グループ: `khorikov-core`。
判断内容: プライベートメソッドを直接テストするのではなく、必要なら意味のある概念として抽出する。

## テスト戦略 (`references/03-test-strategy.md`)

### UT-STR-001

優先度: Essential。
参照元グループ: `khorikov-core`。
判断内容: コードを書く前に、テストレベルと単体テストの境界を決める。

### UT-STR-002

優先度: Essential。
参照元グループ: `khorikov-core`。
判断内容: テスト対象の単位は、クラス構造ではなく振る舞いで決める。

### UT-STR-003

優先度: Essential。
参照元グループ: `khorikov-core`。
判断内容: 壊れたときの影響が大きい振る舞いを優先して単体テストする。

### UT-STR-004

優先度: Essential。
参照元グループ: `khorikov-core`。
判断内容: 共有依存と揮発性依存は、単体テストでは置き換えるか制御する。

### UT-STR-005

優先度: Recommended。
参照元グループ: `khorikov-core`。
判断内容: 検証方法は、出力、状態、相互作用の順をデフォルトにして選ぶ。

## テスト設計 (`references/04-test-design.md`)

### UT-DES-001

優先度: Essential。
参照元グループ: `workflow-adaptations`。
判断内容: 実装前に、戦略を具体的なテストケースへ落とす。

### UT-DES-002

優先度: Essential。
参照元グループ: `khorikov-core`。
判断内容: 実装詳細ではなく、外から確認できる結果を優先して検証する。

### UT-DES-003

優先度: Essential。
参照元グループ: `khorikov-core`。
判断内容: スタブを検証しない。

### UT-DES-004

優先度: Essential。
参照元グループ: `khorikov-core`。
判断内容: 重要な境界通信だけをモックする。

### UT-DES-005

優先度: Recommended。
参照元グループ: `khorikov-core`。
判断内容: プライベートな振る舞いは、公開された振る舞いを通じてテストする。

## 実装 (`references/05-implementation.md`)

### UT-IMP-001

優先度: Essential。
参照元グループ: `workflow-adaptations`。
判断内容: 設計したケースを、その目的を崩さずに実装する。

### UT-IMP-002

優先度: Recommended。
参照元グループ: `khorikov-core`。
判断内容: テスト名は、振る舞いと期待結果が分かるように付ける。

### UT-IMP-003

優先度: Recommended。
参照元グループ: `khorikov-core`。
判断内容: テストは Arrange、Act、Assert で構成する。

### UT-IMP-004

優先度: Recommended。
参照元グループ: `khorikov-core`。
判断内容: テストは直線的に保ち、アサーションに本番コードのようなロジックを入れない。

### UT-IMP-005

優先度: Suggested。
参照元グループ: `khorikov-core`。
判断内容: セットアップは、共有フィクスチャより明示的なビルダーやファクトリで再利用する。

### UT-IMP-006

優先度: Essential。
参照元グループ: `khorikov-core`。
判断内容: テストのためだけに本番コードを汚染せず、本番モデルも改善する設計変更を優先する。

## セルフレビュー (`references/06-self-review.md`)

### UT-REV-001

優先度: Essential。
参照元グループ: `workflow-adaptations`。
判断内容: 目的、コンテキスト、戦略、設計、実装の同じワークフローでテストを見直す。

### UT-REV-002

優先度: Essential。
参照元グループ: `workflow-adaptations`。
判断内容: レビューでは、行単位のスタイルより先に、振る舞いとリスクを見る。

### UT-REV-003

優先度: Recommended。
参照元グループ: `workflow-adaptations`。
判断内容: 指摘は、違反している原則、具体的なリスク、最小限の有効な修正方針と一緒に報告する。
