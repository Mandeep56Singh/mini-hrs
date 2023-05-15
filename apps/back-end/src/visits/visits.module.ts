import { Module } from '@nestjs/common';
import { VisitsController } from './visits.controller';
import { VisitsService } from './visits.service';
import { PrismaService } from '../app/prisma/prisma.service';
import { PatientsService } from '../patients/patients.service';
import { LocationsService } from '../locations/locations.service';
import { VisitTypesService } from '../visit-types/visit-types.service';

@Module({
  controllers: [VisitsController],
  providers: [
    VisitsService,
    PrismaService, 
    PatientsService,
    LocationsService,
    VisitTypesService
  ],
})
export class VisitsModule {}
