import { useState } from 'react';
import { Menu } from 'antd';
import {
  UserOutlined,
  LogoutOutlined,
  SettingOutlined,
  SearchOutlined,
  HomeOutlined,
  ProfileOutlined,
  FormOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { getItem } from '../../resources/local-storage.resource';
import { logOut } from '../../resources/logout.resource';

/* eslint-disable-next-line */
export interface NavigationComponentProps {}

export function NavigationComponent(props: NavigationComponentProps) {
  const [current, setCurrent] = useState('home');
  const currentUser = getItem('current_user');
  const navigate = useNavigate();

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
  };
  const handleLogout = () => {
    logOut();
    navigate('/login');
  };
  const items: MenuProps['items'] = [
    {
      label: <Link to="/">HRS</Link>,
      key: 'home',
      icon: <HomeOutlined />,
    },
    {
      label: <Link to="/patient-search">Search</Link>,
      key: 'patient-search',
      icon: <SearchOutlined />,
    },
    {
      label: <Link to="/form-dashboard">Forms</Link>,
      key: 'form-dashboard',
      icon: <FormOutlined />,
    },
    {
      label: <Link to="/">Profile</Link>,
      key: 'profile',
      icon: <ProfileOutlined />,
    },
    {
      label: <Link to="/">Settings</Link>,
      key: 'settings',
      icon: <SettingOutlined />,
    },
    {
      label: currentUser ? currentUser : '',
      key: 'user',
      icon: <UserOutlined />,
    },
    {
      label: <Link to="/">Logout</Link>,
      key: 'logout',
      icon: <LogoutOutlined />,
      onClick: () => handleLogout(),
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
