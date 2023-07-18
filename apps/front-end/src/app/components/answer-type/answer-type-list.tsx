import React from 'react';
import TableList from '../table-list/table-list';
import { useAnswerTypes } from '../../resources/hooks/use-answer-type';
import ErrorAlert from '../error/error-alert';
import Loader from '../loader/loader';

const AnswerTypeList: React.FC = () => {
  const { answerTypes, error, isLoading, isError } = useAnswerTypes();
  const columns = [
    {
      title: 'Answer Type',
      dataIndex: 'answerType',
      key: 'answerType',
    },
  ];

  if (isError) {
    return <ErrorAlert error={error} />;
  }
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div>
      <TableList
        cols={columns}
        data={answerTypes.map((at) => {
          return {
            key: at.uuid,
            answerType: at.name,
          };
        })}
      />
    </div>
  );
};

export default AnswerTypeList;
