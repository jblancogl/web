import Social from './Social.js'

const Footer = props => (
  <footer className="container p-5 flex">
    <div className="flex-1">
      Javi Blanco @ {new Date().getFullYear()} EOF
      </div>
    <Social />
  </footer>
)

export default Footer