import React from 'react';
import { TabsProps, Tabs, Row, Col } from 'antd';
import FormList from '../../components/forms/form-list/form-list';
import NewForm from '../../components/forms/new-form/new-form';

const Forms: React.FC = () => {
  const items: TabsProps['items'] = [
    {
      key: 'forms',
      label: `Forms`,
      children: <FormList />,
    },
    {
      key: 'new-form',
      label: `Add Form`,
      children: <NewForm />,
    },
  ];
  return (
    <Row>
      <Col span={22}>
        <h4>Questions</h4>
        <Tabs defaultActiveKey="forms" items={items} />
      </Col>
    </Row>
  );
};

export default Forms;
