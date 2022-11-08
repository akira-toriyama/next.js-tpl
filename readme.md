# Next.js template

開発を始めやすいように、開発を勧めやすいように等を目的として作りました。

[App](https://next-js-tpl-62l80d57r-akira-toriyama.vercel.app/)  
**Hygraph**に登録しているデータを表示しています。

[Design system](https://next-js-tpl-designsystem-1cq9u10a7-akira-toriyama.vercel.app)  
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
yarn
```

### 開発

開発時は、モックサーバと通信しながら開発します。

```bash
yarn mockServer
yarn generate:fromGQL
yarn dev

open "http://localhost:4000/graphql"
open "http://localhost:4000/voyager"
open "http://localhost:3000"
```

### デザインシステム

`storybook` が有名ですが、`ladle` を使用しています。

```bash
yarn designSystem
open "http://localhost:6006"
```

### コンポート生成

`hygen`でコンポートを生成します。

```bash
# Please git commit in advance.

yarn generate:ui/general
yarn generate:ui/domain
```

### スナップショット更新

`stories.tsx`を追加や更新時時にスナップショットを更新します。

```bash
# It takes time.

yarn updateSnapshot
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
