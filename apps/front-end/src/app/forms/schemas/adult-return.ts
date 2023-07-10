import { FormSchema } from '../types';
export const AdultReturnForm: FormSchema = {
  name: 'Adult Return Form',
  version: '1.0',
  encounterTypeUuid: '38abde7b-e2c7-42aa-a62a-d535b3e5bdcc',
  questions: [
    {
      id: 'visitDate',
      label: 'Visit Date',
      type: 'date',
    },
    {
      id: 'height',
      label: 'Height',
      type: 'number',
    },
    {
      id: 'weight',
      label: 'Weight',
      type: 'number',
    },
  ],
};
