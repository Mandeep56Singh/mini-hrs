import React from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { Input, Button, Col, Row } from 'antd';
import { Form } from '../../../models/form';
import Loader from '../../loader/loader';

interface FormRendererProps {
  form: Form;
  onSave: (data: any) => any;
}

const FormRenderer: React.FC<FormRendererProps> = ({ form, onSave }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit: SubmitHandler<any> = (data) => {
    const answers = generateAnswersPayload(data);
    onSave(answers);
  };
  const generateAnswersPayload = (data: any) => {
    return Object.keys(data).map((k: string) => {
      return {
        questionUuid: k,
        answer: data[k],
      };
    });
  };

  if (!form) {
    return <Loader />;
  }

  return (
    <Row>
      <Col span={24}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h4>{form.name}</h4>
          {form.formQuestions.map((fq, index) => {
            const q = fq.question;
            let formControl;
            switch (q?.answerType?.name) {
              case 'Date':
                formControl = (
                  <div key={index}>
                    <label htmlFor={q.uuid}>{q.question} : </label>
                    <Controller
                      name={q.uuid}
                      control={control}
                      render={({ field }) => <Input type="date" {...field} />}
                    />
                  </div>
                );
                break;
              case 'DateTime':
                formControl = (
                  <div key={index}>
                    <label htmlFor={q.uuid}>{q.question} : </label>
                    <Controller
                      name={q.uuid}
                      control={control}
                      render={({ field }) => <Input type="date" {...field} />}
                    />
                  </div>
                );
                break;
              case 'Text':
                formControl = (
                  <div key={index}>
                    <label htmlFor={q.uuid}>{q.question} : </label>
                    <Controller
                      name={q.uuid}
                      control={control}
                      render={({ field }) => <Input type="text" {...field} />}
                    />
                  </div>
                );
                break;
              case 'Number':
                formControl = (
                  <div key={index}>
                    <label htmlFor={q.uuid}>{q.question} : </label>
                    <Controller
                      name={q.uuid}
                      control={control}
                      render={({ field }) => <Input type="number" {...field} />}
                    />
                  </div>
                );
            }
            return formControl;
          })}
          <Button key="submit" type="primary" htmlType="submit">
            Save
          </Button>
        </form>
      </Col>
    </Row>
  );
};

export default FormRenderer;
