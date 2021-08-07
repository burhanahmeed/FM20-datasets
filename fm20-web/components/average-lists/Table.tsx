/* eslint-disable */
import * as React from 'react';
import { TableProps } from "antd/lib/table";
import useNumber from '../../utils/useNumber'

import {
  Table,
  TableColumnType,
} from 'antd'

type pageProps = {
  apiUrl?: string,
  queryString?: object,
  columns: TableColumnType<any>[],
}

function GlobalTable({
  apiUrl = '/api/avg',
  columns,
  queryString = {},
}: pageProps) {
  const { format } = useNumber()

  const [data, setData] = React.useState([])
  const [tableState, setTableState] = React.useState({
    loading: true
  })
  const [pagination, setPagination] = React.useState({
    current: 1,
    pageSize: 30,
    defaultPageSize: 30,
    showSizeChanger: false,
    total: 0,
  })

  React.useEffect(() => {
    fetchData({
      params: { pagination }
    })
  }, [])

  const setLoading = (status: boolean) => {
    setTableState(prev => ({
      ...prev,
      loading: status,
    }))
  }

  type fetchParams = {
    params: {
      pagination: paginationType
    }
  }
  type paginationType = {
    current: number,
    pageSize?: number,
    total: number,
  }

  const fetchData = ({ params }: fetchParams) => {
    setLoading(true)
    fetch(`${apiUrl}?` + new URLSearchParams({
      currentPage: `${params.pagination.current}`,
      ...queryString
    }))
      .then(res => res.json())
      .then(arrayData => {
        if (arrayData.lists) {
          setLoading(false)
          setPagination(prev => ({
            ...prev,
            total: arrayData.meta.count
          }))
          setData(arrayData.lists)
        }
      })
      .catch(() => {
        setLoading(false)
      })
  }

  const handleTableChange: TableProps<any>["onChange"] = (pagination: any, filters: any, sort: any) => {
    setPagination(pagination)
    fetchData({
      params: {
        pagination
      }
    })
  }

  return (
    <>
      <p>Total players: { format(pagination.total) }</p>
      <Table
        {...tableState}
        scroll={{x: 800}}
        rowKey="_id"
        pagination={pagination}
        columns={columns}
        dataSource={data}
        sticky={true}
        onChange={handleTableChange}
      />
    </>
  )
}

export default GlobalTable;