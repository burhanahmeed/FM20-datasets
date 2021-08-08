import * as React from 'react'
import { useRouter } from 'next/router'
import {
  Row, Col, Input,
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

export default function Filters({
  handleFilter,
}: {
  handleFilter: Function,
}) {
  const router = useRouter()

  const [name, setName] = React.useState<string | undefined>(undefined)
  const [club, setClub] = React.useState<string | undefined>(undefined)

  const changeName = debounce((e: domProperty) => {
    setName(e.target.value)
  }, 1000)
  const changeClub = debounce((e: string) => {
    setClub(e)
  }, 1000)

  React.useEffect(() => {
    onQuery()
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

  return (
    <div
      className="py-3"
    >
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col>
          <Input
            placeholder="Player name"
            prefix={<UserOutlined />}
            onChange={changeName}
          />
        </Col>
        <Col className="gutter-row">
          <InputClubs
            value={club}
            onChange={changeClub}
          />
        </Col>
      </Row>
    </div>
  )
}