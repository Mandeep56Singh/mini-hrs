export interface FormDto {
  uuid: string;
  name: string;
  encounterType: {
    uuid: string;
    name: string;
  };
  formQuestions: {
    question: {
      uuid: string;
      question: string;
      answerType: {
        name: string;
        uuid: string;
      };
    };
  }[];
}
