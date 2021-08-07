import Head from 'next/head'

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
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Header>
          <CoreHeader />
        </Header>
        <Layout>
          <Sider 
            width={200}
            className="site-layout-background"
            breakpoint="lg"
            collapsedWidth="0"
          >
            <Sidebar />
          </Sider>
          <Content
            className="container p-5"
            style={{minHeight: '95vh'}}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </>
  )
}