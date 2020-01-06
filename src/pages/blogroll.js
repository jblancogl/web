import Page from '../layouts/main'

const title = 'Blogroll'

const people = [
  {
    title: 'Victoriano Izquierdo',
    link: 'https://victoriano.me',
    twitter: 'victorianoi',
    description: ''
  },
  {
    title: 'Javi Santana',
    link: 'http://javisantana.com',
    twitter: 'javisantana',
    description: ''
  },
  {
    title: 'Guillermo Rauch',
    link: 'https://rauchg.com',
    twitter: 'rauchg',
    description: ''
  },
  {
    title: 'Brandur',
    link: 'https://brandur.org',
    twitter: 'brandur',
    description: ''
  },
  {
    title: 'Sébastien Chopin',
    link: 'https://atinux.com',
    twitter: 'Atinux',
    description: ''
  },
  {
    title: 'Alberto Cairo',
    link: 'http://thefunctionalart.com',
    twitter: 'AlbertoCairo',
    description: ''
  },
  {
    title: 'David Bonilla',
    link: 'https://bonillaware.com',
    twitter: 'david_bonilla',
    description: ''
  }
]

const card = (props) => {
  return (
    <li key={props.twitter} className="px-3 mb-3 lg:w-1/3">
      <div className="flex">
        <div style={{
          minWidth: '48px'
        }}>
          <img
            className="rounded-full"
            width="48px"
            height="48px"
            src={`https://avatars.io/twitter/${props.twitter}/small`}
            alt={`twitter image profile of ${props.twitter}`}
            loading="lazy" />
        </div>
        <div className="ml-3 flex flex-col justify-center">
          <h2 className="lg:text-base">{props.title}</h2>
          <a className="text-base text-red-600 overflow-hidden" href={props.link}>{props.link}</a>
        </div>
      </div>
      <p>{props.description}</p>
    </li >
  )
}

export default () => (
  <Page title={title}>
    <h1 className="lg:text-6xl lg:text-center">Blogroll</h1>
    <h2 className="lg:text-3xl lg:text-center">Other people on the web</h2>
    <hr className="my-6" />
    <ul className="flex flex-wrap -mx-3 -mb-3">
      {people.map(person => card(person))}
    </ul>
    <hr className="my-6" />
  </Page>
)