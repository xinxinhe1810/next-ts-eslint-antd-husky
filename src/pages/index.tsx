import {AppProps} from 'next/app'
import Link from 'next/link'
import {ReactElement} from 'react'

import styles from './index.module.scss'

function MyApp(props: AppProps): ReactElement {
  return (
    <div className={styles.home}>
      hello home
      <Link href="/home">to home</Link>
    </div>
  )
}

export default MyApp
