import type { GlobalProvider } from "@ladle/react";
import "./style.css";

export const Provider: GlobalProvider = (props) => <>{props.children}</>;
