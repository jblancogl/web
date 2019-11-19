import Page from '../layouts/main'
import HomeContent from '../content/home.md'

const title = 'Javi Blanco'

const Home = () => (
  <Page title={title}>
    <HomeContent />
  </Page>
)

export default Home