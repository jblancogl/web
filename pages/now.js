import Page from '../layouts/main'
import SectionTitle from '../components/SectionTitle'
import NowContent from '../content/now.md'

const title = 'Now'

const Now = () => (
  <Page title={title}>
    <SectionTitle title={title} />
    <NowContent />
  </Page>
)

export default Now