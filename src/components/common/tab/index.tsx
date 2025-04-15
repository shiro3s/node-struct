import { useMemo, useState } from "react";
import { TabContext } from "./context";
import { type Props as TabPaneProps, TabPane } from "./pane";

interface Props {
	active?: string;
	children: React.ReactElement<TabPaneProps>[];
}

interface TabHeader {
	label: string;
}

export const Tab: React.FC<Props> = ({ active = "", children }) => {
	const [activeTab, setActiveTab] = useState(active);

	const headers = useMemo(() => {
		const panes: TabHeader[] = [];
		for (let i = 0; i < children.length; i++)
			panes.push({ label: children[i].props.label });

		return panes;
	}, [children]);

	return (
		<TabContext.Provider value={{ active: activeTab }}>
			<div>
				{headers.map(({ label }) => (
					<div
						key={label}
						onClick={() => setActiveTab(label)}
						role="button"
						data-active={activeTab === label}
					>
						{label}
					</div>
				))}
			</div>

			<div>{children}</div>
		</TabContext.Provider>
	);
};
