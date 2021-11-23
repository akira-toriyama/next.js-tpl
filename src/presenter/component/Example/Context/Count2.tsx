/* istanbul ignore file */
// jscpd:ignore-start
import React, { useState, useContext } from "react";

type CntType = {
  i: number;
};
const Count2StateContext = React.createContext<CntType>({ i: 0 });
const Count2DispatchContext = React.createContext<
  React.Dispatch<React.SetStateAction<CntType>>
>(() => undefined);

/**
 * stateとdispatchを分割する事でdispatch分の再レンダリングをが軽くなる
 */
export const Count2Provider: React.FC = (props) => {
  const [state, dispatch] = useState<CntType>({ i: 0 });

  return (
    <Count2StateContext.Provider value={state}>
      <Count2DispatchContext.Provider value={dispatch}>
        {props.children}
      </Count2DispatchContext.Provider>
    </Count2StateContext.Provider>
  );
};

export const Count2: React.VFC = () => {
  console.log("Count2"); // 検証用
  const { i } = useContext(Count2StateContext);
  return <p>cnt2: {i}</p>;
};

export const Counter2: React.VFC = () => {
  console.log("Counter2"); // 検証用
  const dispatch = useContext(Count2DispatchContext);
  return (
    <>
      <button onClick={() => dispatch((p) => ({ i: p.i - 1 }))}>-</button>
      <button onClick={() => dispatch((p) => ({ i: p.i + 1 }))}>+</button>
    </>
  );
};
// jscpd:ignore-end
