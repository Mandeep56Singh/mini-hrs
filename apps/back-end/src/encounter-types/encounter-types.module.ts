import { Module } from '@nestjs/common';
import { EncounterTypesService } from './encounter-types.service';
import { EncounterTypesController } from './encounter-types.controller';
import { PrismaService } from '../app/prisma/prisma.service';
import { VisitTypesService } from '../visit-types/visit-types.service';

@Module({
  providers: [EncounterTypesService, PrismaService,VisitTypesService],
  controllers: [EncounterTypesController],
})
export class EncounterTypesModule {}
