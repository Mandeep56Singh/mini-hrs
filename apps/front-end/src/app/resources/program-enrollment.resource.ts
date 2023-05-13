import { getApiUrl } from '../config/config.service';
import {
  PatientProgramEnrollment,
  ProgramEnrollmentPayload,
} from '../models/program-enrollment';

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

export async function enroll(
  payload: ProgramEnrollmentPayload
): Promise<PatientProgramEnrollment> {
  const url = getBaseUrl();
  const enrolledPrograms = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  return enrolledPrograms.json();
}
