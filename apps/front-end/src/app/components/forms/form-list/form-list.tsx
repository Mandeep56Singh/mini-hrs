import React, { useState } from 'react';
import { Button } from 'antd';
import { EditOutlined, EyeOutlined } from '@ant-design/icons';
import TableList from '../../table-list/table-list';
import { useForm } from '../../../resources/hooks/use-form';
import ErrorAlert from '../../error/error-alert';
import Loader from '../../loader/loader';
import { useNavigate } from 'react-router-dom';
import FormViewerModal from '../form-viewer-modal/form-viewer-modal';
import { Form } from '../../../models/form';

const FormList: React.FC = () => {
  const { forms, error, isLoading, isError } = useForm();
  const navigate = useNavigate();
  const [isViewModalOpen, setIsViewModalOpen] = useState<boolean>(false);
  const [selectedForm, setSelectedForm] = useState<Form>();

  const editHandler = (formUuid: string) => {
    navigate(`./${formUuid}`);
  };
  const viewHandler = (form: Form) => {
    setSelectedForm(form);
    setIsViewModalOpen(true);
  };
  const cancelModalHandler = () => {
    setIsViewModalOpen(false);
  };
  const saveHandler = () => {};

  if (isError) {
    return <ErrorAlert error={error} />;
  }
  if (isLoading) {
    return <Loader />;
  }

  const columns = [
    {
      title: 'Form',
      dataIndex: 'form',
      key: 'form',
    },
    {
      title: 'Encounter Type',
      dataIndex: 'encounterType',
      key: 'encounterType',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
    },
  ];
  return (
    <>
      <TableList
        cols={columns}
        data={forms.map((form) => {
          return {
            key: form.uuid,
            form: form.name,
            encounterType: form.encounterType.name,
            action: (
              <>
                <Button type="default" onClick={() => viewHandler(form)}>
                  <EyeOutlined />
                </Button>
                <Button type="default" onClick={() => editHandler(form.uuid)}>
                  <EditOutlined />
                </Button>
              </>
            ),
          };
        })}
      />
      {selectedForm ? (
        <FormViewerModal
          isModalOpen={isViewModalOpen}
          form={selectedForm}
          handleCancel={cancelModalHandler}
          handleSave={saveHandler}
        />
      ) : (
        ''
      )}
    </>
  );
};

export default FormList;
