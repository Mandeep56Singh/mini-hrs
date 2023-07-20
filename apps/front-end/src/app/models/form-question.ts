export interface CreateFormQuestionDto {
  formUuid: string;
  questions: { questionUuid: string }[];
}
