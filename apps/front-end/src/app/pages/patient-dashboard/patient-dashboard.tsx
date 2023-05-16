import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LayoutComponent from '../../components/layout/layout-component';
import { MenuProps } from 'antd';
import { Link } from 'react-router-dom';

const PatientDashboard: React.FC = () => {
  const data: { uuid: string } = useLoaderData();
  const sideMenuItems: MenuProps['items'] = ['Visits', 'Enrollment'].map(
    (menuItem) => {
      return {
        key: menuItem,
        icon: '',
        label: (
          <Link to={data.uuid + '/' + menuItem.toLowerCase()}>{menuItem}</Link>
        ),
      };
    }
  );
  return <LayoutComponent sideMenuItems={sideMenuItems} />;
};

export default PatientDashboard;
