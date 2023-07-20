import { Select, Input, DatePicker } from 'antd';

export const getFormControl = (controlType: string, controlProperties: any) => {
  let formControl: any;
  switch (controlType) {
    case 'Text':
      console.log('properties', { ...controlProperties });
      formControl = <Input type="text" {...controlProperties} />;
      break;
    case 'Number':
      formControl = <Input type="number" {...controlProperties} />;
      break;
    case 'DateTime':
      formControl = (
        <DatePicker format="YYYY-MM-DD HH:mm:ss" {...controlProperties} />
      );
      break;
    case 'Date':
      formControl = <DatePicker format="YYYY-MM-DD" {...controlProperties} />;
      break;
    case 'Select':
      formControl = <Select {...controlProperties} />;
      break;
    default:
      formControl = <Input type="text" {...controlProperties} />;
  }

  return formControl;
};
