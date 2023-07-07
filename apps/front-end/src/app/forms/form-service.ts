import { TestForm } from './schemas/test';
import { FormSchema } from './types';

export const getFormByEncounterType = (
  encounterTypeUuid: string
): FormSchema => {
  let form!: FormSchema;
  switch (encounterTypeUuid) {
    case '38abde7b-e2c7-42aa-a62a-d535b3e5bdcc':
      form = TestForm;
      break;
    default:
      form = TestForm;
  }

  return form;
};
