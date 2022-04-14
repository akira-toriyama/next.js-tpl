import React from "react";
import { useExample } from "./useExample";
import type { Props } from "./Example.type";
import classes from "./Example.module.css";

export const ExampleComponent: React.FC<Props> = (props) => (
  <>
    {props.isSome && <>some</>}
    <div data-testid="Example" className={classes.txt}>
      Example
    </div>
  </>
);

export const Example: React.FC = () => <ExampleComponent {...useExample()} />;
