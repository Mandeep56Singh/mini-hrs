import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { PatientStatisticsService } from './patient-statistics.service';
import { PatientsService } from '../patients/patients.service';
import {
  PatientDashboardStatsResponse,
  DashboardStats,
} from './dtos/dashboard-statistics.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
@UseGuards(JwtAuthGuard)
@Controller('patient-statistics')
export class PatientStatisticsController {
  constructor(
    private patientStatisticsService: PatientStatisticsService,
    private patientsService: PatientsService
  ) {}
  @Get(':patientUuid')
  async findStatistics(
    @Param('patientUuid') patientUuid: string
  ): Promise<PatientDashboardStatsResponse> {
    const patient: { id: number } = await this.patientsService.findIdFromUuid(
      patientUuid
    );
    return this.patientStatisticsService.findPatientDashboardStats(patient.id);
  }
  @Get()
  findDashboardStats(): Promise<DashboardStats> {
    return this.patientStatisticsService.findDashboardStats();
  }
}
