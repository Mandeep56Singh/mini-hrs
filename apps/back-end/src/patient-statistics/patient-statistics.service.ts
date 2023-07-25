import { HttpException, Injectable } from '@nestjs/common';
import { VisitsService } from '../visits/visits.service';
import { EncountersService } from '../encounters/encounters.service';
import { ProgramEnrollmentsService } from '../program-enrollments/program-enrollments.service';
import {
  DashboardStats,
  PatientDashboardStatsResponse,
} from './dtos/dashboard-statistics.dto';
import { PatientsService } from '../patients/patients.service';
import { ProgramsService } from '../programs/programs.service';
import { FormService } from '../form/form.service';
import { LocationsService } from '../locations/locations.service';

@Injectable()
export class PatientStatisticsService {
  constructor(
    private visitsService: VisitsService,
    private encountersService: EncountersService,
    private enrollmentService: ProgramEnrollmentsService,
    private patientService: PatientsService,
    private programService: ProgramsService,
    private formService: FormService,
    private locationService: LocationsService
  ) {}
  async findPatientDashboardStats(
    patientId: number
  ): Promise<PatientDashboardStatsResponse> {
    const statisticsResponse: PatientDashboardStatsResponse = {
      visits: 0,
      encounters: 0,
      enrolledPrograms: 0,
      completedPrograms: 0,
    };
    const visits: number = await this.visitsService.findPatientVisitsCount(
      patientId
    );
    const encounters: number =
      await this.encountersService.findPatientEncountersCount(patientId);
    const activeEnrollments: number =
      await this.enrollmentService.findActivePatientEnrollmentsCount(patientId);
    const completedEnrollments: number =
      await this.enrollmentService.findCompletedPatientEnrollmentsCount(
        patientId
      );
    statisticsResponse.visits = visits;
    statisticsResponse.encounters = encounters;
    statisticsResponse.enrolledPrograms = activeEnrollments;
    statisticsResponse.completedPrograms = completedEnrollments;

    return statisticsResponse;
  }
  async findDashboardStats(): Promise<DashboardStats> {
    const dashboardStats: DashboardStats = {
      patients: 0,
      programs: 0,
      visits: 0,
      forms: 0,
      locations: 0,
    };
    try {
      dashboardStats.patients = await this.patientService.findCount();
      dashboardStats.programs = await this.programService.count();
      dashboardStats.visits = await this.visitsService.count();
      dashboardStats.forms = await this.formService.count();
      dashboardStats.locations = await this.locationService.count();
      return dashboardStats;
    } catch (e) {
      throw new HttpException(
        'An error occured while generating the counts',
        500
      );
    }
  }
}
