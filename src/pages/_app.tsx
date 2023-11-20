import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <NextNProgress />
      <ToastContainer />
      <Component {...pageProps} />
    </>
  );
}
