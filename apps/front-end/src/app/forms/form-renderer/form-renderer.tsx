import React from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { Input, Button } from 'antd';
import { FormSchema } from '../types';

interface FormRendererProps{
  formSchema: FormSchema;
  onSave:(data: any)=>any;
}

const FormRenderer: React.FC<FormRendererProps> = ({formSchema,onSave}) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit: SubmitHandler<any> = (data) => {
    const answers = generateAnswersPayload(data);;
    onSave(answers);
  };
  const generateAnswersPayload = (data: any)=>{
     return Object.keys(data).map((k: string)=>{
          return {
            questionUuid: k,
            answer: data[k]
          }
     });
  };

  return (<form onSubmit={handleSubmit(onSubmit)}>
       <h2>{formSchema.name}</h2>
       {
        formSchema.questions.map((q)=>{
            let formControl;
            switch(q.type){
                case 'date':
                  formControl = (
                  <div key={q.qstnUuid}>
                  <label htmlFor={q.qstnUuid}>{q.label} : </label>
                  <Controller
                      name={q.qstnUuid}
                      control={control}
                      render={({ field }) => <Input type='date' {...field} />}
                    />
                  </div>
                  )
                  break;
                case 'text':
                  formControl = (
                    <div key={q.id}>
                    <label htmlFor={q.id}>{q.label} : </label>
                    <Controller
                      name={q.qstnUuid}
                      control={control}
                      render={({ field }) => <Input type='text' {...field} />}
                    />
                    </div>
                  );
                  break;
                case 'number':
                    formControl = (
                      <div key={q.id}>
                      <label htmlFor={q.qstnUuid}>{q.label} : </label>
                      <Controller
                      name={q.qstnUuid}
                      control={control}
                      render={({ field }) => <Input type='number' {...field} />}
                    />
                      </div>
                    )

            }
            return formControl;
        })
       }
        <Button
          key="submit"
          type="primary"
          htmlType="submit"
        >
          Save
        </Button>
  </form>);
};

export default FormRenderer;
