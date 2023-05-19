export interface PatientSearchResponse{
         identifier: string;
         uuid: string;
         patient: {
             dob: string;
             gender: string;
             uuid: string;
             patientNames: [
                {
                     firstName: string;
                     lastName: string;
                }
            ],
            patientIdentifiers: [
                {
                    identifier: string;
                }
            ]
        }
}

export interface PatientSearchTableData{
        key: string;
        identifier: string;
        dob: string;
        gender: string;
        patientUuid:string;
}