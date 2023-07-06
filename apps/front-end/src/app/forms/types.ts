export interface Question {
  id: string;
  label: string;
  type: string;
}

export interface FormSchema {
  name: string;
  version: string;
  encounterTypeUuid: string;
  questions: Question[];
}
