import { Module } from '@nestjs/common';
import { ProgramEnrollmentsService } from './program-enrollments.service';
import { ProgramEnrollmentsController } from './program-enrollments.controller';
import { PrismaService } from '../app/prisma/prisma.service';
import { PatientsService } from '../patients/patients.service';
import { LocationsService } from '../locations/locations.service';
import { ProgramsService } from '../programs/programs.service';

@Module({
  providers: [
    PrismaService,
    ProgramEnrollmentsService,
    LocationsService,
    ProgramsService,
    PatientsService,
  ],
  controllers: [ProgramEnrollmentsController],
})
export class ProgramEnrollmentsModule {}
