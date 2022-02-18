import Head from 'next/head';

import { Header, Content } from '../components';

import { getBlocks } from '../services';

export default function Home( { blocks } ) {

  return (
    <div className="bg-ekonavHomeBg/50 h-full">
      <Head>
        <title>Homepage</title>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Header />
      <Content blocks={blocks} />
    </div>
  )
}

export async function getStaticProps() {
  const blocks = (await getBlocks()) || [];
  return {
    props: { blocks },
  }
}