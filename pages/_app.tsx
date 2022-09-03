import React from "react";
import { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import "../styles/index.css";
import Layout from "../components/Layout";
import ThemeContextProvider from "../components/ThemeContextProvider";
function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <ThemeContextProvider>
        <Layout title="ACPUB">
          <Component {...pageProps} />
        </Layout>
      </ThemeContextProvider>
    </SessionProvider>
  );
}

export default MyApp;
