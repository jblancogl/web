import Head from 'next/head'

const Meta = props => (
  <div>
    <Head>
      <title>{props.title} · jblancogl</title>
      <meta name="description" content="Javi Blanco's site" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
  </div>
)

export default Meta