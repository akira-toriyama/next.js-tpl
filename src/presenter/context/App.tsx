import React, { createContext } from "react";
import { useMedia } from "react-use";

const device = {
  pc: "(min-width: 900px)",
} as const;

export type State = {
  media: "pc" | "sp";
};

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const AppContext = createContext<State>(undefined!);

type UseApp = () => State;
const useApp: UseApp = () => {
  return {
    media: useMedia(device.pc) ? "pc" : "sp",
  };
};

export const App: React.FC<{ children: React.ReactNode }> = (props) => (
  <AppContext.Provider value={{ ...useApp() }}>
    {props.children}
  </AppContext.Provider>
);
