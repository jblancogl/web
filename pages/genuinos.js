import Page from '../layouts/main'
import genuinosData from '../data/genuinos.csv'

const title = 'Genuinos'
const items = genuinosData.map(record => {
  return <li key={record.name}>{record.name} · {record.web} · {record.twitter}</li>
})

const Genuinos = () => (
  <Page title={title}>
    <ul>
      {items}
    </ul>
  </Page>
)

export default Genuinos