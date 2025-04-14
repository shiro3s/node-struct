import { SideMenuItems } from "@/components/layouts/sidemenu-items";

import style from "./style.module.css";

export const SideMenu = () => {
	return (
		<aside className={style.container}>
			<nav className={style.nav}>
				<div>
					<SideMenuItems>
						open
					</SideMenuItems>
				</div>
			</nav>
		</aside>
	);
};
