# テスト設計

## コードを書く前に具体的なケースへ落とす

Priority: Essential。
Trade-off: ごく小さな純粋関数では、設計は短くてよい。それでも、アサーションを選ぶ前に振る舞いと期待結果を特定する。

戦略を具体的なテストケースへ落とす。
各ケースでは、振る舞い、重要な入力または前提、外から確認できる期待結果を明確にする。

実装分岐を網羅的になぞるより、意味のある少数の例を優先する。

## 外から確認できる結果を優先する

Priority: Essential。
Trade-off: システム境界では相互作用の検証が必要な場合もある。

戻り値、外から見える状態、発行されたドメインイベントなど、振る舞いの意味を表す結果を優先して検証する。

中間状態、非公開アルゴリズム、呼び出し順、補助メソッドの呼び出しを検証しない。
ただし、それ自体が外部に見せている仕様なら例外になる。

外から確認できる結果の例を示す。

```typescript
const result = applyCoupon(cart, expiredCoupon, now);

expect(result).toEqual({
  accepted: false,
  reason: "coupon_expired",
  total: cart.total,
});
```

このアサーションは、外部に意味のある結果を表している。
`applyCoupon` が1つの補助メソッドを使ったか、複数の補助メソッドを使ったかには依存しない。

## スタブを検証しない

Priority: Essential。
Trade-off: 1つのテストダブルがスタブとモックの両方の役割を持つ場合もある。その場合でも、振る舞いとして重要な出力側だけを検証する。

スタブとの相互作用をアサーションしない。
スタブはテスト対象に入力を与えるものであり、どう問い合わせたかを検証すると実装詳細の検証になりやすい。

```typescript
const rates: ExchangeRateProvider = {
  rateFor: () => 150,
};

const result = convertToJpy(Money.usd(10), rates);

expect(result).toEqual(Money.jpy(1500));
// rateFor が1回呼ばれたことは、その呼び出し自体が契約でない限り検証しない。
```

## 重要な境界通信だけをモックする

Priority: Essential。
Trade-off: アダプタコードでは、重いモックを使う単体テストより、結合テストで扱う選択もある。

送信、イベント発行、管理外の依存先呼び出しなど、システム境界で意味を持つ通信を検証するときにモックを使う。

普通のドメイン協力オブジェクトを、1クラスずつテストするためだけにモックしない。

```typescript
const emailGateway = { send: vi.fn() };

completeSignup(user, emailGateway);

expect(emailGateway.send).toHaveBeenCalledWith(
  user.email,
  expect.objectContaining({ template: "welcome" }),
);
```

このような相互作用検証が有効なのは、メール送信がユースケースの外から観察できる副作用である場合だけである。
同じ書き方で、通常のドメインオブジェクト同士の呼び出しを検証しない。

## 非公開の詳細を直接テストしない

Priority: Recommended。
Trade-off: 非公開ロジックが複雑で価値を持つなら、内部を公開しない。外から使える仕様を持つ概念として抽出する。

非公開の振る舞いは、外から確認できる公開された振る舞いを通じてテストする。
非公開要素を直接テストすると、実装詳細に結び付き、リファクタリングしにくくなりやすい。

## ケース設計の出力

各テストケースについて、次を示す。

- 振る舞い名
- 前提または入力
- 実行する操作
- 外から確認できる期待結果
- テストダブルを使う場合の役割: スタブ、フェイク、スパイ、モック
- そのケースに価値がある理由
