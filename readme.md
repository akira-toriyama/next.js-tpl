# Next.js template

[App](https://next-js-tpl-app.vercel.app/)  
**Hygraph**に登録しているデータを表示しています。

[Design system](https://next-js-tpl.vercel.app/)  
デザインシステムですが、スタイルを使用していません。  
**React**は、**css in js**, **css module**, **コンポート ライブラリ**, など様々なスタイル適用方法があり、ベストプラクティスがありません。アプリの内容などを考慮して、スタイルを検討してください。

## 使用方法

### 必要なライブラリ

- [asdf](https://github.com/asdf-vm/asdf)
- [docker](https://docs.docker.com)

### 最初に

環境変数や、mock のスキーマなどの準備をします。
`.env.example`にある、`SCHEMA_DOWNLOAD_URL`は、**Hygraph**のリソースの URL です。開発時は、個人で準備してください。 動作確認用に公開しています。

```bash
mv .env.example .env
mv _server/grphqlServer/schema.graphql.example _server/grphqlServer/schema.graphql
direnv allow
npm i --legacy-peer-deps
```

### 開発

開発時は、モックサーバと通信しながら開発します。

```bash
npm run mockServer
npm run generate:fromGQL
npm run dev

open "http://localhost:4000/graphql"
open "http://localhost:4000/voyager"
open "http://localhost:3000"
```

### デザインシステム

`storybook` が有名ですが、`ladle` を使用しています。

```bash
npm run designSystem
open "http://localhost:6006"
```

### コンポート生成

`hygen`でコンポートを生成します。

```bash
# Please git commit in advance.

npm run generate:ui/general
npm run generate:ui/domain
```

### スナップショット更新

`stories.tsx`を追加や更新時時にスナップショットを更新します。

```bash
# It takes time.

npm run updateSnapshot
```

## ディレクトリ構成

```bash
src
├── env.ts
├── infra # APIクライアントを配置しています。
│  └── graphql
│     ├── client.ts
│     ├── types.ts
│     └── util
│        ├── index.ts
│        ├── util.test.ts
│        └── util.ts
└── ui
   ├── domain
   │  └── item
   │     ├── Item
   │     │  ├── coLocation # DAO, GQLなどを配置しています。UI と密結合ですが、src/infra に配置するより管理しやすいです。
   │     │  │  ├── dao.ts
   │     │  │  ├── Item.gql.generated.ts
   │     │  │  └── Item.gql.ts
   │     │  ├── component
   │     │  │  ├── index.ts
   │     │  │  ├── Item.stories.tsx # すべてプレゼンテーショナルコンポートにしている為`.stories.tsx`も配置しています。
   │     │  │  ├── Item.test.tsx
   │     │  │  └── Item.tsx # eslint-plugin-use-encapsulationに準拠した実装しています。
   │     │  ├── hook # component用hook
   │     │  │  ├── index.ts
   │     │  │  ├── item.hook.test.ts
   │     │  │  ├── item.hook.ts
   │     │  │  └── service # hook用のロジックなどです。Reduxのreducerのような役目です。hookでは無いためテスタビリティが高いです。
   │     │  │     ├── index.ts
   │     │  │     ├── service.test.ts
   │     │  │     └── service.ts
   │     │  ├── index.ts
   │     │  └── Item.type.ts
   │     └── Items
   │        ├── coLocation
   │        │  ├── dao.ts
   │        │  ├── Items.gql.generated.ts
   │        │  └── Items.gql.ts
   │        ├── component
   │        │  ├── index.ts
   │        │  ├── Items.stories.tsx
   │        │  ├── Items.test.tsx
   │        │  └── Items.tsx
   │        ├── hook
   │        │  ├── index.ts
   │        │  ├── items.hook.test.ts
   │        │  ├── items.hook.ts
   │        │  └── service
   │        │     ├── index.ts
   │        │     ├── service.test.ts
   │        │     └── service.ts
   │        ├── index.ts
   │        └── Items.type.ts
   ├── general # 汎用的なコンポートです。
   │  ├── Card
   │  │  ├── Card.stories.tsx
   │  │  ├── Card.test.tsx
   │  │  ├── Card.tsx
   │  │  └── index.ts
   │  └── List
   │     ├── index.ts
   │     ├── List.stories.tsx
   │     ├── List.test.tsx
   │     └── List.tsx
   ├── provider
   │  ├── ErrorBoundary.tsx
   │  ├── ReactQuery.tsx
   │  └── Wrapper.tsx
   └── util
      └── tag
         ├── index.ts
         ├── tag.test.ts
         └── tag.ts # ts-patternと合わせて使用します。
```

## 開発フロー

**main** ブランチにプルリクをだすと、GithubActions が実行されます。([例](https://github.com/akira-toriyama/next.js-tpl/pull/883))  
型チェック, lint, 未使用コードの検出, スナップショットなどを実行します。プルリク単位で、App と Design system も公開されます。

## 実装方針

### ディレクトリ構成

src/ 直下は、レイヤードアーキテクチャを参考にしています。Web アプリは外部と ほぼ必ず API 通信します。その処理をどこに実装するかを意識してください。
src/graphql, src/component などとすると技術駆動の構成になるため避けてください。

### mock server

開発時は、実際のリソースと通信する必要はありません。\_server/grphqlServer/mocks.ts に都合の良いデータを返す[モック](https://www.the-guild.dev/graphql/tools/docs/mocking)を準備してください。

### テンプレート

`npm run generate:ui/general`, `npm run generate:ui/domain`を使用し、基本的な実装を揃えてください。

### domain component

SPA は、UI とロジックや UI と保存処理が密結合になります。同名のディレクトリを準備せずに、拡張子やディレクトリ構成で役割を表現してください。

```
# Bad

src/graphql/animal/cat.gql.ts
src/component/animal/Cat.tsx
```

```
# Good

src/ui/domain/animal/cat/coLocation/cat.gql.ts
src/ui/domain/animal/cat/component/Cat.tsx
```

すべてがこのルールにあてはまりませんが、src/ui/domain/に関心事をすべて実装してください。

### tsx

テスト不能なコンポーネントを実装しないでください。
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

const useCat = () => {
  const [v, setV] = useState("たま");

  return {
    name: v,
  };
};

const Cat: React.FC = () => {
  const cat = useCat();

  return <>猫の名前{cat.name}</>;
};
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
