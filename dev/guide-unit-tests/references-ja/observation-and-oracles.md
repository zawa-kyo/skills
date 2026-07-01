# 観測と Oracle

## 観察可能な結果を優先する

Priority: Essential
Layer: Observation
Applicability: 単体テストの assertion を選ぶ場面。
Trade-offs: システム境界では相互作用の検証が必要な場合もある。
Sources: _Unit Testing: Principles, Practices, and Patterns_

戻り値、外部から見える状態、発生した domain event など、振る舞いの意味を表す観察可能な結果を assert する。

中間状態、private algorithm、呼び出し順、helper 呼び出しを assert しない。
ただし、それ自体が公開契約である場合は例外である。

## 観測スタイルを意図的に選ぶ

Priority: Recommended
Layer: Observation
Applicability: 同じ振る舞いを複数の方法で検証できる場面。
Trade-offs: output-based test は保守しやすいことが多いが、意味のある結果が状態変化である場合は state-based test も妥当である。
Sources: _Unit Testing: Principles, Practices, and Patterns_

デフォルトでは次の順に検討する。

1. 振る舞いを戻り値や純粋な結果で表せるなら output-based testing を使う。
2. 意味のある結果が観察可能な状態変化なら state-based testing を使う。
3. 意味のある結果が境界依存との通信なら interaction-based testing を使う。

## stub を検証しない

Priority: Essential
Layer: Observation
Applicability: system under test へ入力を与える test double を使う場面。
Trade-offs: 1つの test double が stub と mock の両方の役割を持つ場合もある。その場合でも、振る舞いを表す出力側だけを検証する。
Sources: _Unit Testing: Principles, Practices, and Patterns_

stub との相互作用を assert しない。
stub は system under test へ入力を与えるものであり、どう問い合わせられたかを検証すると実装詳細を確認しやすい。

## 意味のある境界通信だけを mock する

Priority: Essential
Layer: Observation
Applicability: 依存との相互作用を検証する場面。
Trade-offs: adapter code は、重い mock を使った単体テストより結合テストで扱うほうがよい場合がある。
Sources: _Unit Testing: Principles, Practices, and Patterns_

mock は、message 送信、event publish、unmanaged dependency 呼び出しなど、システム境界で意味を持つ通信を検証するために使う。

通常の domain collaborator を、1クラスずつテストするためだけに mock しない。
