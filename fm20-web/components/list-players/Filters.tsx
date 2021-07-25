import * as React from 'react'
import {
  Row, Col,
} from 'antd'

import {
  InputClubs,
  InputDivision,
  InputNation,
  InputPosition,
} from '../general'

export default function Filters() {

  return (
    <div
      className="py-3"
    >
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={6}>
          <InputClubs />
        </Col>
        <Col className="gutter-row" span={6}>
          <InputDivision />
        </Col>
        <Col className="gutter-row" span={6}>
          <InputPosition />
        </Col>
        <Col className="gutter-row" span={6}>
          {/* <div style={style}>col-6</div> */}
        </Col>
      </Row>
    </div>
  )
}