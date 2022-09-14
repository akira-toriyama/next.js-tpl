import { createContext } from "react";

export type State = object;

export const AppContext = createContext<State>(null);

export const App: React.FC<{ children: React.ReactNode }> = (props) => (
  <AppContext.Provider value={null}>{props.children}</AppContext.Provider>
);
