import React, { ReactNode, useContext } from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import { useRouter } from "next/router";
import {
  ThemeContext,
  useThemeController,
} from "../lib/contexts/theme_context";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => {
  const { userProps, setUserProps } = useContext(ThemeContext);
  const router = useRouter();
  if (router.pathname.includes("auth")) return <>{children}</>;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={`${userProps?.theme} h-screen`}>
        <Navbar />
        {children}
      </div>
    </>
  );
};

export default Layout;
