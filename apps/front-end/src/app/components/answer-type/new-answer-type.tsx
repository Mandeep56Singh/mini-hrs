import React, { useState } from 'react';
import { Row, Col, Form, Input, Button, Alert } from 'antd';
import { createAnswerType } from '../../resources/answer-type.resource';
import { AlertMessage } from '../../models/alert-message';
import { getErrorMessage } from '../../utils/error-message-helper';
import { AnswerTypeDto } from '../../models/answer-type';

interface QuestionFormValues {
  answerType: string;
}

const NewAnswerType: React.FC = () => {
  const formItemLayout = { labelCol: { span: 4 }, wrapperCol: { span: 16 } };
  const buttonItemLayout = { wrapperCol: { span: 0, offset: 18 } };
  const [atMsg, setAtMsg] = useState<AlertMessage>();

  const onFinish = async (values: QuestionFormValues) => {
    let alertMsg: AlertMessage;
    const payload: AnswerTypeDto = {
      name: values.answerType,
    };
    try {
      await createAnswerType(payload);
      alertMsg = {
        message: 'Answer Type Created Successfully',
        type: 'success',
      };
    } catch (e: any) {
      const errorMsg = getErrorMessage(e);

      alertMsg = {
        message: errorMsg.errorText,
        type: 'error',
      };
    }
    setAtMsg(alertMsg);
  };
  return (
    <Row>
      <Col span={24}>
        {atMsg && atMsg.message.length > 0 ? (
          <Alert message={atMsg.message} type={atMsg.type} showIcon />
        ) : (
          ''
        )}
        <Form
          {...formItemLayout}
          name="create_answer_type_form"
          className="create-answer-type-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          style={{ maxWidth: 800 }}
        >
          <Form.Item
            name="answerType"
            label="Answer Type"
            rules={[
              {
                required: true,
                message: 'Please input the Answer Type',
              },
            ]}
          >
            <Input placeholder="Answer Type" />
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

export default NewAnswerType;
