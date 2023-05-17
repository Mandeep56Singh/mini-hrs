import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LayoutComponent from '../../components/layout/layout-component';
import { MenuProps } from 'antd';
import { Link } from 'react-router-dom';

const PatientDashboard: React.FC = () => {
  const data: { uuid: string } = useLoaderData();
  const sideMenuItems: MenuProps['items'] = [
    {
      key: 'visits',
      label: 'Visits',
      icon: ''
    },
    {
      key: 'enrollments',
      label: 'Enrollments'
    }
  ].map(
    (menuItem) => {
      return {
        key: menuItem.key,
        icon: menuItem.icon,
        label: (
          <Link to={data.uuid + '/' + menuItem.key}>{menuItem.label}</Link>
        ),
      };
    }
  );
  return <LayoutComponent sideMenuItems={sideMenuItems} />;
};

export default PatientDashboard;
