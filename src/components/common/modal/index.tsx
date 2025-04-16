import styles from "./style.module.css"

interface Props {
	children: React.ReactNode;
	ref: React.RefObject<HTMLDivElement | null>;
}

export const Modal: React.FC<Props> = ({ children, ref }) => {
	return <div popover="auto" ref={ref} className={styles.modal}>{children}</div>;
};
