import * as React from 'react'
import { useRouter } from 'next/router'

import { Menu } from 'antd'
const { SubMenu } = Menu

import {
  DesktopOutlined
} from '@ant-design/icons'

export default function Sidebar() {
  const router = useRouter()

  const [menu, setMenu] = React.useState(['/'])

  React.useEffect(() => {
    const path = router.pathname
    setMenu([path])
  }, [])

  const handleGo = (route: string) => {
    setMenu([route])
    router.push(route)
  }

  return (
    <Menu
      selectedKeys={menu}
      style={{ height: '100%', borderRight: 0 }}
      mode="inline"
    >
      <Menu.Item key="/" icon={<DesktopOutlined />} onClick={() => handleGo('/')}>
        All Players
      </Menu.Item>
      <Menu.Item key="/wonderkids" icon={<DesktopOutlined />} onClick={() => handleGo('/wonderkids')}>
        Wonderkids
      </Menu.Item>
      <Menu.Item key="/matures" icon={<DesktopOutlined />} onClick={() => handleGo('/matures')}>
        Mature players
      </Menu.Item>
    </Menu>
  )
}