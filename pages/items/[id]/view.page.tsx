import type { NextPage } from "next";
import { ItemView } from "~/ui/domain/item/detail/ItemView";
import { isValidParam } from "~/ui/domain/item/detail/common/service";
import type { OuterProps } from "~/ui/domain/item/detail/common/common.type";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps<OuterProps> = async (
  ctx
) => {
  if (isValidParam(ctx.query)) {
    return {
      props: { id: ctx.query.id },
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
