export interface createPatientDto {
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

export interface Patient{
  uuid: string;
  dob: Date
  gender: string;
  patientNames: { uuid: string; firstName: string; lastName: string;}[];
  patientIdentifiers: { uuid: string; identifier: string;}[];
}

export interface SearchPatientResponseDto{
  patient: Patient;
}
