import { FormSchema } from '../types';
export const AdultInitialForm: FormSchema = {
  name: 'Adult Initial Form',
  version: '1.0',
  encounterTypeUuid: '5dd960cc-077f-4d92-bed5-58f07d5532b3',
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
