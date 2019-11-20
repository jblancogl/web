import Page from '../layouts/main'
import NowContent from '../content/now.md'

const title = 'What I\'m doing now'

export default () => (
  <Page title={title}>
    <NowContent />
  </Page>
)