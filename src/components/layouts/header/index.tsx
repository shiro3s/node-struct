import Link from "next/link";

import styles from "./style.module.css";

export const Header = () => {
	return (
		<header className={styles.container}>
			<div className={styles.content}>
				<div className={styles.title}>
					<Link href="/" className={styles.link}>
						Structs
					</Link>

					<div className={styles.divide} />
				</div>

				<div className={styles.nav}>test</div>
			</div>
		</header>
	);
};
