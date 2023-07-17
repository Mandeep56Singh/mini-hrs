import React from 'react';
import { Tabs, TabsProps } from 'antd';
import { Row, Col } from 'antd';
import Question from '../../components/question/question';
import NewQuestion from '../../components/question/new-question';

const Questions: React.FC = () => {
  const items: TabsProps['items'] = [
    {
      key: 'questions',
      label: `Questions`,
      children: <Question />,
    },
    {
      key: 'new-question',
      label: `New`,
      children: <NewQuestion />,
    },
  ];
  return (
    <Row>
      <Col span={22}>
        <h4>Questions</h4>
        <Tabs defaultActiveKey="questions" items={items} />
      </Col>
    </Row>
  );
};

export default Questions;
