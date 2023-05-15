import { Module } from '@nestjs/common';
import { VisitTypesController } from './visit-types.controller';
import { VisitTypesService } from './visit-types.service';
import { PrismaService } from '../app/prisma/prisma.service';
import { ProgramsService } from '../programs/programs.service';

@Module({
  controllers: [VisitTypesController],
  providers: [PrismaService,VisitTypesService, ProgramsService],
})
export class VisitTypesModule {}
