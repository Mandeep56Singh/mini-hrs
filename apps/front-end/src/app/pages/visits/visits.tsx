import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import { Row, Col } from 'antd';
import { useLoaderData } from 'react-router-dom';
import NewVisit from './new-visit';

const Visits: React.FC = () => {
  const data: { uuid: string } = useLoaderData();
  const items: TabsProps['items'] = [
    {
      key: 'newVisit',
      label: `New Visit+`,
      children: <NewVisit patientUuid={data.uuid} />,
    },
    {
      key: 'active-visits',
      label: `Active Visits`,
      children: '',
    },
    {
      key: 'completed-visits',
      label: `Completed Visits`,
      children: '',
    },
  ];
  return (
    <Row>
      <Col>
        <h4>Visits</h4>
        <Tabs defaultActiveKey="1" items={items} />
      </Col>
    </Row>
  );
};

export default Visits;
