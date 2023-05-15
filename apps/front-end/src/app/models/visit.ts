export interface CreateVisitPayload {
  visitDate: Date;
  patientUuid: string;
  locationUuid: string;
  visitTypeUuid: string;
}

export interface Visit {
  uuid: string;
  visitDate: string;
  patient: {
    uuid: string;
  };
  visitType: {
    uuid: string;
    name: string;
  };
  location: {
    uuid: string;
    name: string;
  };
}
