// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Fn = (...arg: any) => any;
type UseMap = <Hook extends Fn>(p: {
  useHook: Hook;
}) => {
  map: <R>(fn: (p: ReturnType<Hook>) => R) => R;
  value: ReturnType<Hook>;
};

export const useMap: UseMap = ({ useHook }) => {
  const r = useHook();

  return {
    map: (f) => f(r),
    value: r,
  };
};
