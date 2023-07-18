import React, { useState } from 'react';
import { Row, Col, Select, Form, Input, Button, Alert } from 'antd';
import { useAnswerTypes } from '../../resources/hooks/use-answer-type';
import Loader from '../loader/loader';
import ErrorAlert from '../error/error-alert';
import { createQuestion } from '../../resources/question.resource';
import { AlertMessage } from '../../models/alert-message';
import { QuestionDto } from '../../models/question';
import { getErrorMessage } from '../../utils/error-message-helper';

interface QuestionFormValues {
  question: string;
  answerType: string;
}

const NewQuestion: React.FC = () => {
  const { answerTypes, error, isLoading, isError } = useAnswerTypes();
  const formItemLayout = { labelCol: { span: 4 }, wrapperCol: { span: 16 } };
  const buttonItemLayout = { wrapperCol: { span: 0, offset: 18 } };
  const [qstnMsg, setQstnMsg] = useState<AlertMessage>();

  if (isError) {
    return <ErrorAlert error={error} />;
  }
  if (isLoading) {
    return <Loader />;
  }

  const onFinish = async (values: QuestionFormValues) => {
    let alertMsg: AlertMessage;
    const payload: QuestionDto = {
      question: values.question,
      answerTypeUuid: values.answerType,
    };
    try {
      await createQuestion(payload);
      alertMsg = {
        message: 'Question Created Successfully',
        type: 'success',
      };
    } catch (e: any) {
      const errorMsg = getErrorMessage(e);

      alertMsg = {
        message: errorMsg.errorText,
        type: 'error',
      };
    }
    setQstnMsg(alertMsg);
  };
  return (
    <Row>
      <Col span={24}>
        {qstnMsg && qstnMsg.message.length > 0 ? (
          <Alert message={qstnMsg.message} type={qstnMsg.type} showIcon />
        ) : (
          ''
        )}
        <Form
          {...formItemLayout}
          name="create_question_form"
          className="create-question-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          style={{ maxWidth: 800 }}
        >
          <Form.Item
            name="question"
            label="Question"
            rules={[
              {
                required: true,
                message: 'Please input the Question',
              },
            ]}
          >
            <Input placeholder="Question" />
          </Form.Item>
          <Form.Item
            name="answerType"
            label="Answer Type"
            rules={[
              {
                required: true,
                message: 'Please select an AnswerType',
              },
            ]}
          >
            <Select>
              {answerTypes.map((a, index) => {
                return (
                  <Select.Option key={index} value={a.uuid}>
                    {a.name}
                  </Select.Option>
                );
              })}
            </Select>
          </Form.Item>
          <Form.Item {...buttonItemLayout}>
            <Button key="submit" type="primary" htmlType="submit">
              Save
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default NewQuestion;
