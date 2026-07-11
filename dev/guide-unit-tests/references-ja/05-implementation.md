# 実装

## 設計したケースを実装する

Priority: Essential。
Trade-off: 同じ振る舞い重視の意図を保てるなら、ローカルなテストフレームワークの慣習に従う。

設計したケースを実装する。
フレームワークやモックツールの都合で、テストが守るべき振る舞いを変えない。

コードがテストしにくい場合は、リファクタリングも検討の対象に含める。
テスト専用の getter を追加するなど、本質的ではない修正をしてはならない。
テスタブルでないコードは、必ず設計的な誤りが存在する。

## 振る舞いでテスト名を付ける

Priority: Recommended。
Trade-off: 既存のローカル命名規約が振る舞いを明確に伝えているなら、それに従う。

読んだ人が、振る舞いと期待される結果を理解できる名前にする。
メソッド名や実装構造を繰り返すだけの名前は避ける。

シナリオとして読める名前を優先する。

```typescript
it("rejects an expired coupon without changing the cart total", () => {
  // ...
});
```

`applyCoupon_returns_false` のようにコード構造だけをなぞる名前は避ける。

## AAA を使う

Priority: Recommended。
Trade-off: 非常に短いテスト、かつ構造が明らかなら区切りコメントは不要である。

テストは Arrange、Act、Assert で構成する。

| フェーズ | 役割                                 |
| -------- | ------------------------------------ |
| Arrange  | 入力、依存関係、開始状態を準備する。 |
| Act      | 振る舞いを1回実行する。              |
| Assert   | 外から確認できる結果を検証する。     |

1つのテストに複数の Arrange、Act、Assert の流れを入れない。
それは複数の振る舞いを扱っていることを示しており、単体テストとしては不適である。

```typescript
it("rejects an expired coupon without changing the cart total", () => {
  const cart = aCart({ total: Money.usd(40) });
  const coupon = aCoupon({ expiresAt: new Date("2026-01-01") });

  const result = applyCoupon(cart, coupon, new Date("2026-02-01"));

  expect(result).toEqual({
    accepted: false,
    reason: "coupon_expired",
    total: Money.usd(40),
  });
});
```

このテストでは、振る舞いの実行は1回だけで、外から意味を確認できる結果をアサートしている。

## テストを直線的に保つ

Priority: Recommended。
Trade-off: パラメータ化テストは、各テストケースの入力と期待結果が明確なら妥当である。

単体テストは、シンプルで分岐のないコードであるべきである。
テストのアサーションに `if`、`switch`、ループ、プロダクションコードのようなロジックを入れない。

テストがプロダクションコードに似たロジックで期待値を計算している場合、バグを検出するのではなく複製している可能性がある。

パラメータ化テストは、例だけが変わる場合に向いている。

```typescript
it.each([
  [0, false],
  [5, false],
  [6, true],
])("treats length %i as long: %s", (length, expected) => {
  expect(isLong("x".repeat(length))).toBe(expected);
});
```

行ごとに異なる分岐、モック、期待値計算が必要になる場合は、パラメータ化せず、名前付きのシナリオに分ける。

## セットアップは明示的に再利用する

Priority: Suggested。
Trade-off: フィクスチャを過度に共有してしまうと、テストに必要な入力を隠し、テスト同士を結合させてしまう。

各テストが重要な値を明示して呼び出せるファクトリ関数やビルダーを優先する。
テストの前提が見えなくなるセットアップは避ける。

```typescript
function aCoupon(overrides: Partial<Coupon> = {}): Coupon {
  return {
    code: "SAVE10",
    discountPercent: 10,
    expiresAt: new Date("2026-12-31"),
    ...overrides,
  };
}
```

テストは、シナリオにとって重要な値を明示して渡す。
デフォルト値は、有効だが関心を引かない値にする。

## テストのためにプロダクションコードを汚染しない

Priority: Essential。
Trade-off: テストしやすさのために設計を改善することは妥当である。テスト専用のスイッチや、外から変更できる状態を追加するのは避ける。

単体テストを通すためだけに、テスト専用の分岐、公開 setter、変更可能なグローバル状態、緩い契約を追加しない。
本番モデルも改善する設計変更を優先する。

## 実装結果の出力

実装結果を報告するときは、次を含める。
なお不要であったり冗長であると判断される場合は、省略してもよい。

- 追加または変更したテスト
- テストしやすさのために行ったプロダクションコードのリファクタリング
- 各テストが守るべき振る舞い
- 実行したコマンドまたはチェック
- 結合境界が未テストであるなど、残るリスク
