import '../styles/index.css'
import Meta from '../components/meta.js'
import NavBar from '../components/NavBar/NavBar.js'
import Footer from '../components/Footer.js'
import SectionContent from '../components/SectionContent.js'
import Router from "next/router"
import withGA from "next-ga"

const Main = props => (
  <div>
    <Meta title={props.title} prefix="Javi Blanco" />
    <NavBar />
    <article className="container mt-12">
      <SectionContent className="pt-5 px-5 lg:px-0">
        {props.children}
      </SectionContent>
    </article>
    <Footer className="mt-10 pt-5 px-5 lg:px-0" />
  </div>
)

export default withGA('UA-63759020-1', Router)(Main)