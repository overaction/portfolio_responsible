import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>포트폴리오</title>
        <meta name="description" content="kmc" />
      </Head>
      <h1 className={styles.title}>홈페이지</h1>
    </div>
  )
}
