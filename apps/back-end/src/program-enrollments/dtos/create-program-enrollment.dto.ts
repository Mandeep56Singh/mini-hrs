export interface CreateProgramEnrollmentDto{
    programUuid: string;
    patientUuid: string;
    locationUuid: string;
    startDate?: string;
}

export interface CreateEnrollmentBody{
    programId: number;
    locationId: number;
    patientId:number;
    startDate: Date;
}