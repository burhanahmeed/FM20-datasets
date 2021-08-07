import * as React from 'react'
import { Select } from 'antd'

const { Option } = Select

export default function InputClubs() {
  const [data, setData] = React.useState([])
  React.useEffect(() => {
    fetch('/api/filters/nations')
      .then(resp => resp.json())
      .then(data => setData(data.lists))
  }, [])

  const onChange = () => {

  }

  return (
    <Select
      showSearch
      style={{ width: 200 }}
      placeholder="Select a nation"
      optionFilterProp="children"
      onChange={onChange}
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