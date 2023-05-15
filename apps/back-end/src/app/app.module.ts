import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { PatientsModule } from '../patients/patients.module';
import { ProgramsModule } from '../programs/programs.module';
import { ProgramEnrollmentsModule } from '../program-enrollments/program-enrollments.module';
import { LocationsModule } from '../locations/locations.module';
import { VisitTypesModule } from '../visit-types/visit-types.module';
import { VisitsModule } from '../visits/visits.module';

@Module({
  imports: [
    PatientsModule,
    ProgramsModule,
    ProgramEnrollmentsModule,
    LocationsModule,
    VisitTypesModule,
    VisitsModule
  ],
  controllers: [AppController],
  providers: [PrismaService, AppService],
})
export class AppModule {}
