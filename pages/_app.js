import * as React from "react";
import Head from "next/head";
import CssBaseline from "@mui/material/CssBaseline";
import "../styles/styles.css";
// import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  // const router = useRouter();
  return (
    <>
      <Head>
        <title>MatXi</title>
        <meta name="description" content="Software engineer, researcher, physicist, and designer. Meaningful systems and user interfaces"></meta>
        <meta name = "description" content = "software projects, operating systems, web development, numerical analysis, music, programming languages, machine learning, and more"></meta>
      </Head>
      <CssBaseline />
      <Component {...pageProps} />
    </>
  );
}
