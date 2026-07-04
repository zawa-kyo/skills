# 検証方法と正しさの判断

## 外から確認できる結果を優先する

Priority: Essential
Layer: Observation
Applicability: 単体テストのアサーションを選ぶ場面。
Trade-offs: システム境界では相互作用の検証が必要な場合もある。
Sources: _Unit Testing: Principles, Practices, and Patterns_

戻り値、外部から見える状態、発生したドメインイベントなど、振る舞いの意味を表す結果を検証する。

中間状態、非公開アルゴリズム、呼び出し順、補助メソッドの呼び出しを検証しない。
ただし、それ自体が外部に見せている仕様である場合は例外である。

## 検証方法を意図して選ぶ

Priority: Recommended
Layer: Observation
Applicability: 同じ振る舞いを複数の方法で検証できる場面。
Trade-offs: 出力ベースのテストは保守しやすいことが多い。重要な結果が状態変化である場合は、状態ベースのテストも妥当である。
Sources: _Unit Testing: Principles, Practices, and Patterns_

デフォルトでは次の順に検討する。

1. 振る舞いを戻り値や純粋な結果で表せるなら出力ベースのテストを使う。
2. 重要な結果が外から確認できる状態変化なら状態ベースのテストを使う。
3. 重要な結果が境界依存との通信なら相互作用ベースのテストを使う。

## スタブを検証しない

Priority: Essential
Layer: Observation
Applicability: テスト対象へ入力を与えるテストダブルを使う場面。
Trade-offs: 1つのテストダブルがスタブとモックの両方の役割を持つ場合もある。その場合でも、振る舞いとして重要な出力側だけを検証する。
Sources: _Unit Testing: Principles, Practices, and Patterns_

スタブとの相互作用を検証しない。
スタブはテスト対象へ入力を与えるものである。どう問い合わせられたかまで検証すると、実装詳細を確認するテストになりやすい。

## 重要な境界通信だけをモックする

Priority: Essential
Layer: Observation
Applicability: 依存との相互作用を検証する場面。
Trade-offs: アダプタコードでは、重いモックを使う単体テストより、結合テストで扱う選択もある。
Sources: _Unit Testing: Principles, Practices, and Patterns_

モックは、メッセージ送信、イベント発行、管理外の依存呼び出しなど、システム境界で重要な通信を検証するために使う。

通常のドメイン内の依存先を、1クラスずつテストするためだけにモックしない。
