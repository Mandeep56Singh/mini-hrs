import { Module } from '@nestjs/common';
import { ProgramEnrollmentsService } from './program-enrollments.service';
import { ProgramEnrollmentsController } from './program-enrollments.controller';
import { PrismaService } from '../app/prisma/prisma.service';

@Module({
  providers: [PrismaService,ProgramEnrollmentsService],
  controllers: [ProgramEnrollmentsController],
})
export class ProgramEnrollmentsModule {}
