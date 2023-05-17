import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { VisitsService } from './visits.service';
import {
  CreateVisitDto,
  CreateVisitPayload,
  CreateVisitResponse,
  EndVisitPayload,
} from './dtos/create-visit.dto';
import { PatientsService } from '../patients/patients.service';
import { LocationsService } from '../locations/locations.service';
import { VisitTypesService } from '../visit-types/visit-types.service';

@Controller('visits')
export class VisitsController {
  constructor(
    private visitsService: VisitsService,
    private patientsService: PatientsService,
    private locationsService: LocationsService,
    private visitTypesService: VisitTypesService
  ) {}
  @Get()
  findAll() {
    return this.visitsService.findAll();
  }
  @Post()
  async create(@Body() body: CreateVisitDto): Promise<CreateVisitResponse> {
    const { patientUuid, locationUuid, visitTypeUuid, visitDate } = body;
    const patient = await this.patientsService.findIdFromUuid(patientUuid);
    const location = await this.locationsService.findIdFromUuid(locationUuid);
    const visitType = await this.visitTypesService.findIdFromUuid(
      visitTypeUuid
    );

    const visitBody: CreateVisitPayload = {
      patientId: patient.id,
      locationId: location.id,
      visitTypeId: visitType.id,
      visitDate: new Date(visitDate),
    };

    return this.visitsService.create(visitBody);
  }
  @Get('patient')
  async findPatientVisits(@Query('patientUuid') patientUuid: string) {
    const patient = await this.patientsService.findIdFromUuid(patientUuid);
    return this.visitsService.findPatientVisits(patient.id);
  }
  @Patch(':visitUuid')
  async endVisit(
    @Param('visitUuid') visitUuid: string,
    @Body() body: { visitEnd: string }
  ) {
    const visit = await this.visitsService.findIdFromUuid(visitUuid);
    const endVisitPayLoad: EndVisitPayload = {
      visitId: visit.id,
      visitEnd: new Date(body.visitEnd),
    };

    return this.visitsService.endVisit(endVisitPayLoad);
  }
}
