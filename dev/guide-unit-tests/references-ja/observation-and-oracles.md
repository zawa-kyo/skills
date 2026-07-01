# 観測とオラクル

## 観察可能な結果を優先する

Priority: Essential
Layer: Observation
Applicability: 単体テストのアサーションを選ぶ場面。
Trade-offs: システム境界では相互作用の検証が必要な場合もある。
Sources: _Unit Testing: Principles, Practices, and Patterns_

戻り値、外部から見える状態、発生したドメインイベントなど、振る舞いの意味を表す観察可能な結果を検証する。

中間状態、非公開アルゴリズム、呼び出し順、補助メソッドの呼び出しを検証しない。
ただし、それ自体が公開契約である場合は例外である。

## 観測スタイルを意図的に選ぶ

Priority: Recommended
Layer: Observation
Applicability: 同じ振る舞いを複数の方法で検証できる場面。
Trade-offs: 出力ベースのテストは保守しやすいことが多いが、意味のある結果が状態変化である場合は状態ベースのテストも妥当である。
Sources: _Unit Testing: Principles, Practices, and Patterns_

デフォルトでは次の順に検討する。

1. 振る舞いを戻り値や純粋な結果で表せるなら出力ベースのテストを使う。
2. 意味のある結果が観察可能な状態変化なら状態ベースのテストを使う。
3. 意味のある結果が境界依存との通信なら相互作用ベースのテストを使う。

## スタブを検証しない

Priority: Essential
Layer: Observation
Applicability: テスト対象へ入力を与えるテストダブルを使う場面。
Trade-offs: 1つのテストダブルがスタブとモックの両方の役割を持つ場合もある。その場合でも、振る舞いを表す出力側だけを検証する。
Sources: _Unit Testing: Principles, Practices, and Patterns_

スタブとの相互作用を検証しない。
スタブはテスト対象へ入力を与えるものであり、どう問い合わせられたかを検証すると実装詳細を確認しやすい。

## 意味のある境界通信だけをモックする

Priority: Essential
Layer: Observation
Applicability: 依存との相互作用を検証する場面。
Trade-offs: アダプタコードは、重いモックを使った単体テストより結合テストで扱うほうがよい場合がある。
Sources: _Unit Testing: Principles, Practices, and Patterns_

モックは、メッセージ送信、イベント発行、管理外の依存呼び出しなど、システム境界で意味を持つ通信を検証するために使う。

通常のドメイン内の依存先を、1クラスずつテストするためだけにモックしない。
