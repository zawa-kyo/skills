# 基礎

## 目的

Priority: Essential
Layer: Foundation
Applicability: 単体テストの作成またはレビュー全般。
Trade-offs: 価値が明確でないテストは、改善する、別のテスト種別へ移す、または削除する。
Sources: _Unit Testing: Principles, Practices, and Patterns_

単体テストは、持続可能な変更を支えるためにある。
意味のあるリグレッションを検出し、リファクタリングを支え、頻繁に実行でき、読みやすい場合に価値を持つ。

テストを無料の資産として扱わない。
テストコードにも、読む、実行する、調査する、更新する、信頼するための保守コストがある。

## 品質特性

Priority: Essential
Layer: Foundation
Applicability: 単体テストが良いかどうかを判断する場面。
Trade-offs: すべての品質特性を最大化する単一のテストはない。振る舞いの重要度とリスクに応じて選ぶ。
Sources: _Unit Testing: Principles, Practices, and Patterns_

単体テストは次の観点で評価する。

- リグレッションに対する保護: 重要な振る舞いが壊れたときに失敗する。
- リファクタリング耐性: 実装詳細が変わっただけでは失敗しない。
- 迅速なフィードバック: 頻繁に実行できるほど軽い。
- 保守性: 明確で、焦点が絞られており、更新コストが低い。

## カバレッジ指標

Priority: Recommended
Layer: Foundation
Applicability: カバレッジ、不足テスト、テストスイートの健全性を扱う場面。
Trade-offs: カバレッジは未テスト領域を示せるが、テスト品質は保証しない。
Sources: _Unit Testing: Principles, Practices, and Patterns_

カバレッジは警告信号として使い、目標そのものにしない。
低いカバレッジは重要なコードが未テストである可能性を示す。
高いカバレッジは、振る舞いが正しく assert されていることを証明しない。

カバレッジ数値を満たすためだけにテストを書かない。

## 優先度の用語

優先度は次の意味で使う。

| Priority    | 意味                                                     |
| ----------- | -------------------------------------------------------- |
| Essential   | 原則として守る。例外には明示的な理由が必要。             |
| Recommended | 強いデフォルト。明確なトレードオフがあれば例外を認める。 |
| Suggested   | 一貫性のためのデフォルト。理由があれば別の選択を認める。 |
