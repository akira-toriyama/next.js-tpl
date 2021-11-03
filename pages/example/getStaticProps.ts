import type { GetStaticProps } from "next";
import type { StaticProps } from "./type";

export const getStaticProps: GetStaticProps<StaticProps> = () => ({
  props: {
    name: "getStaticProps Value",
  },
});
