/* eslint-disable */
import * as React from 'react';
import { useRouter } from 'next/router'
import {
  Table,
  Tag,
  Space,
} from 'antd'
import { TableProps } from "antd/lib/table";
import pickBy from 'lodash/pickBy'
import identity from 'lodash/identity'

import useNumber from '../../utils/useNumber'

type pageProps = {
  apiUrl?: string,
}

const ListPlayers = React.forwardRef(({
  apiUrl = '/api/lists',
}: pageProps, ref: any) => 
{
  const { format } = useNumber()
  const router = useRouter()
  const { query } = router

  const columns = [
    {
      title: 'Name',
      dataIndex: 'Name',
      key: 'Name',
    },
    {
      title: 'Age',
      dataIndex: 'Age',
      key: 'Age',
    },
    {
      title: 'Club',
      dataIndex: 'Club',
      key: 'Club',
      // eslint-disable-next-line react/display-name
      render: (text: any, record: any) => {
        return (
          <>
            <p>{ text }</p>
            <p>
              <Tag color="magenta">{ record.Position }</Tag>
            </p>
          </>
        )
      }      
    },
    {
      title: 'Nation',
      dataIndex: 'Nation',
      key: 'Nation',
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


  React.useImperativeHandle(ref, () => ({
    get() {
      fetchData({
        params: { pagination }
      })
    }
  }))

  React.useEffect(() => {
    if(!router.isReady) return;

    fetchData({
      params: { pagination }
    })
  }, [router.isReady])

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
    const querySearch = pickBy({
      name: query.name,
      club: query.club
    }, identity)

    fetch(`${apiUrl}?` + new URLSearchParams({
      currentPage: `${params.pagination.current}`,
      ...querySearch
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
})

export default ListPlayers;