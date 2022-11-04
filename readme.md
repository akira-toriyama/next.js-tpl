# Next.js template

## usage

### start

install
https://github.com/asdf-vm/asdf

```bash
mv .env.example .env
mv _server/grphqlServer/schema.graphql.example _server/grphqlServer/schema.graphql
direnv allow
yarn
```

### develop

```bash
yarn mockServer
yarn generate:fromGQL
yarn dev

open "http://localhost:4000/graphql"
open "http://localhost:4000/voyager"
open "http://localhost:3000"
```

### design system

```bash
yarn designSystem
open "http://localhost:6006"
```

### generate component

```bash
# Please git commit in advance.
yarn generate:ui/general
yarn generate:ui/feature
```

## feature
