import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import React from "react";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <NextNProgress />
      <Component {...pageProps} />
    </>
  );
}
