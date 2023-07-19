export interface CreateFormDto {
  name: string;
  encounterTypeUuid: string;
}

export interface CreateFormPayload {
  name: string;
  encounterTypeId: number;
}
