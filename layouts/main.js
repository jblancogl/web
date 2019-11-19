import '../styles/index.css'
import Meta from '../components/meta'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/footer'

const Main = props => (
  <div>
    <Meta title={props.title} />
    <NavBar />
    <article className="container mt-12">
      { props.children }
    </article>
    <Footer />
  </div>
)

export default Main