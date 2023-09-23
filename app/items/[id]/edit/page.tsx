import type { NextPage } from "next";
// import { match, P } from "ts-pattern";
import * as presenter from "~/ui/domain/item/edit/presenter";
import * as repository from "~/ui/domain/item/_/repository";

// export const dynamic = "force-dynamic";
export const revalidate = 0;
// export const fetchCache = "force-no-store";
export const runtime = "edge";

// const Page: NextPage<{ params: { id: string } }> = async (props) =>
//   repository.fetchBy({ id: props.params.id }).then((r) =>
//     match(r)
//       .with({ item: P.nullish }, () => <presenter.Empty />)
//       .with({ item: P.not(P.nullish) }, (rr) => <presenter.ItemEdit {...rr} />)
//       .exhaustive()
//   );

// export default Page;

const Page: NextPage<{ params: { id: string } }> = async (props) => {
  const r = await repository.fetchBy({ id: props.params.id });

  // if (r.item == null) {
  //   return <presenter.Empty />;
  // }

  // @ts-expect-error - x
  return <presenter.ItemEdit {...{ item: r.item }} />;
};

export default Page;
