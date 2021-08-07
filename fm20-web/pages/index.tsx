import styles from '../styles/Home.module.css'
import Layout from '../components/home.layout'

import {
  ListPlayers,
} from '../components/list-players'

export default function Home() {
  return (
    <Layout>
      <h4>Football Manager 2020 Datasets</h4>
      <a href="https://www.kaggle.com/burhanahmeed/fm2020-datasets">Kaggle Notebook Data Sources</a>
      <div className="pt-3">
        <ListPlayers/>
      </div>
    </Layout>
  )
}
