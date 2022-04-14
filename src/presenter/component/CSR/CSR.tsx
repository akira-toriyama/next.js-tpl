import dynamic from "next/dynamic";
import type { Props } from "./SafeHydrate";

export const CSR = dynamic<Props>(
  () => import("./SafeHydrate").then((m) => m.SafeHydrate),
  { ssr: false }
);
