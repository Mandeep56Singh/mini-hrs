import { Module } from '@nestjs/common';
import { EncountersService } from './encounters.service';
import { EncountersController } from './encounters.controller';
import { PrismaService } from '../app/prisma/prisma.service';
import { LocationsService } from '../locations/locations.service';
import { PatientsService } from '../patients/patients.service';
import { VisitsService } from '../visits/visits.service';
import { EncounterTypesService } from '../encounter-types/encounter-types.service';


@Module({
  providers: [
    EncountersService,
    PrismaService,
    LocationsService,
    PatientsService,
    VisitsService,
    EncounterTypesService
  ],
  controllers: [EncountersController],
})
export class EncountersModule {}
