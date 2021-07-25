import * as React from 'react';
import {
  Table,
  Tag,
  Space,
} from 'antd'
import { TableProps } from "antd/lib/table";
import useNumber from '../../utils/useNumber'

function ListPlayers() {
  const { format } = useNumber()
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
    pageSize?: number
  }

  const fetchData = ({ params }: fetchParams) => {
    setLoading(true)
    fetch('/api/lists?' + new URLSearchParams({
      currentPage: `${params.pagination.current}`
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
    <Table
      {...tableState}
      rowKey="_id"
      pagination={pagination}
      columns={columns}
      dataSource={data}
      sticky={true}
      onChange={handleTableChange}
    />
  )
}

export default ListPlayers;