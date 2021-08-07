import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'

require('../styles/variables.less');

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <Script
          data-name="BMC-Widget"
          data-cfasync="false"
          src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
          data-id="zokt07a" data-description="Support me on Buy me a coffee!"
          data-message="" data-color="#5F7FFF"
          data-position="Right"
          data-x_margin="18"
          data-y_margin="18">
        </Script>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
