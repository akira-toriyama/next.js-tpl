import type { NextPage } from "next";
import { ItemView } from "~/ui/domain/item/detail/ItemView";
import { parameterSchema } from "~/ui/domain/item/detail/common/service";
import type * as commonType from "~/ui/domain/item/detail/common/common.type";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps<
  commonType.OuterProps
> = async (ctx) => {
  const r = parameterSchema.safeParse(ctx.query);

  if (r.success) {
    return {
      props: { id: r.data.id },
    };
  }

  return {
    redirect: {
      permanent: false,
      destination: "/",
    },
  };
};

const Page: NextPage<commonType.OuterProps> = (props) => (
  <ItemView {...props} />
);

export default Page;
