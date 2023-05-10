import { Module } from '@nestjs/common';
import { PatientsController } from './patients.controller';
import { PatientsService } from './patients.service';
import { PrismaService } from '../app/prisma/prisma.service';

@Module({
  controllers: [PatientsController],
  providers: [PrismaService,PatientsService],
})
export class PatientsModule {}
