import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import MobileHeader from "@/components/Layout/MobileHeader";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <MobileHeader />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
