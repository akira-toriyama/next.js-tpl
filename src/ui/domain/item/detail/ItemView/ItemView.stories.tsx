import * as itemView from "./ItemView";

export const Success: React.FC = () => (
  <itemView.Success
    {...{
      __tag: "success",
      selectors: { id: "", title: "title", body: "body" },
    }}
  />
);

export const Empty: React.FC = () => <itemView.Empty />;
export const Loading: React.FC = () => <itemView.Loading />;
export const Failure: React.FC = () => <itemView.Failure />;

export const Snapshot: React.FC = () => (
  <>
    <Success />
    <Empty />
    <Loading />
    <Failure />
  </>
);
