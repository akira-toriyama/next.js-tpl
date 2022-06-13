import type { GetStaticProps } from "next";
import * as repository from "~/useCase/user/repository";
import * as workFlow from "~/useCase/user/workFlow";
import * as Entity from "~/domain/user/Entity";

export const getStaticProps: GetStaticProps<Entity.UIData> = () =>
  workFlow
    .fetchUser({
      repository: {
        ...repository,
      },
    })()
    .then((v) => ({
      props: v,
    }));
