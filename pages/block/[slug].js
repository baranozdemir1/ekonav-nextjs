import Head from 'next/head'
import { Header, Maps } from '../../components'

import { getAllBlockWithSlug, getBlockBySlug } from '../../lib/graphcms'

const Block = ( { block } ) => {
  return (
    <div className="bg-ekonavHomeBg/50 h-full">
      <Head>
        <title>Block</title>
      </Head>
      <Header />
      <Maps block={block} />
      {/* <Demo /> */}
    </div>
  )
}

export default Block

export async function getStaticProps( { params } ) {
  const data = await getBlockBySlug(params.slug)
  return {
    props: { block: data }
  }
}

export async function getStaticPaths() {
  const blocks = await getAllBlockWithSlug()
  return {
    paths: blocks.map(({ slug }) => ({
      params: { slug }
    })),
    fallback: true
  }
}
