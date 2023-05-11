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
