export interface CreateQuestionDto {
  question: string;
  answerTypeUuid: string;
}

export interface QuestionDto {
  uuid: string;
  question: string;
  answerType: {
    uuid: string;
    name: string;
  };
}
