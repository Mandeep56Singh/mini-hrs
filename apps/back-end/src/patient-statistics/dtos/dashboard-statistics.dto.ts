export interface PatientDashboardStatsResponse {
  visits: number;
  encounters: number;
  enrolledPrograms: number;
  completedPrograms: number;
}

export interface DashboardStats {
  patients: number;
  programs: number;
  visits: number;
  forms: number;
  locations: number;
}
