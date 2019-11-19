import '../styles/index.css'
import Meta from '../components/meta'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/footer'
import Router from "next/router"
import withGA from "next-ga"

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

export default withGA('UA-63759020-1', Router)(Main)