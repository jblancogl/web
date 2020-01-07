import Page from '../layouts/main'
import NowContent from '../content/now.md'

const seo = {
  title: 'What I\'m doing now',
  canonical: '/now'
}

export default () => (
  <Page seo={seo}>
    <NowContent />
  </Page>
)