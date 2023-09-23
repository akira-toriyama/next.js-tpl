"use client";

import type { NextPage } from "next";
// import { match, P } from "ts-pattern";
import * as presenter from "~/ui/domain/item/detail/presenter";
import * as repository from "~/ui/domain/item/_/repository";
import { use } from "react";

// export const dynamic = "force-dynamic";
// export const revalidate = 0;
// export const fetchCache = "force-no-store";

// const Page: NextPage<{
//   params: { id: string };
// }> = async (props) =>
//   repository.fetchBy({ id: props.params.id }).then((r) =>
//     match(r)
//       .with({ item: P.nullish }, () => <presenter.Empty />)
//       .with({ item: P.not(P.nullish) }, (rr) => (
//         <presenter.ItemDetail {...rr} />
//       ))
//       .exhaustive(),
//   );

// export default Page;

const Page: NextPage<{ params: { id: string } }> = (props) => {
  const r = use(repository.fetchBy({ id: props.params.id }));

  if (r.item == null) {
    return <presenter.Empty />;
  }

  return <presenter.ItemDetail {...{ item: r.item }} />;
};

export default Page;
