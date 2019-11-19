import '../styles/index.css'
import Meta from '../components/meta'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/footer'

const Main = props => (
  <div>
    <Meta title={props.title} />
    <NavBar />
    <article className="container mt-12">
      <div className="p-5">
      { props.children }
      </div>
    </article>
    <Footer />
  </div>
)

export default Main