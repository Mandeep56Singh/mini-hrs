import { Module } from '@nestjs/common';
import { PatientStatisticsController } from './patient-statistics.controller';
import { PatientStatisticsService } from './patient-statistics.service';
import { PrismaService } from '../app/prisma/prisma.service';
import { VisitsService } from '../visits/visits.service';
import { EncountersService } from '../encounters/encounters.service';
import { ProgramEnrollmentsService } from '../program-enrollments/program-enrollments.service';
import { PatientsService } from '../patients/patients.service';

@Module({
  controllers: [PatientStatisticsController],
  providers: [
    PatientStatisticsService,
    PrismaService,
    VisitsService,
    EncountersService,
    ProgramEnrollmentsService,
    PatientsService
  ],
})
export class PatientStatisticsModule {}
