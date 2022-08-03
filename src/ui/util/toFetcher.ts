import * as Struct from "~/domain/core/Struct";

export const toFetcher =
  <T extends Struct.UIDataStruct>(p: { fetcher: () => Promise<T> }) =>
  async () => {
    const r = await p.fetcher();
    return r.__type === "error" ? Promise.reject<typeof r>(r) : r;
  };
