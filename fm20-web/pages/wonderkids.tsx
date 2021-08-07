import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/home.layout'

import {
  Alert,
} from 'antd'

import {
  ListPlayers,
} from '../components/list-players'

export default function Wonderkids() {
  return (
    <Layout>

      <h4>Football Manager 2020 Wonderkids</h4>
      <Alert
        message="Filtered by top 1000 of U21 players with market value less than 15 millions"
        type="success"
      />

      <div className="pt-3">
        <ListPlayers apiUrl="/api/wonderkids" />
      </div>
    </Layout>
  )
}
