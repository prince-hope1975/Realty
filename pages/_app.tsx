import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { AppProvider } from '../context'
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} />
      </AnimatePresence>
    </AppProvider>
  );
}

export default MyApp
