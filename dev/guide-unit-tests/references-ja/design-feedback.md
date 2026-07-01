# 設計フィードバック

## テストしにくさをシグナルとして扱う

Priority: Recommended
Layer: Design Feedback
Applicability: 価値のある振る舞いが単体テストしにくい場面。
Trade-offs: infrastructure や concurrency には本質的な難しさがある。すべての難しいテストが domain model の問題を示すわけではない。
Sources: _Unit Testing: Principles, Practices, and Patterns_

テストしにくいコードは、隠れた依存、混ざった責務、global state、過剰な orchestration、infrastructure の背後に閉じ込められた domain rule を示すことがある。

mock、flag、test-only accessor を増やす前に、設計を確認する手がかりとして扱う。

## 判断と副作用を分ける

Priority: Recommended
Layer: Design Feedback
Applicability: domain decision が I/O、永続化、logging、messaging、UI concern と混ざっている場面。
Trade-offs: 意味のある判断ロジックがない単純なコードを過剰に抽象化しない。
Sources: _Unit Testing: Principles, Practices, and Patterns_

重要な判断は、可能な範囲で小さく決定的な core に移す。
副作用は外側の layer に置き、結合テストや境界に焦点を当てた少数の単体テストで扱う。

## テストのために本番コードを汚染しない

Priority: Essential
Layer: Design Feedback
Applicability: テストしやすくする目的だけで本番コードを変えようとしている場面。
Trade-offs: testability のために設計を改善することは妥当である。テスト専用の switch や public state を追加することは妥当ではない。
Sources: _Unit Testing: Principles, Practices, and Patterns_

単体テストを通すためだけに、test-only branch、public setter、mutable global、緩い contract を追加しない。
本番モデルも改善する設計変更を優先する。

## private method ではなく概念を抽出する

Priority: Recommended
Layer: Design Feedback
Applicability: private logic が直接テストしたいほど複雑な場面。
Trade-offs: 抽出は、新しい概念に実際の責務と公開契約がある場合にだけ有効である。
Sources: _Unit Testing: Principles, Practices, and Patterns_

private な振る舞いが重要で複雑なら、private method を直接テストするのではなく、意味のある概念として抽出する。
