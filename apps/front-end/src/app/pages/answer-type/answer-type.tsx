import React from 'react';
import { Tabs, TabsProps } from 'antd';
import { Row, Col } from 'antd';
import AnswerTypeList from '../../components/answer-type/answer-type-list';
import NewAnswerType from '../../components/answer-type/new-answer-type';

const AnswerType: React.FC = () => {
  const items: TabsProps['items'] = [
    {
      key: 'answer-types',
      label: `Answer Types`,
      children: <AnswerTypeList />,
    },
    {
      key: 'new-question',
      label: `New`,
      children: <NewAnswerType />,
    },
  ];
  return (
    <Row>
      <Col span={22}>
        <h4>Answer Types</h4>
        <Tabs defaultActiveKey="answer-types" items={items} />
      </Col>
    </Row>
  );
};

export default AnswerType;
