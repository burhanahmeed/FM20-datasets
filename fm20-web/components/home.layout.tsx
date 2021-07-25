import {
  Header as CoreHeader,
  Sidebar,
} from '../components/core'
import {
  Layout,
} from 'antd'

const {
  Sider,
  Header,
  Content,
  Footer,
} = Layout;

export default function HomeLayout({ children }: any) {
  return (
    <>
      <Layout>
        <Header>
          <CoreHeader />
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Sidebar />
          </Sider>
          <Content
            className="container p-5"
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </>
  )
}