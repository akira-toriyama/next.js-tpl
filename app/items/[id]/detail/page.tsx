import type { NextPage } from "next";
// import { match, P } from "ts-pattern";
import * as presenter from "~/ui/domain/item/detail/presenter";
import * as repository from "~/ui/domain/item/_/repository";

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

const Page: NextPage<{ params: { id: string } }> = async (props) => {
  const r = await repository.fetchBy({ id: props.params.id });

  // if (r.item == null) {
  //   return <presenter.Empty />;
  // }

  // @ts-expect-error - x
  return <presenter.ItemDetail {...{ item: r.item }} />;
};

export default Page;

export const dynamic = "force-dynamic";
export const revalidate = 1;
// export const fetchCache = "force-no-store";
