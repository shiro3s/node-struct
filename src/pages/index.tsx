import {useRef} from "react";

import {Btn} from "@/components/common/btn"
import {Modal} from "@/components/common/modal"

const Home: React.FC = () => {
	const modalRef = useRef<HTMLDivElement>(null)
	const handleOpen = () => {
		modalRef.current?.showPopover()
	}

	return (
		<div>
			<header>
				<Btn onClick={handleOpen}>New folder</Btn>
			</header>
			<p>page</p>

			<Modal ref={modalRef}>test</Modal>
		</div>
	);
};

export default Home;
