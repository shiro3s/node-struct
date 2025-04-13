import type { AppProps } from "next/app";
import { Layout } from "@/components/layouts";

import "@/styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}
