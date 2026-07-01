# ルールカード

このファイルは、ルールを追加、修正、削除するときの作業台帳として使う。

## テンプレート

| 項目          | 説明                                                                           |
| ------------- | ------------------------------------------------------------------------------ |
| Rule ID       | ルールを識別する安定した ID。                                                  |
| Summary       | ルールの要旨を 1〜2 文で書く。                                                 |
| Layer         | Foundation / Target Selection / Observation / Construction / Design Feedback。 |
| Priority      | Essential / Recommended / Suggested。                                          |
| Destination   | そのルールを保持する参照ファイル。                                             |
| Applicability | そのルールが適用される場面。                                                   |
| Trade-offs    | ルールのコストや、例外を認める条件。                                           |
| Sources       | 出典や、プロジェクトで得た知見。                                               |
| Status        | Adopted / Pending / Rejected / Superseded。                                    |
| Notes         | 重複候補、未解決事項、移行メモ。                                               |

## 初期カード

| Rule ID    | Summary                                                                    | Layer            | Priority    | Destination                             | Applicability                  | Trade-offs                                                   | Sources  | Status  | Notes        |
| ---------- | -------------------------------------------------------------------------- | ---------------- | ----------- | --------------------------------------- | ------------------------------ | ------------------------------------------------------------ | -------- | ------- | ------------ |
| UT-FND-001 | 単体テストは、テスト数の最大化ではなく、持続可能な変更を支えるべきである。 | Foundation       | Essential   | `references/foundations.md`             | 単体テスト全般。               | 価値の低いテストは改善するか削除する。                       | Khorikov | Adopted | 初期ルール。 |
| UT-TGT-001 | テスト対象の単位は、クラス構造ではなく振る舞いで決める。                   | Target Selection | Essential   | `references/test-target-selection.md`   | テスト境界を決める場面。       | 1 つの振る舞いが複数クラスにまたがることはある。             | Khorikov | Adopted | 初期ルール。 |
| UT-OBS-001 | 実装詳細より、観察可能な結果を優先して検証する。                           | Observation      | Essential   | `references/observation-and-oracles.md` | 検証方法を選ぶ場面。           | 境界依存との相互作用ではモックが必要になることがある。       | Khorikov | Adopted | 初期ルール。 |
| UT-CNS-001 | テストは Arrange、Act、Assert を軸に構成する。                             | Construction     | Recommended | `references/test-construction.md`       | 多くの単体テスト。             | ごく小さなテストでは区切りコメントが不要なこともある。       | Khorikov | Adopted | 初期ルール。 |
| UT-DFB-001 | 価値のある振る舞いがテストしにくい場合は、設計フィードバックとして扱う。   | Design Feedback  | Recommended | `references/design-feedback.md`         | テスタビリティを議論する場面。 | テストしにくさの原因が、常にドメイン設計にあるとは限らない。 | Khorikov | Adopted | 初期ルール。 |
