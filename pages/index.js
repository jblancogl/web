import Page from '../layouts/main'
import HomeContent from '../content/home.md'

const title = 'Home'

export default () => (
  <Page title={title}>
    <HomeContent />
  </Page>
)