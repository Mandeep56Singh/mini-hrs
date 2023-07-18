import React from 'react';
import { Tabs, TabsProps } from 'antd';
import { Row, Col } from 'antd';
import QuestionList from '../../components/question/question-list';
import NewQuestion from '../../components/question/new-question';
import { useQuestions } from '../../resources/hooks/use-question';
import ErrorAlert from '../../components/error/error-alert';
import Loader from '../../components/loader/loader';

const Questions: React.FC = () => {
  const { questions, error, isLoading, isError } = useQuestions();

  if (isError) {
    return <ErrorAlert error={error} />;
  }
  if (isLoading) {
    return <Loader />;
  }
  const items: TabsProps['items'] = [
    {
      key: 'questions',
      label: `Questions`,
      children: <QuestionList questions={questions} />,
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
