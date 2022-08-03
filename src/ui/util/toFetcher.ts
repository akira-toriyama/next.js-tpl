import * as Struct from "~/domain/core/Struct";

export const toFetcher = async <T extends Struct.UIDataStruct>(p: {
  fetcher: () => Promise<T>;
}) => {
  const r = await p.fetcher();
  return r.__type === "error" ? Promise.reject<typeof r>(r) : r;
};
