import type { NextPage } from "next";
import { View, isValidParam } from "~/ui/domain/View";
import type { OuterProps } from "~/ui/domain/View";
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

const Page: NextPage<OuterProps> = (props) => <View {...props} />;

export default Page;
