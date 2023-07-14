export interface CreateEncounterPayLoad {
  encounterTypeUuid: string;
  visitUuid: string;
  patientUuid: string;
  locationUuid: string;
  encounterDate: Date;
}

export interface Encounter {
  uuid: string;
  encounterDate: string;
  location: {
    name: string;
    uuid: string;
  };
  encounterType: {
    uuid: string;
    name: string;
  };
  patient: {
    uuid: string;
  };
  visit: {
    uuid: string;
  };
  answers?: {
    uuid: string;
    valueText: string;
    valueDateTime: string;
    valueNumber: number;
    question: {
      uuid: string;
      question: string;
    };
  }[];
}
