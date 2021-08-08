import * as React from 'react'
import { Select } from 'antd'

const { Option } = Select

interface componentProps {
  onChange: React.ComponentProps<any>,
  value: string | undefined,
}

export default function InputClubs({ onChange, value }: componentProps) {
  const [data, setData] = React.useState([])
  React.useEffect(() => {
    fetch('/api/filters/clubs')
      .then(resp => resp.json())
      .then(data => setData(data.lists))
  }, [])

  return (
    <Select
      showSearch
      style={{ width: 200 }}
      placeholder="Select a club"
      optionFilterProp="children"
      onChange={onChange}
      value={value}
    >
      {
        data.map((el, idx) => {
          return (
            <Option key={idx} value={el}>{ el }</Option>
          )
        })
      }
    </Select>
  )
}