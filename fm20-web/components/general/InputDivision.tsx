import * as React from 'react'
import { Select } from 'antd'

const { Option } = Select

type inputProps = {
  onFilter?: Function
}

export default function InputClubs({
  onFilter
}: inputProps) {
  const [data, setData] = React.useState([])
  React.useEffect(() => {
    fetch('/api/filters/divisions')
      .then(resp => resp.json())
      .then(data => setData(data.lists))
  }, [])

  const [value, setValue] = React.useState(undefined)
  const onChange = (value: any) => {
    setValue(value)
  }

  return (
    <Select
      showSearch
      style={{ width: 200 }}
      placeholder="Select a division"
      optionFilterProp="children"
      onChange={onChange}
      value={value}
    >
      {
        data.map((el, idx) => {
          return (
            <Option value={el}>{ el }</Option>
          )
        })
      }
    </Select>
  )
}