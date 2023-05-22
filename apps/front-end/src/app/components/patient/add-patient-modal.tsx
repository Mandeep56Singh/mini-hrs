import React, { useState } from 'react';
import { CreatePatientPayload } from '../../models/patient';
import { Button, Modal, Row, Col, Select, Form, Input, DatePicker } from 'antd';
import { createPatient } from '../../resources/patient.resource';
import { getYearMonthDate } from '../../utils/date-formatter';
import { useNavigate } from 'react-router-dom';

interface addPatientModalProps {
  isModalOpen: boolean;
  handleCancel: () => void;
}
interface SelectOptions {
  value: string;
  label: string;
}
interface CreatePatientFormValues {
  dob: {
    $d: string;
  };
  gender: string;
  firstName: string;
  lastName: string;
  identifier: string;
}

const AddPatientModal: React.FC<addPatientModalProps> = ({
  isModalOpen,
  handleCancel,
}) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const redirectToPatientDashboard = (patientUuid: string) => {
    return navigate(`/patient-dashboard/${patientUuid}/patient-info`);
  };
  const onFinish = async (values: CreatePatientFormValues) => {
    setLoading(true);
    const payLoad: CreatePatientPayload = {
      dob: getYearMonthDate(values.dob.$d),
      gender: values.gender,
      patientNames: {
        firstName: values.firstName,
        lastName: values.lastName,
      },
      patientIdentifiers: {
        identifier: values.identifier,
      },
    };

    const newPatient = await createPatient(payLoad);
    setLoading(true);
    redirectToPatientDashboard(newPatient.uuid);
  };
  const genderOptions: SelectOptions[] = [
    {
      value: 'M',
      label: 'Male',
    },
    {
      value: 'F',
      label: 'Female',
    },
  ];
  const formItemLayout = { labelCol: { span: 0 }, wrapperCol: { span: 24 } };
  const buttonItemLayout = { wrapperCol: { span: 0, offset: 18 } };
  return (
    <Modal
      title="Add Patient"
      open={isModalOpen}
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel} danger>
          Cancel
        </Button>,
      ]}
    >
      <Row>
        <Col>
          <Form
            {...formItemLayout}
            name="create_patient_form"
            className="create-patient-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            style={{ maxWidth: 600 }}
          >
            <Form.Item
              name="firstName"
              label="First Name"
              rules={[
                {
                  required: true,
                  message: 'Please input the patient first name',
                },
              ]}
            >
              <Input placeholder="First Name" />
            </Form.Item>
            <Form.Item
              name="lastName"
              label="Last Name"
              rules={[
                {
                  required: true,
                  message: 'Please input the patient last name',
                },
              ]}
            >
              <Input placeholder="Last Name" />
            </Form.Item>
            <Form.Item
              label="Gender"
              name="gender"
              rules={[
                { required: true, message: 'Please select the patient gender' },
              ]}
            >
              <Select>
                {genderOptions.map((o, index) => {
                  return (
                    <Select.Option key={index} value={o.value}>
                      {o.label}
                    </Select.Option>
                  );
                })}
              </Select>
            </Form.Item>
            <Form.Item
              label="Date of Birth"
              name="dob"
              rules={[
                {
                  required: true,
                  message: 'Please input the patient date of birth',
                },
              ]}
            >
              <DatePicker format="YYYY-MM-DD HH:mm:ss" />
            </Form.Item>
            <Form.Item
              name="identifier"
              label="Identifier"
              rules={[
                {
                  required: true,
                  message: 'Please input the patient identifier',
                },
              ]}
            >
              <Input placeholder="e.g National ID" />
            </Form.Item>
            <Form.Item {...buttonItemLayout}>
              <Button
                key="submit"
                type="primary"
                loading={loading}
                htmlType="submit"
              >
                Create Patient
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Modal>
  );
};

export default AddPatientModal;
