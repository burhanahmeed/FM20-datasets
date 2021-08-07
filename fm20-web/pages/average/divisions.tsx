import styles from '../styles/Home.module.css'
import Layout from '../../components/home.layout'

import {
  DivisionsTable,
} from '../../components/average-lists'

export default function Wonderkids() {
  return (
    <Layout>
      <h4>Average stats grouped by divisions</h4>
      <p>The average of U21 players per divisions</p>

      <div className="pt-3">
        <DivisionsTable />
      </div>
    </Layout>
  )
}
