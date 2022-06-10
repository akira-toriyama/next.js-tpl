import { useContext } from "react";
import { AppContext } from "~/presenter/component/provider/App";
import type * as AppType from "~/presenter/component/provider/App";

type UseApp = () => AppType.State;
export const useApp: UseApp = () => useContext(AppContext);
