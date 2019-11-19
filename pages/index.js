import Page from '../layouts/main'
import HomeContent from '../content/home.md'

const title = 'Home'

const Home = () => (
  <Page title={title}>
    <HomeContent />
  </Page>
)

export default Home