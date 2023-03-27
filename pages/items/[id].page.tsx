import type { NextPage } from "next";
import { Item, isValidParam } from "~/ui/domain/Item";
import type { OuterProps } from "~/ui/domain/Item";
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

const Page: NextPage<OuterProps> = (props) => <Item {...props} />;

export default Page;
