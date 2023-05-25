import { getApiUrl } from '../config/config.service';
import { CreateVisitPayload, CompleteVisitPayload } from '../models/visit';
import { Visit } from '../models/visit';
import { customAxios } from './http-requests/custom-axios';

function getBaseUrl() {
  return getApiUrl() + `/visits`;
}

export async function startVisit(payload: CreateVisitPayload): Promise<Visit> {
  const url = getBaseUrl();
  const resp = await customAxios.post(url,{
    ...payload
  });
  return resp.data;
}

export async function getPatientVisits(patientUuid: string): Promise<Visit[]> {
  const url = getBaseUrl() + `/patient?patientUuid=${patientUuid}`;
  const resp = await customAxios.get(url);
  return resp.data;
}

export async function endVisit(visitUuid: string, visitEnd: Date) {
  const url = getBaseUrl() + `/${visitUuid}`;
  const data: CompleteVisitPayload = {
    visitEnd: visitEnd,
  };
  const resp = await customAxios.patch(url,{
    ...data
  });
  return resp.data;
}
