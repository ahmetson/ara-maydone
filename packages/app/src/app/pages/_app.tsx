import { Fragment } from 'react'
import Head from 'next/head'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>Ara Maydone &ndash; a launchpad for ideas on Internet</title>
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  )
}

export default MyApp
