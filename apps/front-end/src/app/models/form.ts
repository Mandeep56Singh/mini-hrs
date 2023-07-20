export interface CreateFormDto {
  name: string;
  encounterTypeUuid: string;
}

export interface Form {
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
