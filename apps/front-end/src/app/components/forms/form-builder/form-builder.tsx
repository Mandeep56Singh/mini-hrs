import { useLoaderData } from 'react-router-dom';

/* eslint-disable-next-line */
export interface FormBuilderProps {}

export function FormBuilder(props: FormBuilderProps) {
  const data = useLoaderData() as { formUuid: string };
  return (
    <div>
      <h1>Welcome to FormBuilder!</h1>
    </div>
  );
}

export default FormBuilder;
