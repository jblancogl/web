import Page from '../layouts/main'
import people from '../../public/data/blogroll.json'

const title = 'Blogroll'

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
    <div className="text-sm text-right text-gray-600 mb-4 hidden lg:block">
      <span className="mr-1">Download: </span>
      <a 
        className="text-gray-700 mr-1" 
        href="/data/blogroll.json">
        json
      </a>
      <span className="mr-1">|</span>
      <a 
        className="text-gray-700" 
        href="/data/blogroll.csv">
        csv
      </a>
    </div>
    <ul className="flex flex-wrap -mx-3 -mb-3">
      {people.map(person => card(person))}
    </ul>
    <hr className="my-6" />
  </Page>
)