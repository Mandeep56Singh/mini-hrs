export interface createPatientDto {
  patientNames: {
    firstName: string;
    lastName: string;
  };
  patientIdentifiers: {
    identifier: string;
  };
}
