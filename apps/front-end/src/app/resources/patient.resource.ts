import { getApiUrl } from '../config/config.service';
import { CreatePatientPayload } from '../models/patient';
import { customAxios } from './http-requests/custom-axios';

function getBaseUrl() {
  return getApiUrl() + `/patients`;
}

export async function getPatient(patientUuid: string) {
  const url = getBaseUrl() + `/${patientUuid}`;
  const resp = await customAxios.get(url);
  return resp.data;
}

export async function createPatient(payload: CreatePatientPayload) {
  const url = getBaseUrl();
  const resp = await customAxios.post(url,{
    ...payload
  });
  return resp.data;
}
