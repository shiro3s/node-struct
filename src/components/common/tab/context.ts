import { createContext } from "react";

interface TabContextState {
	active: string;
}

export const TabContext = createContext<TabContextState>({
	active: "",
});
