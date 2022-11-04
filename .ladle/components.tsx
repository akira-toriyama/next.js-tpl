import "normalize.css/normalize.css";
import "../src/ui/global.css";
import type { GlobalProvider } from "@ladle/react";

export const Provider: GlobalProvider = (props) => <>{props.children}</>;
