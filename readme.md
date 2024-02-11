# Next.js template

[App](https://next-js-tpl-app.vercel.app/)  
**Hygraph**に登録しているデータを表示しています。

[Design system](https://next-js-tpl.vercel.app/)

## 使用方法

### 必要なライブラリ

- [asdf](https://github.com/asdf-vm/asdf)
- [docker](https://docs.docker.com)

### 最初に

環境変数や、mock のスキーマなどの準備をします。
`.env.example`にある、`SCHEMA_DOWNLOAD_URL`は、**Hygraph**のリソースの URL です。開発時は、個人で準備してください。 動作確認用に公開しています。

```bash
mv .env.example .env
mv _server/graphqlServer/schema.graphql.example _server/graphqlServer/schema.graphql
direnv allow
pnpm install
```

### 開発

開発時は、モックサーバと通信しながら開発します。

```bash
pnpm run mockServer
pnpm run generate:fromGQL
pnpm run dev

open "http://localhost:4000/graphql"
open "http://localhost:4000/voyager"
open "http://localhost:3000"
```

### デザインシステム

`storybook` が有名ですが、`ladle` を使用しています。

```bash
pnpm run designSystem
open "http://localhost:6006"
```

### スナップショット更新

`stories.tsx`を追加や更新時時にスナップショットを更新します。

```bash
pnpm run updateSnapshot
```

## 開発フロー

**main** ブランチにプルリクをだすと、GitHub Actions が実行されます。([例](https://github.com/akira-toriyama/next.js-tpl/pull/883))  
型チェック, lint, 未使用コードの検出, スナップショットなどを実行します。プルリク単位で、App と Design system も公開されます。

## ディレクトリ構成

src/ 配下 UI以外の処理も配置されます。
下記のような構成だと、主語がなくわかりづらいです。スケールもしづらいです。

### Bad

- src/style
  - なんのstyle?
- src/gql
  - なぜstyleと、外部通信用のクライアントが並列にあるのか？

### Good

- src/ui/style
- src/infra/gql

## 特徴

### mock server

開発時は、実際のリソースと通信する必要はありません。\_server/graphqlServer/mocks.ts に都合の良いデータを返す[モック](https://www.the-guild.dev/graphql/tools/docs/mocking)を準備してください。

すべてがこのルールにあてはまりませんが、src/ui/domain/に関心事をすべて実装してください。

### tsx

テストしやすいコンポーネントにしてください。
[eslint-plugin-use-encapsulation](https://github.com/kyleshevlin/eslint-plugin-use-encapsulation)を参考にしてください。

```tsx
# Bad

const Cat: React.FC = () => {
  const [v, setV] = useState("たま");

  return <>猫の名前{v}</>;
};
```

```tsx
# Good

type Props = {
  name: string
};

type UseCat = () => Props;
const useCat: UseCat = () => {
  const [v, setV] = useState("たま");

  return {
    name: v,
  };
};

const CatComponent: React.FC<Props> = (props) => {
  return <>猫の名前{props.name}</>;
};

const Cat: React.FC = () => <CatComponent {...useCat()} />
```

### テスト

単体テストをしっかり書いてください。`import`しているファイルの処理を知りすぎてテストを書かないでください。

### 状態

[`ts-pattern`](https://github.com/gvergnaud/ts-pattern) や、型の絞り込み、状態が増えた場合などを考慮すると、`isXxx`よりは、`__tag`のほうが Typescript や SPA と相性が良いです。  
[例](https://www.typescriptlang.org/play?ssl=32&ssc=1&pln=33&pc=1#code/C4TwDgpgBAQghgEwAoCcD2YDOUC8UDeAUFFAJaYAyaipAdgOYBcUARmmgDYRy0DcxZTAGUArgGMxETJmZtO3PgIRxgcZpmAo69KAB8otERw78Avv0Ji0tDa0QAxWrigAKMM3jJ0WAJS4AfAQCpABmrmAAdORUNAx+RCQkAPRJJAAqABYQKNCYGWhGCAZowKzQyqoRAsmpMCKlGloMegZGHNVQkRVw-IlQKVAAegD8AqaEwWFuUcLiktLxHQOZ2bn5hWVQ3VV9A3UNmtothsYdXSo9S6kjY4TmE6CQUADi7F4Y2DgC+gl9UAD6-1UTCgACIONQENpQb0-t1mCcTB1xiQfh0SIDgcxQZg5lJMDD0VsLupDgxYSR7pZrLZ6G9HM43MxXmh3r4AkESKFwhFMXAdDhBWCIbF6KDFrtUt1BK1Tn1zqoKf1rqNKRMuVNInyBUKcXjpOLOYkBtLyFBGtozhFukqBjc1fcgA)

```ts
# Bad

const toProps = (p) => {
  if (p === "loading") {
    return {
      isLoading: true,
    };
  }

  return {
    isSuccess: true,
  };
};
```

```ts
# Good

const toProps = (p) => {
  if (p === "loading") {
    return {
      __tag: "loading",
    } as const;
  }

  return {
    __tag: "success",
  } as const;
};
```

WIP
