# Next.js template

- [App](https://next-js-tpl-62l80d57r-akira-toriyama.vercel.app/)
- [Design system](https://next-js-tpl-designsystem-1cq9u10a7-akira-toriyama.vercel.app)

## Usage

### Install

- [asdf](https://github.com/asdf-vm/asdf)
- [docker](https://docs.docker.com)

### First

```bash
mv .env.example .env
mv _server/grphqlServer/schema.graphql.example _server/grphqlServer/schema.graphql
direnv allow
yarn
```

### Develop

```bash
yarn mockServer
yarn generate:fromGQL
yarn dev

open "http://localhost:4000/graphql"
open "http://localhost:4000/voyager"
open "http://localhost:3000"
```

### Design system

```bash
yarn designSystem
open "http://localhost:6006"
```

### Generate component

```bash
# Please git commit in advance.

yarn generate:ui/general
yarn generate:ui/feature
```

### Update snapshot

```bash
# It takes time.

yarn updateSnapshot
```
