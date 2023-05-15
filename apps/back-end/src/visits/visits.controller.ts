import { Body, Controller, Get, Post } from '@nestjs/common';
import { VisitsService } from './visits.service';
import { CreateVisitDto, CreateVisitPayload, CreateVisitResponse } from './dtos/create-visit.dto';
import { PatientsService } from '../patients/patients.service';
import { LocationsService } from '../locations/locations.service';
import { VisitTypesService } from '../visit-types/visit-types.service';

@Controller('visits')
export class VisitsController {
    constructor(
        private visitsService: VisitsService,
        private patientsService: PatientsService,
        private locationsService: LocationsService,
        private visitTypesService: VisitTypesService){

    }
    @Get()
    findAll(){
        return this.visitsService.findAll();
    }
    @Post()
    async create(@Body() body: CreateVisitDto): Promise<CreateVisitResponse>{
        const { patientUuid, locationUuid, visitTypeUuid, visitDate } = body;
        const patient = await this.patientsService.findIdFromUuid(patientUuid);
        const location = await this.locationsService.findIdFromUuid(locationUuid);
        const visitType = await this.visitTypesService.findIdFromUuid(visitTypeUuid)

        const visitBody: CreateVisitPayload = {
            patientId: patient.id,
            locationId: location.id,
            visitTypeId: visitType.id,
            visitDate: new Date(visitDate)
        };

        return this.visitsService.create(visitBody);
       
    }
}
