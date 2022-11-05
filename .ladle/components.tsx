import "normalize.css/normalize.css";
import "./style.css";
import type { GlobalProvider } from "@ladle/react";

export const Provider: GlobalProvider = (props) => <>{props.children}</>;
