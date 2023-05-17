export interface CreateEncounterDto{
        locationUuid: string;
        encounterTypeUuid: string;
        patientUuid: string;
        visitUuid: string;
        encounterDate: string;
}

export interface CreateEncountePayloadDto{
    locationId: number;
    encounterTypeId: number;
    patientId: number;
    visitId: number;
    encounterDate: Date;
}