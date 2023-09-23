import type { NextPage } from "next";
import { match, P } from "ts-pattern";
import * as presenter from "~/ui/domain/item/edit/presenter";
import * as repository from "~/ui/domain/item/_/repository";

const Page: NextPage<{ params: { id: string } }> = async (props) =>
  repository.fetchBy({ id: props.params.id }).then((r) =>
    match(r)
      .with({ item: P.nullish }, () => <presenter.Empty />)
      .with({ item: P.not(P.nullish) }, (rr) => <presenter.ItemEdit {...rr} />)
      .exhaustive()
  );

export default Page;
