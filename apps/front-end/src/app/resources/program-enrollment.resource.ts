import { getApiUrl } from '../config/config.service';
import {
  PatientProgramEnrollment,
  ProgramEnrollmentPayload,
  CompleteEnrollmentPayload,
} from '../models/program-enrollment';
import { customAxios } from './http-requests/custom-axios';

function getBaseUrl() {
  return getApiUrl() + `/program-enrollments`;
}

export async function getEnrolledPrograms(
  patientUuid: string
): Promise<PatientProgramEnrollment[]> {
  const url =
    getBaseUrl() + `/patient?patientUuid=${patientUuid}&completed=false`;
  const resp = await customAxios.get(url);
  return resp.data;
}

export async function getCompletedPrograms(
  patientUuid: string
): Promise<PatientProgramEnrollment[]> {
  const url =
    getBaseUrl() + `/patient?patientUuid=${patientUuid}&completed=true`;
  const response = await customAxios.get(url);
  return response.data;
}

export async function enroll(
  payload: ProgramEnrollmentPayload
): Promise<PatientProgramEnrollment> {
  const url = getBaseUrl();
  const resp = await customAxios.post(url,{
    ...payload
  });
  return resp.data;
}

export async function completeProgram(payload: CompleteEnrollmentPayload) {
  const url = getBaseUrl() + `/${payload.enrollmentUuid}`;
  const resp = await customAxios.patch(url,{
    endDate: payload.endDate
  });
  return resp.data;
}
