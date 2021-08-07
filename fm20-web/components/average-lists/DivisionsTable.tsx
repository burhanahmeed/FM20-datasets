/* eslint-disable */
import * as React from 'react';
import {
  Tag,
} from 'antd'
import useNumber from '../../utils/useNumber'

import GlobalTable from './Table'

function DivisionTable() {
  const { format } = useNumber()
  const columns = [
    {
      title: 'Num of players',
      dataIndex: 'Count',
      key: 'Count',
    },
    {
      title: 'Division',
      dataIndex: 'Division',
      key: 'Division',
    },
    {
      title: 'Age',
      dataIndex: 'Age',
      key: 'Age',
    },
    {
      title: 'Value',
      key: 'Value',
      dataIndex: 'Value',
      // eslint-disable-next-line react/display-name
      render: (text: any, record: any) => {
        return (
          <>
            <p>£ { format(text) }</p>
            <p>
              <Tag color="geekblue">£ { format(record.Wage) }/week</Tag>
            </p>
          </>
        )
      }
    },
    {
      title: 'Body',
      key: 'Body',
      dataIndex: 'Body',
      // eslint-disable-next-line react/display-name
      render: (text: any, record: any) => {
        return (
          <span>{ record.Height }cm / { record.Weight }kg</span>
        )
      }
    },
    {
      title: 'CA/PA',
      key: 'capa',
      dataIndex: 'capa',
      // eslint-disable-next-line react/display-name
      render: (text: any, record: any) => {
        return (
          <span>{ record.CA } / { record.PA }</span>
        )
      }
    },
  ];
  
  
  return <GlobalTable
    apiUrl="/api/avg"
    queryString={{ type: 'divisions' }}
    columns={columns}
  />
}

export default DivisionTable;