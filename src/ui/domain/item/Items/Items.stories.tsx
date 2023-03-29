import * as itemList from "./Items";

export const Success: React.FC = () => (
  <itemList.Success
    {...{
      __tag: "success",
      selectors: [...Array(3)].map((_, i) => ({
        title: `タイトル${i}`,
        id: `${i}`,
      })),
    }}
  />
);

export const Empty: React.FC = () => <itemList.Empty />;
export const Loading: React.FC = () => <itemList.Loading />;
export const Failure: React.FC = () => <itemList.Failure />;

export const Snapshot: React.FC = () => (
  <>
    <Success />
    <Empty />
    <Loading />
    <Failure />
  </>
);
