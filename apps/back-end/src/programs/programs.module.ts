import { Module } from '@nestjs/common';
import { ProgramsController } from './programs.controller';
import { ProgramsService } from './programs.service';
import { PrismaService } from '../app/prisma/prisma.service';

@Module({
  controllers: [ProgramsController],
  providers: [PrismaService,ProgramsService],
})
export class ProgramsModule {}
