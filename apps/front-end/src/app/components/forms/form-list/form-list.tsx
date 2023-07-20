import React from 'react';
import { Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import TableList from '../../table-list/table-list';
import { useForm } from '../../../resources/hooks/use-form';
import ErrorAlert from '../../error/error-alert';
import Loader from '../../loader/loader';
import { useNavigate } from 'react-router-dom';

const FormList: React.FC = () => {
  const { forms, error, isLoading, isError } = useForm();
  const navigate = useNavigate();

  const editHandler = (formUuid: string) => {
    navigate(`./${formUuid}`);
  };

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
    <TableList
      cols={columns}
      data={forms.map((form) => {
        return {
          key: form.uuid,
          form: form.name,
          encounterType: form.encounterType.name,
          action: (
            <Button type="default" onClick={() => editHandler(form.uuid)}>
              <EditOutlined />
            </Button>
          ),
        };
      })}
    />
  );
};

export default FormList;
