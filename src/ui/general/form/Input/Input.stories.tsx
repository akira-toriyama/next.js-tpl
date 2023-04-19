import * as input from "./Input";

export const Input: React.FC = () => (
  <>
    <input.Input
      {...{
        id: "id",
        type: "text",
        placeholder: "placeholder",
        defaultValue: "defaultValue",
        wrapper: {
          error: {
            messages: ["エラー1", "エラー2"],
          },
          helper: {
            texts: ["ヘルプテキスト1", "ヘルプテキスト2"],
          },
          label: "ラベル",
          required: true,
        },
      }}
    />
  </>
);

export const Snapshot: React.FC = () => <Input />;
