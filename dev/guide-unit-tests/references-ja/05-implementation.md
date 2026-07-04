# 実装

## 設計したケースを実装する

Priority: Essential
Layer: Implementation
Applicability: 単体テストコードを書いたり変更したりする場面。
Trade-offs: 同じ振る舞い重視の意図を保てるなら、ローカルなテストフレームワークの慣習に従う。
Sources: _Unit Testing: Principles, Practices, and Patterns_

設計したケースを実装する。
フレームワークやモックツールの都合で、テストが守るべき振る舞いを変えない。

コードがテストしにくい場合は、本番モデルも改善するリファクタリングを検討する。
本番の振る舞いを弱めるテスト専用の逃げ道を追加しない。

## 振る舞いでテスト名を付ける

Priority: Recommended
Layer: Implementation
Applicability: 単体テストを書いたり、名前を変えたりする場面。
Trade-offs: 既存のローカル命名規約が振る舞いを明確に伝えているなら、それに従う。
Sources: _Unit Testing: Principles, Practices, and Patterns_

読んだ人が、振る舞いと期待される結果を理解できる名前にする。
メソッド名や実装構造を繰り返すだけの名前は避ける。

## AAA を使う

Priority: Recommended
Layer: Implementation
Applicability: ほとんどの単体テスト。
Trade-offs: 非常に短いテストでは、構造が明らかなら区切りコメントは不要である。
Sources: _Unit Testing: Principles, Practices, and Patterns_

テストは Arrange、Act、Assert で構成する。

- Arrange: 入力、依存関係、開始状態を準備する。
- Act: 振る舞いを1回実行する。
- Assert: 外から確認できる結果を検証する。

1つのテストに複数の Arrange、Act、Assert の流れを入れない。
通常、それは複数の振る舞いを扱っていることを示す。

## テストを直線的に保つ

Priority: Recommended
Layer: Implementation
Applicability: テストロジックに条件分岐、ループ、計算された期待値が含まれる場面。
Trade-offs: パラメータ化テストは、各ケースの入力と期待結果が明確なら妥当である。
Sources: _Unit Testing: Principles, Practices, and Patterns_

単体テストは、単純で直線的に保つ。
テストのアサーションに `if`、`switch`、ループ、本番コードのようなロジックを入れない。

テストが本番コードに似たロジックで期待値を計算している場合、バグを検出するのではなく複製している可能性がある。

## セットアップは明示的に再利用する

Priority: Suggested
Layer: Implementation
Applicability: セットアップコードが繰り返され始めた場面。
Trade-offs: 共有しすぎたフィクスチャは、テストに必要な入力を隠し、テスト同士を結合する。
Sources: _Unit Testing: Principles, Practices, and Patterns_

各テストが重要な値を明示して呼び出せるファクトリ関数やビルダーを優先する。
テストの前提が見えなくなる共有セットアップは避ける。

## テストのために本番コードを汚染しない

Priority: Essential
Layer: Implementation
Applicability: テストしやすくする目的だけで本番コードを変えようとしている場面。
Trade-offs: テストしやすさのために設計を改善することは妥当である。テスト専用のスイッチや、外から変更できる状態を追加するのは避ける。
Sources: _Unit Testing: Principles, Practices, and Patterns_

単体テストを通すためだけに、テスト専用の分岐、公開 setter、変更可能なグローバル状態、緩い契約を追加しない。
本番モデルも改善する設計変更を優先する。

## 実装結果の出力

実装結果を報告するときは、次を含める。

- 追加または変更したテスト
- テストしやすさのために行った本番コードのリファクタリング
- 各テストが守る振る舞い
- 実行したコマンドまたはチェック
- 結合境界が未テストであるなど、残るリスク
