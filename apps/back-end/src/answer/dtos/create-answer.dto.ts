export interface AnsDto {
  questionUuid: string;
  answerType: 'Text' | 'Number' | 'Date' | 'Datetime';
  answer: string | number;
}
export interface CreateAnswerDto {
  encounterUuid: string;
  answers: AnsDto[];
}

export interface AnswerDto {
  encounterId: number;
  questionId: number;
  answerTypeId: number;
  valueText?: string;
  valueNumber?: number;
  valueDateTime?: Date;
}
