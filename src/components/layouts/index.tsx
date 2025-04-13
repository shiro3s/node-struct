import { Header } from "./header";
import {SideMenu} from "./sidemenu"

import styles from "./style.module.css";

interface Props {
	children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
	return (
		<>
			<Header />
      <SideMenu />

			<div className={styles.container}>
				<main className={styles.main}>
					{children}
				</main>
			</div>
		</>
	);
};
