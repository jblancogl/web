import Page from '../layouts/main'
import SectionTitle from '../components/SectionTitle'

const seo = {
  title: 'About',
  canonical: '/about'
}

const About = () => (
  <Page seo={seo}>
    <SectionTitle title={seo.title} />
  </Page>
)

export default About