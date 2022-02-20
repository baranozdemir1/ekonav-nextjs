import Head from 'next/head'
import { Header, Content } from '../components'

import { getAllBlock } from '../lib/graphcms'

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
  const blocks = (await getAllBlock()) || [];
  return {
    props: { blocks },
    revalidate: 1
  }
}