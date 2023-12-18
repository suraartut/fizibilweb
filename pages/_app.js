import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import MobileHeader from "@/components/Layout/MobileHeader";
import "@/styles/globals.css";
import Router, { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  Router.events.on("routeChangeComplete", (url, { shallow }) => {
    if (shallow === false) {
      Router.reload();
    }
  });
  return (
    <>
      <Header />
      <MobileHeader />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
