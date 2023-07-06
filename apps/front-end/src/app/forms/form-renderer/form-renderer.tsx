import React from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { Input, Button } from 'antd';
import { FormSchema } from '../types';

interface FormRendererProps{
  formSchema: FormSchema
}

const FormRenderer: React.FC<FormRendererProps> = ({formSchema}) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit: SubmitHandler<any> = (data) => console.log(data);

  return (<form onSubmit={handleSubmit(onSubmit)}>
       <h2>Name: {formSchema.name}</h2>
       {
        formSchema.questions.map((q)=>{
            let formControl;
            switch(q.type){
                case 'date':
                  formControl = (
                  <div key={q.id}>
                  <label htmlFor={q.id}>{q.label} : </label>
                  <Controller
                      name={q.id}
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
                      name={q.id}
                      control={control}
                      render={({ field }) => <Input type='text' {...field} />}
                    />
                    </div>
                  );
                  break;
                case 'number':
                    formControl = (
                      <div key={q.id}>
                      <label htmlFor={q.id}>{q.label} : </label>
                      <Controller
                      name={q.id}
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
