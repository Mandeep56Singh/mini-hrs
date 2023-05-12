import { getApiUrl } from '../config/config.service';
import { PatientProgramEnrollment } from '../models/program-enrollment';

function getBaseUrl() {
  return getApiUrl() + `/program-enrollments`;
}

export async function getEnrolledPrograms(
  patientUuid: string
): Promise<PatientProgramEnrollment[]> {
  const url =
    getBaseUrl() + `/patient?patientUuid=${patientUuid}&completed=false`;
  const enrolledPrograms = await fetch(url);
  return enrolledPrograms.json();
}

export async function getCompletedPrograms(
  patientUuid: string
): Promise<PatientProgramEnrollment[]> {
  const url =
    getBaseUrl() + `/patient?patientUuid=${patientUuid}&completed=true`;
  const enrolledPrograms = await fetch(url);
  return enrolledPrograms.json();
}
