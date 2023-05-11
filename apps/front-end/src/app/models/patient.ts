export interface Patient {
  id: number;
  dob: string;
  gender: string;
  uuid: string;
  voided: boolean;
  createdAt: string;
  updatedAt: string;
  patientNames: PatientNames[];
  patientIdentifiers: PatientIdentifier[];
}

export interface PatientNames {
  id: number;
  firstName: string;
  lastName: string;
  patientId: number;
  uuid: string;
  voided: boolean;
  createdAt: string;
  updatedAt: string;
  patient?: Patient;
}

export interface PatientIdentifier {
  id: number;
  identifier: string;
  patientId: number;
  uuid: string;
  voided: boolean;
  createdAt: string;
  updatedAt: string;
  patient?: Patient;
}
