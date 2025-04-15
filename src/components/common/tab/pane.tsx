import { useContext } from "react";
import { TabContext } from "./context";

export interface Props {
	label: string;
	children: React.ReactNode;
}

export const TabPane: React.FC<Props> = ({ label, children }) => {
	const { active } = useContext(TabContext);

	if (active === label) {
		return <>{children}</>;
	}

	return null;
};
