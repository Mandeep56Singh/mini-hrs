import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { PatientsModule } from '../patients/patients.module';
import { ProgramsModule } from '../programs/programs.module';

@Module({
  imports: [PatientsModule,ProgramsModule],
  controllers: [AppController],
  providers: [PrismaService,AppService]
})
export class AppModule {}
