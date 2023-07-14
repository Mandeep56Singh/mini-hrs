export interface AnsDto {
  questionUuid: string;
  answer: string | number;
}
export interface CreateAnswerDto {
  encounterUuid: string;
  answers: AnsDto[];
}

export interface AnswerDto {
  encounterId: number;
  questionId: number;
  valueText?: string;
  valueNumber?: number;
  valueDateTime?: Date;
}
