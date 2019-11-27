import Social from './Social.js'

const Footer = props => (
  <footer className={`${props.className} container flex items-center`}>
    <div className="flex-1">
      Javi Blanco @ {new Date().getFullYear()} <br />
      EOF
      </div>
    <Social />
  </footer>
)

export default Footer