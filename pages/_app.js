import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import "@/styles/globals.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <ToastContainer />
      <Footer />
    </>
  );
}
