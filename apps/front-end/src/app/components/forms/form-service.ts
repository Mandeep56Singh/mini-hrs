import { AdultInitialForm } from './schemas/adult-initial';
import { AdultReturnForm } from './schemas/adult-return';
import { TestForm } from './schemas/test';
import { FormSchema } from './types';

export const getFormByEncounterType = (
  encounterTypeUuid: string
): FormSchema => {
  let form!: FormSchema;
  switch (encounterTypeUuid) {
    case '5dd960cc-077f-4d92-bed5-58f07d5532b3':
      form = AdultInitialForm;
      break;
    case '38abde7b-e2c7-42aa-a62a-d535b3e5bdcc':
      form = AdultReturnForm;
      break;
    case '63ae6581-a415-4bc8-ae11-f29ae79b2e70':
      form = TestForm;
      break;
    default:
      form = TestForm;
  }

  return form;
};
