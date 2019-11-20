import '../styles/index.css'
import Meta from '../components/meta'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/footer'
import SectionContent from '../components/SectionContent'
import Router from "next/router"
import withGA from "next-ga"

const Main = props => (
  <div>
    <Meta title={props.title} prefix="Javi Blanco" />
    <NavBar />
    <article className="container mt-12">
      <SectionContent>
        {props.children}
      </SectionContent>
    </article>
    <Footer />
  </div>
)

export default withGA('UA-63759020-1', Router)(Main)