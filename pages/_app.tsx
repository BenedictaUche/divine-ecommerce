import type { AppProps } from 'next/app'
import type { NextPage } from "next";
import { ReactElement, ReactNode, useEffect } from "react";
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import NextNProgress from "nextjs-progressbar";


export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <div>
      <Navbar />
      <NextNProgress
          color="#fff"
          startPosition={0.3}
          stopDelayMs={200}
          height={2}
          showOnShallow={true}
          options={{ showSpinner: true }}
        />
      {getLayout(<Component {...pageProps} />)}
      <Footer />
    </div>
  )
}
