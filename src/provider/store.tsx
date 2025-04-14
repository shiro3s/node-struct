import { useRef } from "react";
import { Provider } from "react-redux";
import { store, type AppStore } from "@/store";

interface Props {
	children: React.ReactNode;
}
export const StoreProvider: React.FC<Props> = ({ children }) => {
	const storeRef = useRef<AppStore | null>(null);
	if (!storeRef.current) storeRef.current = store;

	return <Provider store={storeRef.current}>{children}</Provider>;
};
