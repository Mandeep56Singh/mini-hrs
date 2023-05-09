import { Breadcrumb, Layout, Menu, theme , MenuProps } from 'antd';
import NavigationComponent from '../navigation-component/navigation-component';

const { Header, Content, Sider } = Layout;

const items2: MenuProps['items'] = ['Programs'].map(
  (menuItem) => { 
   return {
      key: menuItem,
      icon: '',
      label: menuItem
    };
  },
);

/* eslint-disable-next-line */
export interface LayoutComponentProps {}

export function LayoutComponent(props: LayoutComponentProps) {
  const {token: { colorBgContainer }, } = theme.useToken();
  return (
    <Layout style={{
      minHeight: '600px'
    }}>
    <Header className="header">
      <NavigationComponent />
    </Header>
    <Layout>
      <Sider width={200} style={{ background: colorBgContainer }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
          items={items2}
        />
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          App Content will go here
        </Content>
      </Layout>
    </Layout>
  </Layout>
  );
}

export default LayoutComponent;
