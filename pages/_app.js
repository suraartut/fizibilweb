import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import MobileHeader from "@/components/Layout/MobileHeader";
import "@/styles/globals.css";
import Router, { useRouter } from "next/router";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  Router.events.on("routeChangeComplete", (url, { shallow }) => {
    if (shallow === false) {
      Router.reload();
    }
  });
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/fizibil-favicon.ico" />
        <title>Fizibil Mühendislik & Yazılım</title>
        <meta
          property="og:title"
          content="Fizibil Mühendislik & Yazılım"
          key="title"
        />
      </Head>
      <Header />
      <MobileHeader />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
