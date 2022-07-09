import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { AppProvider } from "../context";
import { AnimatePresence } from "framer-motion";
import Modal from "../Components/modal";
import { useGlobalContext } from "../context";

function MyApp({ Component, pageProps }: AppProps) {
  const { setShowModal } = useGlobalContext();
  return (
    <AppProvider>
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => {
          window.scrollTo(0, 0);
        }}
      >
        <Modal />
        <Component {...pageProps} />
      </AnimatePresence>
    </AppProvider>
  );
}

export default MyApp;
