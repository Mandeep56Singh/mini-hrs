import React from 'react';
import TableList from '../table-list/table-list';
import { Question } from '../../models/question';

export interface QuestionProps {
  questions: Question[];
}

const QuestionList: React.FC<QuestionProps> = ({ questions }) => {
  const columns = [
    {
      title: 'Question',
      dataIndex: 'question',
      key: 'question',
    },
    {
      title: 'Answer Type',
      dataIndex: 'answerType',
      key: 'answerType',
    },
  ];

  return (
    <>
      <div></div>
      <TableList
        cols={columns}
        data={questions.map((question) => {
          return {
            key: question.uuid,
            question: question.question,
            answerType: question.answerType.name,
          };
        })}
      />
    </>
  );
};

export default QuestionList;
