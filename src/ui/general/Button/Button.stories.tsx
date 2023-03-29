import * as button from "./Button";

export const Button: React.FC = () => (
  <button.Button {...{ children: "button" }} />
);

export const Snapshot: React.FC = () => <Button />;
