import Head from 'next/head'
import Intro from '../components/Intro'
import Services from '../components/Services'
import { data } from '../data'

export default function Home({data}) {
  console.log(data);
  return (
    <div>
      <Head>
        <title>포트폴리오</title>
        <meta name="description" content="kmc" />
      </Head>
      <Intro />
      <Services services={data}/>
    </div>
  )
}

export const getStaticProps = async () => {
  // 실제 파일을 가지고있으므로 axios는 필요없다
  const services = data;
  return {
    props: {data: services}
  }
}
