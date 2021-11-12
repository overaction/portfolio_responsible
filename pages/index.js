import Head from 'next/head'
import Intro from '../components/Intro'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>포트폴리오</title>
        <meta name="description" content="kmc" />
      </Head>
      <Intro />
    </div>
  )
}
