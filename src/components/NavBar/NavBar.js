import Brand from './Brand'
import Menu from './Menu'
import Hamburger from './Hamburger'

const Nav = () => (
  <nav className="fixed top-0 left-0 right-0 bg-white opacity-75 p-2 mb-5 border-b border-gray-400 flex">
    <Brand />
    <Menu />
    <Hamburger />
  </nav>
)

export default Nav
