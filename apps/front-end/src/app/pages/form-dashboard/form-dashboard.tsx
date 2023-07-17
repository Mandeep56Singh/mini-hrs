import React from 'react';
import LayoutComponent from '../../components/layout/layout-component';
import { MenuProps } from 'antd';
import { Link } from 'react-router-dom';

const FormDashboard: React.FC = () => {
  const sideMenuItems: MenuProps['items'] = [
    {
      key: 'forms',
      label: 'Forms',
      icon: '',
    },
    {
      key: 'questions',
      label: 'Questions',
      icon: '',
    },
    {
      key: 'answer-type',
      label: 'Answer Type',
      icon: '',
    },
  ].map((menuItem) => {
    return {
      key: menuItem.key,
      icon: menuItem.icon,
      label: <Link to={menuItem.key}>{menuItem.label}</Link>,
    };
  });
  return <LayoutComponent sideMenuItems={sideMenuItems} />;
};

export default FormDashboard;
