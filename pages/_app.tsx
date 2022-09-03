import React from "react";
import { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import "../styles/index.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Layout title="Story Wheel">
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}

export default MyApp;
