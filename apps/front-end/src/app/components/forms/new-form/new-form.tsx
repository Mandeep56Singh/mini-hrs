import React, { useState } from 'react';
import { Row, Col, Form, Input, Button, Alert, Select } from 'antd';
import { AlertMessage } from '../../../models/alert-message';
import ErrorAlert from '../../error/error-alert';
import Loader from '../../loader/loader';
import { getErrorMessage } from '../../../utils/error-message-helper';
import { createForm } from '../../../resources/form.resource';
import { CreateFormDto } from '../../../models/form';
import { useEncounterTypes } from '../../../resources/hooks/use-encounter-type';

interface FormValues {
  name: string;
  encounterType: string;
}

const NewForm: React.FC = () => {
  const { encounterTypes, isError, isLoading, error } = useEncounterTypes();
  const formItemLayout = { labelCol: { span: 4 }, wrapperCol: { span: 16 } };
  const buttonItemLayout = { wrapperCol: { span: 0, offset: 18 } };
  const [atMsg, setAtMsg] = useState<AlertMessage>();

  if (isError) {
    return <ErrorAlert error={error} />;
  }
  if (isLoading) {
    return <Loader />;
  }

  const onFinish = async (values: FormValues) => {
    let alertMsg: AlertMessage;
    const payload: CreateFormDto = {
      name: values.name.toUpperCase(),
      encounterTypeUuid: values.encounterType,
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
          <Form.Item
            name="encounterType"
            label="Encounter Type"
            rules={[
              {
                required: true,
                message: 'Please select an Encounter Type',
              },
            ]}
          >
            <Select
              placeholder="Select Encounter Type"
              style={{ width: 300 }}
              options={encounterTypes.map((encounterType) => {
                return { value: encounterType.uuid, label: encounterType.name };
              })}
            />
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
