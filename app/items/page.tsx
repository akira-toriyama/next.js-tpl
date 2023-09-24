import type { NextPage } from "next";
import { match, P } from "ts-pattern";
import * as presenter from "~/ui/domain/items/presenter";
import * as repository from "~/ui/domain/items/repository";

// const Page: NextPage = () =>
//   repository.fetchAll().then((r) =>
//     match(r)
//       .with({ items: P.nullish }, () => <presenter.Empty />)
//       .with({ items: P.not(P.nullish) }, (rr) => <presenter.Items {...rr} />)
//       .exhaustive(),
//   );

const Page: NextPage = () => (
  <>
    <div>
      <h1>About Page</h1>
    </div>
  </>
);

export default Page;
