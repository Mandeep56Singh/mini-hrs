export interface PatientProgramEnrollment{
     uuid: string;
     startDate: string;
     endDate: string;
     patient: {
        uuid: string;
    },
    program: {
        uuid: string;
        name: string;
    },
    location: {
         uuid: string;
         name: string;
    }
}