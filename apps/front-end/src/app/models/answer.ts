export interface EncounterAnswers {
  encounterUuid: string;
  answers: { questionUuid: string; answer: string | number }[];
}
