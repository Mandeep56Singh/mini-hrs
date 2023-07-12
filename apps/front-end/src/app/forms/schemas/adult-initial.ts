import { FormSchema } from '../types';
export const AdultInitialForm: FormSchema = {
  name: 'Adult Initial Form',
  version: '1.0',
  encounterTypeUuid: '5dd960cc-077f-4d92-bed5-58f07d5532b3',
  questions: [
    {
      id: 'visitDate',
      qstnUuid: '78dff347-125d-40a8-8fb5-95c7bf255759',
      label: 'Visit Date',
      type: 'date',
    },
    {
      id: 'height',
      qstnUuid: '98411ca6-c571-4453-8f6c-10ecf5ffe36f',
      label: 'Height',
      type: 'number',
    },
    {
      id: 'weight',
      qstnUuid: '2d4b60b6-da99-44d1-bdaf-63d0423d8eb3',
      label: 'Weight',
      type: 'number',
    },
  ],
};
