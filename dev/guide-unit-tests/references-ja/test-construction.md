# テスト実装

## 振る舞いでテスト名を付ける

Priority: Recommended
Layer: Construction
Applicability: 単体テストを書く、または名前を直す場面。
Trade-offs: 既存のローカル命名規約が振る舞いを明確に伝えているなら、それに従う。
Sources: _Unit Testing: Principles, Practices, and Patterns_

テスト名は、読み手が振る舞いと期待結果を理解できる形にする。
メソッド名や実装構造を繰り返すだけの名前は避ける。

## AAA を使う

Priority: Recommended
Layer: Construction
Applicability: 多くの単体テスト。
Trade-offs: 非常に短いテストでは、構造が明らかなら section comment は不要である。
Sources: _Unit Testing: Principles, Practices, and Patterns_

テストは Arrange、Act、Assert で構成する。

- Arrange は入力、依存、開始状態を準備する。
- Act は振る舞いを1回実行する。
- Assert は観察可能な結果を確認する。

1つのテストに複数の Arrange-Act-Assert の流れを入れない。
多くの場合、それは複数の振る舞いを扱っている。

## テストを直線的に保つ

Priority: Recommended
Layer: Construction
Applicability: テスト内に条件分岐、ループ、計算された期待値がある場面。
Trade-offs: parameterized test は、各ケースの入力と期待結果が明確なら妥当である。
Sources: _Unit Testing: Principles, Practices, and Patterns_

単体テストは単純で、ほぼ直線的に読むことができる形に保つ。
assertion に `if`、`switch`、loop、本番コードに似たロジックを入れない。

期待値を本番コードと似たロジックで計算している場合、バグを検出するのではなく複製している可能性がある。

## setup は明示的に再利用する

Priority: Suggested
Layer: Construction
Applicability: setup code の重複が増えてきた場面。
Trade-offs: 共有しすぎた fixture は、テストに必要な入力を隠し、テスト同士を結合する。
Sources: _Unit Testing: Principles, Practices, and Patterns_

各テストが、意味のある値を明示して呼び出せる factory function や builder を優先する。
テストの前提条件が見えなくなる共有 setup は避ける。
