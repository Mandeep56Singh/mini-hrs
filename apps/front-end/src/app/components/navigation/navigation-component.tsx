import { useState } from 'react';
import { Menu } from 'antd';
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
      label: (
        <Link to="/">Home</Link>
      ),
      key: 'home',
    },
    {
      label: (
        <Link to="/patient-search">Patient Search</Link>
      ),
      key: 'patient-search',
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
        <Link to="/login">Login</Link>
      ),
      key: 'login',
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
