import { SideMenuHead } from "@/components/layouts/sidemenu-head";

import style from "./style.module.css";

export const SideMenu = () => {
	return (
		<aside className={style.container}>
			<nav className={style.nav}>
				<div>
					<SideMenuHead />
				</div>
			</nav>
		</aside>
	);
};
