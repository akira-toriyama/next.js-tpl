import type { NextPage } from "next";
import { ItemEdit } from "~/ui/domain/item/detail/ItemEdit";
import { GetServerSideProps } from "next";
import { parameterSchema } from "~/ui/domain/item/detail/common/service";
import type * as commonType from "~/ui/domain/item/detail/common/common.type";

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
  <ItemEdit {...props} />
);

export default Page;
