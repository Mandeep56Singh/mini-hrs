import { FormSchema } from '../types';
export const TestForm: FormSchema = {
  name: 'Test Form',
  version: '1.0',
  encounterTypeUuid: '63ae6581-a415-4bc8-ae11-f29ae79b2e70',
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