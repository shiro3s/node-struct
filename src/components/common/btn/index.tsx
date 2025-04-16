import styles from "./style.module.css";

interface Props {
	children: string;
	disabled?: boolean;
}

export const Btn: React.FC<Props> = ({ children, disabled }) => {
	return (
		<button type="button" disabled={disabled} className={styles.btn}>
			{children}
		</button>
	);
};
