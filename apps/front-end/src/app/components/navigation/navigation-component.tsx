import { useState } from 'react';
import { Menu } from 'antd';
import { UserOutlined, LogoutOutlined, SettingOutlined, SearchOutlined, HomeOutlined, ProfileOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Link } from 'react-router-dom';

/* eslint-disable-next-line */
export interface NavigationComponentProps {}

export function NavigationComponent(props: NavigationComponentProps) {
  const [current, setCurrent] = useState('home');

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
  };
  const items: MenuProps['items'] = [
    {
      label: <Link to="/">HRS</Link>,
      key: 'home',
      icon: <HomeOutlined />
    },
    {
      label: <Link to="/patient-search">Search</Link>,
      key: 'patient-search',
      icon: <SearchOutlined />
    },
    {
      label: <Link to="/">Profile</Link>,
      key: 'profile',
      icon: <ProfileOutlined />
    },
    {
      label: <Link to="/">Settings</Link>,
      key: 'settings',
      icon: <SettingOutlined />
    },
    {
      label: 'Admin',
      key: 'user',
      icon: <UserOutlined />,
    },
    {
      label: <Link to="/">Logout</Link>,
      key: 'logout',
      icon: <LogoutOutlined />
    },
  ];
  return (
    <Menu
      theme="dark"
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
}

export default NavigationComponent;
