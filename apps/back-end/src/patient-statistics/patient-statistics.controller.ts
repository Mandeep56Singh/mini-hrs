import { Controller, Get, Param } from '@nestjs/common';
import { PatientStatisticsService } from './patient-statistics.service';
import { PatientsService } from '../patients/patients.service';
import { DashboardStatsResponse } from './dtos/dashboard-statistics.dto';

@Controller('patient-statistics')
export class PatientStatisticsController {
    constructor(
        private patientStatisticsService: PatientStatisticsService,
        private patientsService: PatientsService ){

    }
    @Get(':patientUuid')
    async findStatistics(@Param('patientUuid') patientUuid: string): Promise<DashboardStatsResponse>{
         const patient:{id: number} = await this.patientsService.findIdFromUuid(patientUuid);
         return this.patientStatisticsService.findDashboardStats(patient.id);
    }
}
