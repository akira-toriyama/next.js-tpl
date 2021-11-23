// jscpd:ignore-start
import React, { useState, useContext } from "react";

type CntType = {
  i: number;
};
const CountStateContext = React.createContext<CntType>({ i: 0 });
const CountDispatchContext = React.createContext<
  React.Dispatch<React.SetStateAction<CntType>>
>(() => undefined);

/**
 * stateとdispatchを分割する事でdispatch分の再レンダリングをが軽くなる
 */
export const CountProvider: React.FC = (props) => {
  const [state, dispatch] = useState<CntType>({ i: 0 });

  return (
    <CountStateContext.Provider value={state}>
      <CountDispatchContext.Provider value={dispatch}>
        {props.children}
      </CountDispatchContext.Provider>
    </CountStateContext.Provider>
  );
};

export const Count: React.VFC = () => {
  console.log("Count"); // 検証用
  const { i } = useContext(CountStateContext);
  return <p>cnt: {i}</p>;
};

export const Counter: React.VFC = () => {
  console.log("Counter"); // 検証用
  const dispatch = useContext(CountDispatchContext);
  return (
    <>
      <button onClick={() => dispatch((p) => ({ i: p.i - 1 }))}>-</button>
      <button onClick={() => dispatch((p) => ({ i: p.i + 1 }))}>+</button>
    </>
  );
};
// jscpd:ignore-end
