import Page from '../layouts/main'
import HomeContent from '../content/home.mdx'

const title = 'Home'

export default () => (
  <Page title={title}>
    <HomeContent />
  </Page>
)