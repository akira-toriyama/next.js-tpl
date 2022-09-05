// 適切なディレクトリへ
export type SomeResponse = { id: string; name: string };
type FetchSome = () => Promise<SomeResponse>;
export const fetchSome: FetchSome = () =>
  Promise.resolve({ id: "1", name: "some" });
