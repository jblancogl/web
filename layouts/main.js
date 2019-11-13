import '../styles/index.css'
import Meta from '../components/meta'
import Footer from '../components/footer'

const Main = props => (
  <div>
    <Meta title={props.title} />
    <article className="container">
      { props.children }
    </article>
    <Footer />
  </div>
)

export default Main