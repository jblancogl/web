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
  }
]

const card = (props) => {
  return (
    <li className="px-3 mb-3">
      <div className="flex">
        <img
          className="rounded-full"
          src={`https://avatars.io/twitter/${props.twitter}/medium`}
          alt={`twitter image profile of ${props.twitter}/medium`}
          width="100px"
          height="100px"
          loading="lazy" />
        <div class="ml-3 flex flex-col justify-center">
          <h2>{props.title}</h2>
          <a className="text-base text-red-600" href={props.link}>{props.link}</a>
        </div>
      </div>
      <p>{props.description}</p>
    </li>
  )
}

export default () => (
  <Page title={title}>
    <h1>Blogroll</h1>
    <h2>Other people on the web</h2>
    <hr className="my-6" />
    <ul className="flex flex-wrap -mx-3 -mb-3">
      {people.map(person => card(person))}
    </ul>
    <hr className="my-6" />
  </Page>
)