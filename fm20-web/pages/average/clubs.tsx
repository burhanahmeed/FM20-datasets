import styles from '../styles/Home.module.css'
import Layout from '../../components/home.layout'

import {
  ClubTable,
} from '../../components/average-lists'

export default function Wonderkids() {
  return (
    <Layout>
      <h4>Average stats grouped by each clubs</h4>
      <p>The average of U21 players per clubs</p>

      <div className="pt-3">
        <ClubTable />
      </div>
    </Layout>
  )
}
