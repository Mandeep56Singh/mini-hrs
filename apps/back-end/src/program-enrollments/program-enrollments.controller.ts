import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ProgramEnrollmentsService } from './program-enrollments.service';
import {
  CreateProgramEnrollmentDto,
  CreateEnrollmentBody,
} from './dtos/create-program-enrollment.dto';
import { PatientsService } from '../patients/patients.service';
import { ProgramsService } from '../programs/programs.service';
import { LocationsService } from '../locations/locations.service';

@Controller('program-enrollments')
export class ProgramEnrollmentsController {
  constructor(
    private programEnrollmentService: ProgramEnrollmentsService,
    private patientService: PatientsService,
    private programsService: ProgramsService,
    private locationService: LocationsService
  ) {}

  @Get()
  findAll() {
    return this.programEnrollmentService.findAll();
  }
  @Get('patient')
  findOne(@Query() req: { patientUuid: string; completed: string }) {
    const { patientUuid, completed } = req;
    const completedProgram = completed === 'true' ? true : false;
    return this.programEnrollmentService.findPatientEnrollments(
      patientUuid,
      completedProgram
    );
  }
  @Post()
  async create(@Body() body: CreateProgramEnrollmentDto) {
    const { patientUuid, programUuid, locationUuid } = body;

    const patient = await this.patientService.findIdFromUuid(patientUuid);
    const program = await this.programsService.findIdFromUuid(programUuid);
    const location = await this.locationService.findIdFromUuid(locationUuid);

    const newEnrollmentBody: CreateEnrollmentBody = {
      patientId: patient.id,
      locationId: location.id,
      programId: program.id,
      startDate: new Date(),
    };

    return this.programEnrollmentService.create(newEnrollmentBody);
  }
}
