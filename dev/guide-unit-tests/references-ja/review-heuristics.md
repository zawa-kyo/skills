# レビューヒューリスティクス

## レビュー順

単体テストのレビューでは、次の順に確認する。

1. そのテストはどの振る舞いを守っているか。
2. その振る舞いは単体テストで守る価値があるか。
3. テスト境界は、実装構造ではなく振る舞いに基づいているか。
4. テストは意味のある結果を観測しているか。
5. test double は、揮発性を下げるか、意味のある境界通信を検証するために使われているか。
6. テストは読みやすく、直線的で、保守コストが低いか。
7. テストしにくいコードは設計変更を示していないか。

## 指摘

問題を報告するときは次を含める。

- 違反しているルールまたは原則
- 具体的な保守リスクまたはリグレッションリスク
- 最小限の有効な修正方針
- 適用条件に関する前提

振る舞い、リファクタリング耐性、可読性、保守コストに影響しない限り、好みの問題を欠陥として扱わない。

## アンチパターン索引

| 症状                                         | 参照先                                               |
| -------------------------------------------- | ---------------------------------------------------- |
| helper call や call order を assert している | `observation-and-oracles.md`                         |
| stub を検証している                          | `observation-and-oracles.md`                         |
| テスト名が class や method name をなぞるだけ | `test-target-selection.md`, `test-construction.md`   |
| private access が必要になっている            | `test-target-selection.md`, `design-feedback.md`     |
| 本番 algorithm をテスト内に複製している      | `observation-and-oracles.md`, `test-construction.md` |
| domain behavior に大量の mock が必要         | `test-target-selection.md`, `design-feedback.md`     |
| 本番コードに test-only switch がある         | `design-feedback.md`                                 |

## 問題がない場合

blocking issue が見つからない場合は、その旨を明確に伝える。
不完全な文脈、未実行のテスト、不明確な本番契約など、信頼度に影響する場合だけ残るリスクに触れる。
