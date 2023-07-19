export interface Question {
  id: string;
  qstnUuid: string;
  label: string;
  type: string;
}

export interface FormSchema {
  name: string;
  version: string;
  encounterTypeUuid: string;
  questions: Question[];
}
