import React from "react";

const isServer = () => typeof window === "undefined";
export type Props = {
  children: React.ReactNode;
};
export const SafeHydrate: React.FC<Props> = (props) =>
  isServer() ? null : <>{props.children}</>;
