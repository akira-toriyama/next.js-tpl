import * as itemEdit from "./ItemEdit";

export const Success: React.FC = () => (
  // @ts-expect-error -- これで十分
  <itemEdit.Success
    {...{
      __tag: "success",
      selectors: {
        id: "id",
        ids: {
          title: "title",
          body: "body",
        },
        errorMessages: {
          title: ["errorMessages.title", "errorMessages.title2"],
          body: ["errorMessages.body", "errorMessages.body2"],
        },
      },
      operations: {
        onSubmit: () => null,
      },
      form: {
        handleSubmit: () => null,
        register: () => null,
      },
    }}
  />
);

export const Empty: React.FC = () => <itemEdit.Empty />;
export const Loading: React.FC = () => <itemEdit.Loading />;
export const Failure: React.FC = () => <itemEdit.Failure />;

export const Snapshot: React.FC = () => (
  <>
    <Success />
    <Empty />
    <Loading />
    <Failure />
  </>
);
