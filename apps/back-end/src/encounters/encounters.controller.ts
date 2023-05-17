import { Body, Controller, Get, Post } from '@nestjs/common';
import { EncountersService } from './encounters.service';
import { CreateEncountePayloadDto, CreateEncounterDto } from './dtos/encounter.dto';
import { LocationsService } from '../locations/locations.service';
import { PatientsService } from '../patients/patients.service';
import { VisitsService } from '../visits/visits.service';
import { EncounterTypesService } from '../encounter-types/encounter-types.service';

@Controller('encounters')
export class EncountersController {
    constructor(
        private encounterService: EncountersService,
        private locationsService: LocationsService,
        private patientsService: PatientsService,
        private visitsService: VisitsService,
        private encounterTypesService: EncounterTypesService){

    }
    @Get()
    findAll(){
        return this.encounterService.findAll();
    }
    @Post()
    async create(@Body() body: CreateEncounterDto){
       const { encounterTypeUuid, encounterDate, locationUuid, visitUuid, patientUuid } = body;
       const encounterType = await this.encounterTypesService.findIdFromUuid(encounterTypeUuid);
       const encounterDateTime = new Date(encounterDate);
       const location = await this.locationsService.findIdFromUuid(locationUuid);
       const visit = await this.visitsService.findIdFromUuid(visitUuid);
       const patient = await this.patientsService.findIdFromUuid(patientUuid);

       const payload: CreateEncountePayloadDto = {
           encounterDate: encounterDateTime,
           locationId: location.id,
           encounterTypeId: encounterType.id,
           patientId: patient.id,
           visitId: visit.id
       };
       return this.encounterService.create(payload);
    }
}
