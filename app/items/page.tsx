import type { NextPage } from "next";
// import { match, P } from "ts-pattern";
import * as presenter from "~/ui/domain/items/presenter";
import * as repository from "~/ui/domain/items/repository";
import { headers } from "next/headers";

export const dynamic = "force-dynamic";
export const revalidate = 0;
// export const fetchCache = "force-no-store";
export const fetchCache = "only-no-store";

// const Page: NextPage = () =>
//   repository.fetchAll().then((r) =>
//     match(r)
//       .with({ items: P.nullish }, () => <presenter.Empty />)
//       .with({ items: P.not(P.nullish) }, (rr) => <presenter.Items {...rr} />)
//       .exhaustive(),
//   );

// export default Page;

// const f = cache(() => repository.fetchAll());
const f = async () => {
  // "use server";
  // headers();
  const r = await repository.fetchAll();
  return r;
};

const Page: NextPage = async () => {
  const r = await f();

  if (r.items == null) {
    return <presenter.Empty />;
  }

  return <presenter.Items {...r} />;
};

export default Page;
