# テスト対象の選定

## 価値のある振る舞いを優先する

Priority: Essential
Layer: Target Selection
Applicability: 単体テストを書くか、残すかを判断する場面。
Trade-offs: 複雑でないコードは、より価値の高いテストから間接的に通れば十分な場合がある。
Sources: _Unit Testing: Principles, Practices, and Patterns_

リグレッションしたときに問題になる振る舞いへ単体テストを集中させる。
ビジネスルール、ドメインロジック、重要な計算、パース、バリデーション、非自明な分岐は強い候補である。

ロジックがほとんどなく、より価値の高い振る舞い経由で既に通っているコードに、専用の単体テストを無理に書かない。

## 単位は振る舞いで決める

Priority: Essential
Layer: Target Selection
Applicability: テスト境界を選ぶ場面。
Trade-offs: 1つの振る舞いが複数クラスにまたがっても、高速で共有依存や揮発性依存から隔離されていれば単体テストになり得る。
Sources: _Unit Testing: Principles, Practices, and Patterns_

テスト単位は、必ずしも1クラスや1メソッドではない。
テスト対象の単位は、検証したい振る舞いで決める。

本番コードのクラス構造に合わせるためだけにテストを細分化しない。
それによってテストの意味が薄くなったり、実装詳細に結合したりするなら逆効果である。

## 共有依存と揮発性依存を隔離する

Priority: Essential
Layer: Target Selection
Applicability: 依存がテストを遅く、不安定に、順序依存に、または環境依存にする場面。
Trade-offs: 安定したプロセス内の依存先は、実物のまま使える場合が多い。
Sources: _Unit Testing: Principles, Practices, and Patterns_

共有依存と揮発性依存は、単体テストでは置き換えるか制御する。
例として、現在時刻、乱数、共有データベース、ファイルシステム、外部サービス、共有された可変グローバル状態、プロセス外メッセージングがある。

安定したプロセス内の依存先は、別クラスであるという理由だけで置き換えない。

## 非公開の詳細を直接テストしない

Priority: Recommended
Layer: Target Selection
Applicability: 非公開メソッドや非公開状態を直接テストしないとロジックを検証できないように見える場面。
Trade-offs: 非公開ロジックが複雑で価値を持つなら、内部を公開するのではなく、公開契約を持つ概念として抽出する。
Sources: _Unit Testing: Principles, Practices, and Patterns_

非公開の振る舞いは、観察可能な公開された振る舞いを通じてテストする。
非公開の詳細を直接テストすると、実装詳細へ結合し、リファクタリングを難しくしやすい。
