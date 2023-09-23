"use client";

import type { NextPage } from "next";
// import { match, P } from "ts-pattern";
import * as presenter from "~/ui/domain/items/presenter";
import * as repository from "~/ui/domain/items/repository";
import { use } from "react";

// export const dynamic = "force-dynamic";
// export const revalidate = 0;
// export const fetchCache = "force-no-store";

// const Page: NextPage = () =>
//   repository.fetchAll().then((r) =>
//     match(r)
//       .with({ items: P.nullish }, () => <presenter.Empty />)
//       .with({ items: P.not(P.nullish) }, (rr) => <presenter.Items {...rr} />)
//       .exhaustive(),
//   );

// export default Page;

const Page: NextPage = () => {
  const r = use(repository.fetchAll());

  if (r.items == null) {
    return <presenter.Empty />;
  }

  return <presenter.Items {...r} />;
};

export default Page;
