import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { useQuestions } from '../../../resources/hooks/use-question';
import Loader from '../../loader/loader';
import ErrorAlert from '../../error/error-alert';
import { Question } from '../../../models/question';
import { Row, Col, Select, Form, Button, Alert } from 'antd';
import { getFormControl } from '../form-builder.service';
import { AlertMessage } from '../../../models/alert-message';
import './form-builder.css';
import { CreateFormQuestionDto } from '../../../models/form-question';
import { createFormQuestion } from '../../../resources/form-question.resource';
import { getErrorMessage } from '../../../utils/error-message-helper';

/* eslint-disable-next-line */
export interface FormBuilderProps {}

export function FormBuilder(props: FormBuilderProps) {
  const data = useLoaderData() as { formUuid: string };
  const { questions, isError, isLoading, error } = useQuestions();
  const formItemLayout = { labelCol: { span: 4 }, wrapperCol: { span: 16 } };
  const buttonItemLayout = { wrapperCol: { span: 0, offset: 18 } };
  const [dynamicQstns, setDynamicQuestions] = useState<Question[]>([]);
  const [atMsg, setAtMsg] = useState<AlertMessage>();
  const [selectedQuestionUuid, setSelectedQstn] = useState<string>('');

  const onFinish = async (values: any) => {
    let alertMsg: AlertMessage = {
      message: '',
      type: 'info',
    };
    const payload: CreateFormQuestionDto = {
      formUuid: data.formUuid,
      questions: dynamicQstns.map((q) => {
        return {
          questionUuid: q.uuid,
        };
      }),
    };
    try {
      await createFormQuestion(payload);
      alertMsg = {
        message: 'Form Questions have been added successfully',
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
  const addDynamicQuestion = () => {
    let alertMsg: AlertMessage = {
      message: '',
      type: 'info',
    };
    const qstnIndex = dynamicQstns.findIndex((q) => {
      return q.uuid === selectedQuestionUuid;
    });
    if (qstnIndex === -1) {
      const qstn = getQuestion(selectedQuestionUuid);
      const newDynamicQstns = [...dynamicQstns, qstn];
      setDynamicQuestions(newDynamicQstns);
    } else {
      alertMsg = {
        message: 'A similar question has been added',
        type: 'error',
      };
    }
    setAtMsg(alertMsg);
  };
  const selectQuestionHandler = (value: string) => {
    setSelectedQstn(value);
  };
  const getQuestion = (questionUuid: string) => {
    return questions.filter((q) => {
      return q.uuid === questionUuid;
    })[0];
  };
  if (isError) {
    return <ErrorAlert error={error} />;
  }
  if (isLoading) {
    return <Loader />;
  }
  return (
    <Row>
      <Col span={24} className="form-column">
        {atMsg && atMsg.message.length > 0 ? (
          <Alert message={atMsg.message} type={atMsg.type} showIcon />
        ) : (
          ''
        )}
      </Col>
      <Col span={24} className="form-column">
        <Select
          placeholder="Select Question"
          style={{ width: 300 }}
          onChange={(e) => selectQuestionHandler(e)}
          options={questions.map((q) => {
            return { value: q.uuid, label: q.question };
          })}
        />
        <Button type="primary" onClick={addDynamicQuestion}>
          +
        </Button>
      </Col>
      <Col span={24} className="form-column">
        <Form
          {...formItemLayout}
          name="create_form_form"
          className="create-form-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          style={{ maxWidth: 800 }}
        >
          {dynamicQstns.map((dq) => {
            return (
              <Form.Item name={dq.uuid} label={dq.question} key={dq.uuid}>
                {getFormControl(dq.answerType.name, { disabled: true })}
              </Form.Item>
            );
          })}
          <Form.Item {...buttonItemLayout}>
            <Button key="submit" type="primary" htmlType="submit">
              Save Form
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}

export default FormBuilder;
