import styles from "./style.module.css";

interface Props {
	children: string;
	disabled?: boolean;
	onClick?: () => void;
}

export const Btn: React.FC<Props> = ({ children, disabled, onClick }) => {
	return (
		<button
			type="button"
			disabled={disabled}
			className={styles.btn}
			onClick={onClick}
		>
			{children}
		</button>
	);
};
