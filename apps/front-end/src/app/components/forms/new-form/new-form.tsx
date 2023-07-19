import React, { useState } from 'react';
import { Row, Col, Form, Input, Button, Alert } from 'antd';
import { AlertMessage } from '../../../models/alert-message';
import { getErrorMessage } from '../../../utils/error-message-helper';
import { createForm } from '../../../resources/form.resource';
import { CreateFormDto } from '../../../models/form';

interface FormValues {
  name: string;
}

const NewForm: React.FC = () => {
  const formItemLayout = { labelCol: { span: 4 }, wrapperCol: { span: 16 } };
  const buttonItemLayout = { wrapperCol: { span: 0, offset: 18 } };
  const [atMsg, setAtMsg] = useState<AlertMessage>();

  const onFinish = async (values: FormValues) => {
    let alertMsg: AlertMessage;
    const payload: CreateFormDto = {
      name: values.name.toUpperCase(),
    };
    console.log('payload', payload);
    try {
      await createForm(payload);
      alertMsg = {
        message: 'Form Created Successfully',
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
          name="create_form_form"
          className="create-form-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          style={{ maxWidth: 800 }}
        >
          <Form.Item
            name="name"
            label="Form Name"
            rules={[
              {
                required: true,
                message: 'Please input the Answer Type',
              },
            ]}
          >
            <Input placeholder="Form Name" />
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

export default NewForm;
