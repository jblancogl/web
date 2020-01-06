import Page from '../layouts/main'

const title = 'Blogroll'

const people = [
  {
    title: 'Victoriano Izquierdo',
    link: 'https://victoriano.me',
    twitter: 'victorianoi'
  },
  {
    title: 'Javi Santana',
    link: 'http://javisantana.com',
    twitter: 'javisantana'
  },
  {
    title: 'Guillermo Rauch',
    link: 'https://rauchg.com',
    twitter: 'rauchg'
  },
  {
    title: 'Brandur',
    link: 'https://brandur.org',
    twitter: 'brandur'
  }
]

const card = (props) => {
  return (
    <li className="px-3 mb-3">
      <div className="border border-gray-100">
        <img src={`https://www.avatars.io/twitter/${props.twitter}`} />
        <div>
          <h2>{props.title}</h2>
          <a href={props.link}>{props.link}</a>
        </div>
        <p>

        </p>
      </div>
    </li>
  )
}

export default () => (
  <Page title={title}>
    <h1>Blogroll</h1>
    <h2>Other people on the web</h2>
    <ul className="flex flex-wrap -mx-3 -mb-3">
      {people.map(person => card(person))}
    </ul>
  </Page>
)