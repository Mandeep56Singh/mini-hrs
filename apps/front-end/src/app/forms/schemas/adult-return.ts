import { FormSchema } from '../types';
export const AdultReturnForm: FormSchema = {
  name: 'Adult Return Form',
  version: '1.0',
  encounterTypeUuid: '38abde7b-e2c7-42aa-a62a-d535b3e5bdcc',
  questions: [
    {
      id: 'visitDate',
      qstnUuid: '45b6a527-bf05-4312-85f3-4b5298c50e09',
      label: 'Visit Date',
      type: 'date',
    },
    {
      id: 'height',
      qstnUuid: '229ea125-24ce-4fbd-9f6c-8bb6847b95ef',
      label: 'Height',
      type: 'number',
    },
    {
      id: 'weight',
      qstnUuid: '1c1fbf52-a5b6-47cd-be60-e84343db299d',
      label: 'Weight',
      type: 'number',
    },
  ],
};
