export interface CreateFormQuestionDto {
  formUuid: string;
  questions: { questionUuid: string }[];
}

export interface CreateFormQuestionsPayload {
  formId: number;
  questionId: number;
}
