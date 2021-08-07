import * as React from 'react'
import { useRouter } from 'next/router'

import { Menu } from 'antd'
const { SubMenu } = Menu

import {
  DesktopOutlined,
  UserOutlined,
} from '@ant-design/icons'

export default function Sidebar() {
  const router = useRouter()

  const [menu, setMenu] = React.useState(['/'])

  React.useEffect(() => {
    const path = router.pathname
    setMenu([path])
  }, [router.pathname])

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
      <SubMenu key="sub1" icon={<UserOutlined />} title="Average of U21 players">
        <Menu.Item key="/average/clubs" onClick={() => handleGo('/average/clubs')}>By Club</Menu.Item>
        <Menu.Item key="/average/divisions" onClick={() => handleGo('/average/divisions')}>By Division</Menu.Item>
        <Menu.Item key="/average/nations" onClick={() => handleGo('/average/nations')}>By Nation</Menu.Item>
      </SubMenu>
    </Menu>
  )
}