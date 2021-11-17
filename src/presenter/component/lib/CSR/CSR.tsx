import dynamic from "next/dynamic";

export const CSR = dynamic<unknown>(
  () => import("./SafeHydrate").then((m) => m.SafeHydrate),
  { ssr: false }
);
