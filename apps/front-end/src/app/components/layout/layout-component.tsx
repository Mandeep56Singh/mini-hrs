import { Breadcrumb, Layout, Menu, theme , MenuProps } from 'antd';
import NavigationComponent from '../navigation/navigation-component';
import { Outlet } from "react-router-dom";
import { Link } from 'react-router-dom';

const { Header, Content, Sider } = Layout;

const items2: MenuProps['items'] = ['Visits','Enrollment'].map(
  (menuItem) => { 
   return {
      key: menuItem,
      icon: '',
      label: (
        <Link to="visits">{menuItem}</Link>
      ),
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
          
        </Breadcrumb>
        <Content
          style={{
            padding: 24,
            margin: 0,
            minHeight: '400px',
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  </Layout>
  );
}

export default LayoutComponent;
