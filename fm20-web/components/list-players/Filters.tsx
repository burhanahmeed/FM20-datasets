import * as React from 'react'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import {
  Row, Col, Input, Button,
} from 'antd'
import {
  UserOutlined,
} from '@ant-design/icons'
import debounce from 'lodash/debounce'
import pickBy from 'lodash/pickBy'
import identity from 'lodash/identity'

import {
  InputClubs,
} from '../general'

type domProperty = {
  target: {
    value: string
  }
}

type routeParams = {
  query: queryParams,
}
type queryParams = {
  name?: string,
  club?: string,
}

function Filters({
  handleFilter,
}: {
  handleFilter: Function,
}) {
  const router = useRouter()
  const { query }: routeParams = router

  const [name, setName] = React.useState<string | undefined>(undefined)
  const [club, setClub] = React.useState<string | undefined>(undefined)
  const [init, setInit] = React.useState(true)

  const changeName = debounce((e: domProperty) => {
    setName(e.target.value)
  }, 1000)
  const changeClub = debounce((e: string) => {
    setClub(e)
  }, 1000)

  React.useEffect(() => {
    setName(query.name || undefined)
    setClub(query.club || undefined)
    setTimeout(() => {
      setInit(false)
    }, 1000);
  }, [router.isReady])

  React.useEffect(() => {
    if (!init) {
      onQuery()
    }
  }, [name, club])

  const onQuery = async () => {
    const query = {
      club,
      name,
    }

    await router.push({
      query: pickBy(query, identity),
    })

    handleFilter()
  }

  const handleReset = () => {
    setName(undefined)
    setClub(undefined)
  }

  return (
    <div
      className="py-3"
    >
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col>
          <Input
            placeholder="Player name"
            prefix={<UserOutlined />}
            value={name}
            onChange={changeName}
          />
        </Col>
        <Col className="gutter-row">
          <InputClubs
            value={club}
            onChange={changeClub}
          />
        </Col>
        <Col className="gutter-row">
          {
            !!(name||club) && (
              <Button onClick={handleReset}>Clear</Button>
            )
          }
        </Col>
      </Row>
    </div>
  )
}

export default Filters;