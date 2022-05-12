import React from "react";
import { useExample } from "./useExample";
import type { Props } from "./Example.type";

export const ExampleComponent: React.FC<Props> = (props) => (
  <>
    {props.isSome && <>some</>}
    <div data-testid="Example">Example</div>
  </>
);

export const Example: React.FC = () => <ExampleComponent {...useExample()} />;
