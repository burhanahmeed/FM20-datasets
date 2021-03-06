import * as React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/home.layout'

import {
  Alert,
} from 'antd'

import {
  ListPlayers,
  Filters,
} from '../components/list-players'

type refProps = {
  get: Function,
}

export default function Matures() {
  const listRef = React.useRef<refProps>()

  React.useEffect(() => {
    if (listRef) {
      return
    }
  }, [listRef])

  const onFilter = () => {
    listRef.current?.get()
  }

  return (
    <Layout>
      <h4>Football Manager 2020 Matures</h4>
      <div style={{maxWidth: 550}}>
        <Alert
          message="Filtered by U31 & A24 players with CA above 140"
          type="success"
        />
      </div>

      <div className="pt-3">
        <Filters handleFilter={onFilter} />
        <ListPlayers ref={listRef} apiUrl="/api/matures" />
      </div>
    </Layout>
  )
}
