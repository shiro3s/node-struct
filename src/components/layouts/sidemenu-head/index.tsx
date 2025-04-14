import { useState } from "react";

import styles from "./style.module.css";

export const SideMenuHead = () => {
	const [open, setOpen] = useState(false);
	const handleToggle = () => setOpen((pre) => !pre);

	return (
		<section>
			{/* biome-ignore lint: */}
			<div
				role="button"
				tabIndex={0}
				className={styles.item}
				onClick={handleToggle}
				data-expanded={open}
			>
				<h2 className={styles.text}>Pages</h2>
				<div className={styles.caret}>
					<span className="material-icons-outlined">chevron_right</span>
				</div>
			</div>

			{open && <div className={styles.pages}>open</div>}
		</section>
	);
};
