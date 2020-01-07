import Page from '../layouts/main'
import HomeContent from '../content/home.mdx'

const seo = {
  title: 'Home',
  canonical: '/'
}

export default () => (
  <Page seo={seo}>
    <HomeContent />
  </Page>
)