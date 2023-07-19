import React from 'react';
import TableList from '../../table-list/table-list';
import { useForm } from '../../../resources/hooks/use-form';
import ErrorAlert from '../../error/error-alert';
import Loader from '../../loader/loader';

const FormList: React.FC = () => {
  const { forms, error, isLoading, isError } = useForm();

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
          action: '',
        };
      })}
    />
  );
};

export default FormList;
