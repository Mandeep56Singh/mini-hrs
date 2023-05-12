import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { PatientsModule } from '../patients/patients.module';
import { ProgramsModule } from '../programs/programs.module';
import { ProgramEnrollmentsModule } from '../program-enrollments/program-enrollments.module';
import { LocationsModule } from '../locations/locations.module';

@Module({
  imports: [
    PatientsModule,
    ProgramsModule,
    ProgramEnrollmentsModule,
    LocationsModule,
  ],
  controllers: [AppController],
  providers: [PrismaService, AppService],
})
export class AppModule {}
