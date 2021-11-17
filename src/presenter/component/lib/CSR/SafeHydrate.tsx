import React from "react";

const isServer = () => typeof window === "undefined";

export const SafeHydrate: React.FC = (props) =>
  isServer() ? null : <>{props.children}</>;
