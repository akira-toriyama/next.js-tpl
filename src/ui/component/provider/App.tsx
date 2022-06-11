import React, { createContext } from "react";

export type State = object;

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const AppContext = createContext<State>(null);

export const App: React.FC<{ children: React.ReactNode }> = (props) => (
  <AppContext.Provider value={null}>{props.children}</AppContext.Provider>
);
