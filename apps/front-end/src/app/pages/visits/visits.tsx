import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import { Row, Col } from 'antd';
import { useLoaderData } from 'react-router-dom';
import NewVisit from './new-visit';
import PatientVisits from './patient-visits';

const Visits: React.FC = () => {
  const data: { uuid: string } = useLoaderData();
  const items: TabsProps['items'] = [
    {
      key: 'newVisit',
      label: `New Visit`,
      children: <NewVisit patientUuid={data.uuid} />,
    },
    {
      key: 'active-visits',
      label: `Active Visits`,
      children: <PatientVisits patientUuid={data.uuid} complete={false} />,
    },
    {
      key: 'completed-visits',
      label: `Completed Visits`,
      children: <PatientVisits patientUuid={data.uuid} complete={true} />,
    },
  ];
  return (
    <Row>
      <Col span={22}>
        <h4>Visits</h4>
        <Tabs defaultActiveKey="1" items={items} />
      </Col>
    </Row>
  );
};

export default Visits;
