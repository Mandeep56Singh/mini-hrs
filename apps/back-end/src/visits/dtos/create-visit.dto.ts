export interface CreateVisitDto {
  visitDate: string;
  patientUuid: string;
  locationUuid: string;
  visitTypeUuid: string;
}

export interface CreateVisitPayload {
  visitDate: Date;
  patientId: number;
  locationId: number;
  visitTypeId: number;
}

export interface CreateVisitResponse {
  uuid: string;
  visitDate: Date;
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
