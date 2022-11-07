# Next.js template

開発を始めやすいように必要なライブラリですなどを、インストール済です。
このアプリは、**Vercel**にデプロイしています。

## [App](https://next-js-tpl-62l80d57r-akira-toriyama.vercel.app/)

アプリケーション本体です。**Hygraph**に登録しているデータを表示しています。
一覧と詳細に相当するページを準備しています。このリポジトリはテンプレートなので、この程度の機能です。

## [Design system](https://next-js-tpl-designsystem-1cq9u10a7-akira-toriyama.vercel.app)

デザインシステムです。しかし、このリポジトリでは、スタイルを使用していません。
**React**は、**css in js**, **css module**, **コンポート ライブラリ**, など様々なスタイル適用方法があります。適切な物を使用してください。
src/ui/general/配下に汎用的なコンポートを配置しています。そこにスタイルを適用してください。

## 使用方法

### 必要なライブラリ

- [asdf](https://github.com/asdf-vm/asdf)
- [docker](https://docs.docker.com)

### 最初に

```bash
mv .env.example .env
mv _server/grphqlServer/schema.graphql.example _server/grphqlServer/schema.graphql
direnv allow
yarn
```

### 開発

```bash
yarn mockServer
yarn generate:fromGQL
yarn dev

open "http://localhost:4000/graphql"
open "http://localhost:4000/voyager"
open "http://localhost:3000"
```

### デザインシステム

```bash
yarn designSystem
open "http://localhost:6006"
```

### コンポート生成

```bash
# Please git commit in advance.

yarn generate:ui/general
yarn generate:ui/domain
```

### スナップショット更新

```bash
# It takes time.

yarn updateSnapshot
```

## ディレクトリ構成とアーキテクチャ

### src/infra

データの保存処理などの、クライアントを配置しています。

### src/ui

#### src/ui/domain

特定の機能を提供します。

#### src/ui/domain/-/coLocation

**DAO**や、**GQL**などを配置しています。UI と密結合ですが、src/infra に配置するより管理しやすいです。

#### src/ui/domain/-/component

コンポートを配置しています。すべてプレゼンテーショナルコンポートにしている為`.stories.tsx`も配置しています。
[eslint-plugin-use-encapsulation](https://github.com/kyleshevlin/eslint-plugin-use-encapsulation)のルールに従っています。
コンポート内で if をあまり使用せず、状態に応じたコンポートを準備しています。
[UI Stack](https://www.scotthurff.com/posts/why-your-user-interface-is-awkward-youre-ignoring-the-ui-stack/)に近い構成です。

#### src/ui/domain/-/hook

**React** の **hook** を配置しています。[eslint-plugin-use-encapsulation](https://github.com/kyleshevlin/eslint-plugin-use-encapsulation)のルールに従っています。
**hook**に、ロジックを直接書いていません。テスタビリティを考慮しています。

#### src/ui/general

汎用的なコンポートです。

#### src/util/tag

`ts-pattern`と組み合わせて使用します。
