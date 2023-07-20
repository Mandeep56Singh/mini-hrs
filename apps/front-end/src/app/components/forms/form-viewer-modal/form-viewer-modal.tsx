import React from 'react';
import { Button, Modal, Row, Col } from 'antd';
import { Form } from '../../../models/form';
import FormRenderer from '../form-renderer/form-renderer';

interface viewEncounterProps {
  isModalOpen: boolean;
  form: Form;
  handleCancel: () => void;
  handleSave: () => void;
}

const FormViewerModal: React.FC<viewEncounterProps> = ({
  isModalOpen,
  form,
  handleCancel,
  handleSave,
}) => {
  return (
    <Modal
      title=""
      open={isModalOpen}
      footer={[
        <Button key="back" onClick={handleCancel} danger>
          Close
        </Button>,
      ]}
    >
      <Row>
        <Col span={24}>
          <FormRenderer form={form} onSave={handleSave} />
        </Col>
      </Row>
    </Modal>
  );
};

export default FormViewerModal;
