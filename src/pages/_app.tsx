import type { AppProps } from "next/app";

import { Layout } from "@/components/layouts";
import { StoreProvider } from "@/provider/store";

import "@/styles/global.css";

export default function App({ Component, pageProps, ...rest }: AppProps) {
	console.log(rest)

	return (
		<StoreProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</StoreProvider>
	);
}
