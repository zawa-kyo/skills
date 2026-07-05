# 実装

## 設計したケースを実装する

Priority: Essential。
Trade-off: 同じ振る舞い重視の意図を保てるなら、ローカルなテストフレームワークの慣習に従う。

設計したケースを実装する。
フレームワークやモックツールの都合で、テストが守るべき振る舞いを変えない。

コードがテストしにくい場合は、本番モデルも改善するリファクタリングを検討する。
本番の振る舞いを弱めるテスト専用の逃げ道を追加しない。

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
Trade-off: 非常に短いテストでは、構造が明らかなら区切りコメントは不要である。

テストは Arrange、Act、Assert で構成する。

- Arrange: 入力、依存関係、開始状態を準備する。
- Act: 振る舞いを1回実行する。
- Assert: 外から確認できる結果を検証する。

1つのテストに複数の Arrange、Act、Assert の流れを入れない。
通常、それは複数の振る舞いを扱っていることを示す。

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
Trade-off: パラメータ化テストは、各ケースの入力と期待結果が明確なら妥当である。

単体テストは、単純で直線的に保つ。
テストのアサーションに `if`、`switch`、ループ、本番コードのようなロジックを入れない。

テストが本番コードに似たロジックで期待値を計算している場合、バグを検出するのではなく複製している可能性がある。

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
Trade-off: 共有しすぎたフィクスチャは、テストに必要な入力を隠し、テスト同士を結合する。

各テストが重要な値を明示して呼び出せるファクトリ関数やビルダーを優先する。
テストの前提が見えなくなる共有セットアップは避ける。

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

## テストのために本番コードを汚染しない

Priority: Essential。
Trade-off: テストしやすさのために設計を改善することは妥当である。テスト専用のスイッチや、外から変更できる状態を追加するのは避ける。

単体テストを通すためだけに、テスト専用の分岐、公開 setter、変更可能なグローバル状態、緩い契約を追加しない。
本番モデルも改善する設計変更を優先する。

## 実装結果の出力

実装結果を報告するときは、次を含める。

- 追加または変更したテスト
- テストしやすさのために行った本番コードのリファクタリング
- 各テストが守る振る舞い
- 実行したコマンドまたはチェック
- 結合境界が未テストであるなど、残るリスク
