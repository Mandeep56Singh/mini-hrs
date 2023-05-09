import { useState } from 'react';
import styles from './navigation-component.module.css';
import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Route, Routes, Link } from 'react-router-dom';

/* eslint-disable-next-line */
export interface NavigationComponentProps {}

export function NavigationComponent(props: NavigationComponentProps) {
  const [current, setCurrent] = useState('mail');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  const items: MenuProps['items'] = [
    {
      label: (
        <Link to="/">Home</Link>
      ),
      key: 'home',
    },
    {
      label: (
        <Link to="/">Profile</Link>
      ),
      key: 'profile',
    },
    {
      label: (
        <Link to="/">Settings</Link>
      ),
      key: 'settings',
    },
    {
      label: (
        <Link to="/">Logout</Link>
      ),
      key: 'logout',
    }
  ];
  return (
     <Menu theme="dark" onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
  );
}

export default NavigationComponent;
