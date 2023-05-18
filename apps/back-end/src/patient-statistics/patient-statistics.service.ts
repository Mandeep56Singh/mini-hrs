import { Injectable } from '@nestjs/common';
import { VisitsService } from '../visits/visits.service';
import { EncountersService } from '../encounters/encounters.service';
import { ProgramEnrollmentsService } from '../program-enrollments/program-enrollments.service';
import { DashboardStatsResponse } from './dtos/dashboard-statistics.dto';

@Injectable()
export class PatientStatisticsService {
    constructor(
        private visitsService: VisitsService,
        private encountersService: EncountersService,
        private enrollmentService: ProgramEnrollmentsService){

    }
    async findDashboardStats(patientId: number): Promise<DashboardStatsResponse>{
         const statisticsResponse:DashboardStatsResponse = {
            visits: 0,
            encounters: 0,
            enrolledPrograms: 0,
            completedPrograms: 0
         };
         const visits:number = await  this.visitsService.findPatientVisitsCount(patientId);
         const encounters:number = await this.encountersService.findPatientEncountersCount(patientId);
         const activeEnrollments:number = await this.enrollmentService.findActivePatientEnrollmentsCount(patientId);
         const completedEnrollments:number = await this.enrollmentService.findCompletedPatientEnrollmentsCount(patientId);
         statisticsResponse.visits = visits;
         statisticsResponse.encounters = encounters;
         statisticsResponse.enrolledPrograms = activeEnrollments;
         statisticsResponse.completedPrograms = completedEnrollments;
         

         return statisticsResponse;
    }

}
