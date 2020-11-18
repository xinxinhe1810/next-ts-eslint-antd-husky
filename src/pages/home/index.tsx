// 非入口页面禁止导入 global.css
import {IdcardFilled} from '@ant-design/icons'
import {Button} from 'antd'
import {AppProps} from 'next/app'
import Link from 'next/link'
import {ReactElement} from 'react'

import styles from './index.module.scss'

function Home(props: AppProps): ReactElement {
  console.log(props)
  return (
    <div className={styles.hometrue}>
      home
      <Button>
        <Link href="/">to index</Link>
      </Button>
      <IdcardFilled />
    </div>
  )
}

export default Home
