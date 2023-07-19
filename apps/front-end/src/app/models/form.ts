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
}
