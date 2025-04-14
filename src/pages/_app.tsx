import type { AppProps } from "next/app";

import { Layout } from "@/components/layouts";
import { StoreProvider } from "@/provider/store";

import "@/styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<StoreProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</StoreProvider>
	);
}
