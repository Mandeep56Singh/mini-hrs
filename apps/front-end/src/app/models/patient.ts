export interface Patient {
  uuid: string;
  dob: string;
  gender: string;
  patientNames: { uuid: string; firstName: string; lastName: string;}[];
  patientIdentifiers: { uuid: string; identifier: string;}[];
}

export interface PatientNames {
  uuid: string;
  firstName: string;
  lastName: string;
}

export interface PatientIdentifier {
  uuid: string;
  identifier: string;
  patientId: number;
}

export interface CreatePatientPayload {
  dob: string;
  gender: string;
  patientNames: {
    firstName: string;
    lastName: string;
  };
  patientIdentifiers: {
    identifier: string;
  };
}
