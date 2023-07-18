export interface Question {
  uuid: string;
  question: string;
  answerType: {
    uuid: string;
    name: string;
  };
}

export interface QuestionDto {
  question: string;
  answerTypeUuid: string;
}
