import type { NextPage } from "next";
import { ItemView } from "~/ui/domain/item/detail/ItemView";
import { parameterSchema } from "~/ui/domain/item/detail/common/service";
import type { OuterProps } from "~/ui/domain/item/detail/common/common.type";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps<OuterProps> = async (
  ctx
) => {
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

const Page: NextPage<OuterProps> = (props) => <ItemView {...props} />;

export default Page;
