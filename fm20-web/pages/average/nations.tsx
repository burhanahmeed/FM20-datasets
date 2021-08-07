import styles from '../styles/Home.module.css'
import Layout from '../../components/home.layout'

import {
  NationTable,
} from '../../components/average-lists'

export default function Wonderkids() {
  return (
    <Layout>
      <h4>Average stats grouped by nations</h4>
      <p>The average of U21 players per nations</p>

      <div className="pt-3">
        <NationTable />
      </div>
    </Layout>
  )
}
