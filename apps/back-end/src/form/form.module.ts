import { Module } from '@nestjs/common';
import { FormController } from './form.controller';
import { FormService } from './form.service';
import { PrismaService } from '../app/prisma/prisma.service';
import { EncounterTypesService } from '../encounter-types/encounter-types.service';

@Module({
  controllers: [FormController],
  providers: [FormService, PrismaService, EncounterTypesService],
})
export class FormModule {}
