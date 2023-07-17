import {
  Body,
  Controller,
  Get,
  Patch,
  Post,
  Query,
  Param,
  UseGuards,
  ForbiddenException,
} from '@nestjs/common';
import { ProgramEnrollmentsService } from './program-enrollments.service';
import {
  CreateProgramEnrollmentDto,
  CreateEnrollmentBody,
  CompleteEnrollmentDto,
} from './dtos/create-program-enrollment.dto';
import { PatientsService } from '../patients/patients.service';
import { ProgramsService } from '../programs/programs.service';
import { LocationsService } from '../locations/locations.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
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

    const activeProgramEnrollmentCount =
      await this.programEnrollmentService.findPatientProgramEnrolmentCount(
        patient.id,
        program.id
      );

    if (activeProgramEnrollmentCount > 0) {
      throw new ForbiddenException(
        'Patient is already enrolled in the program. Please complete current active enrollment'
      );
    }

    const newEnrollmentBody: CreateEnrollmentBody = {
      patientId: patient.id,
      locationId: location.id,
      programId: program.id,
      startDate: new Date(),
    };

    return this.programEnrollmentService.create(newEnrollmentBody);
  }
  @Patch(':enrollmentUuid')
  async complete(
    @Param('enrollmentUuid') enrollmentUuid: string,
    @Body() body: CompleteEnrollmentDto
  ) {
    const enrollment = await this.programEnrollmentService.findIdFromUuid(
      enrollmentUuid
    );
    const completePayLoad = {
      enrollmentId: enrollment.id,
      endDate: new Date(body.endDate),
    };
    return this.programEnrollmentService.complete(completePayLoad);
  }
}
