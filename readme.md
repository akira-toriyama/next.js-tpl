# Next.js template

- Design system
  - https://next-js-tpl-designsystem-1cq9u10a7-akira-toriyama.vercel.app/
- Headless CMS
  - https://app.hygraph.com

## usage

### install

- https://github.com/asdf-vm/asdf
  - https://github.com/akira-toriyama/next.js-tpl/blob/main/.tool-versions
- https://docs.docker.com/engine/install/

### start

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

### update snapshot

```bash
# It takes time.

docker run --env-file=".env" --rm --network host -v $(pwd):/work/ -w /work/ -it mcr.microsoft.com/playwright /bin/bash
yarn updateSnapshot
```
