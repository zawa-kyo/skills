# 設計フィードバック

## テストしにくさをシグナルとして扱う

Priority: Recommended
Layer: Design Feedback
Applicability: 価値のある振る舞いが単体テストしにくい場面。
Trade-offs: インフラや並行処理には本質的な難しさがある。すべての難しいテストがドメインモデルの問題を示すわけではない。
Sources: _Unit Testing: Principles, Practices, and Patterns_

テストしにくいコードは、隠れた依存、混ざった責務、グローバル状態、過剰なオーケストレーション、インフラの背後に閉じ込められたドメインルールを示すことがある。

モック、フラグ、テスト専用アクセサを増やす前に、設計を確認する手がかりとして扱う。

## 判断と副作用を分ける

Priority: Recommended
Layer: Design Feedback
Applicability: ドメイン上の判断が I/O、永続化、ログ出力、メッセージ送信、UI 関連の関心事と混ざっている場面。
Trade-offs: 意味のある判断ロジックがない単純なコードを過剰に抽象化しない。
Sources: _Unit Testing: Principles, Practices, and Patterns_

重要な判断は、可能な範囲で小さく決定的な中核へ移す。
副作用は外側のレイヤーに置き、結合テストや境界に焦点を当てた少数の単体テストで扱う。

## テストのために本番コードを汚染しない

Priority: Essential
Layer: Design Feedback
Applicability: テストしやすくする目的だけで本番コードを変えようとしている場面。
Trade-offs: テストしやすさのために設計を改善することは妥当である。テスト専用のスイッチや公開状態を追加することは妥当ではない。
Sources: _Unit Testing: Principles, Practices, and Patterns_

単体テストを通すためだけに、テスト専用の分岐、公開 setter、変更可能なグローバル状態、緩い契約を追加しない。
本番モデルも改善する設計変更を優先する。

## 非公開メソッドではなく概念を抽出する

Priority: Recommended
Layer: Design Feedback
Applicability: 非公開ロジックが直接テストしたいほど複雑な場面。
Trade-offs: 抽出は、新しい概念に実際の責務と公開契約がある場合にだけ有効である。
Sources: _Unit Testing: Principles, Practices, and Patterns_

非公開の振る舞いが重要で複雑なら、非公開メソッドを直接テストするのではなく、意味のある概念として抽出する。
