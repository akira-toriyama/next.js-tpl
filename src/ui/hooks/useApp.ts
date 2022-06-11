import { useContext } from "react";
import { AppContext } from "~/ui/component/provider/App";
import type * as AppType from "~/ui/component/provider/App";

type UseApp = () => AppType.State;
export const useApp: UseApp = () => useContext(AppContext);
