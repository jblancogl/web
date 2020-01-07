import { NextSeo } from 'next-seo'
import Head from 'next/head'

const Meta = props => {
  const data = { ...props }

  data.title = `${data.title} · javi blanco`

  if (data.canonical) {
    data.canonical = `https://jblancogl.com${data.canonical}`
  }

  return (
    <div>
      <Head>
        <meta name="description" content="Javi Blanco's site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      <NextSeo {...data} />
    </div>
  )
}

export default Meta