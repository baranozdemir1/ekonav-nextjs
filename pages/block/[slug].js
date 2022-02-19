import { useRouter } from 'next/router';
import Head from 'next/head';

import { Header, Maps } from '../../components';

import { getBlocks, getBlockDetails } from '../../services';

const Block = ( { block } ) => {

  return (
    <div className="bg-ekonavHomeBg/50 h-full">
      <Head>
        <title>Block</title>
      </Head>
      <Header />
      <Maps coordinates={block.coordinates} />
      {/* <Demo /> */}
    </div>
  )
}

export default Block

export async function getStaticProps( { params } ) {
  const data = await getBlockDetails(params.slug)
  return {
    props: { block: data }
  }
}

export async function getStaticPaths() {
  const blocks = await getBlocks()
  return {
    paths: blocks.map( block => ({ params: { slug: block.slug } }) ),
    fallback: false
  }
}