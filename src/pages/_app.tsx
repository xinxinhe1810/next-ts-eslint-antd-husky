import 'antd/dist/antd.css'
import '@styles/var.scss'
import '@styles/globals.scss'
import '@styles/nprogress.scss'

import {AppProps} from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'
import {ReactElement} from 'react'

Router.events.on('routeChangeStart', (url) => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})

Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({Component, pageProps}: AppProps): ReactElement {
  return (
    <div>
      hello
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
