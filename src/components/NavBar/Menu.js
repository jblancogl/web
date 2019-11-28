import Link from 'next/link'

const items = [
  { link: '/', title: 'home' },
  { link: '/articles', title: 'articles' },
  { link: '/now', title: 'now' },
  { link: '/about', title: 'about' }
].map((item) => {
  item.key = `navbar-menu-item-${item.title}`
  return item
})

const menuItems = items.map(item => {
  return <Link key={item.key} href={item.link}><a className="mr-3">{item.title}</a></Link>
})

const Menu = () => (
  <div className="flex-1 flex items-stretch">
    <div className="flex flex-1 justify-end">
      {menuItems}
    </div>
  </div>
)

export default Menu
