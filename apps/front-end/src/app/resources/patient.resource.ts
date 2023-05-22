import { getApiUrl } from '../config/config.service';
import { CreatePatientPayload } from '../models/patient';

function getBaseUrl() {
  return getApiUrl() + `/patients`;
}

export async function getPatient(patientUuid: string) {
  const url = getBaseUrl() + `/${patientUuid}`;
  const response = await fetch(url);
  return response.json();
}

export async function createPatient(payload: CreatePatientPayload) {
  const url = getBaseUrl();
  const newPatient = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  return newPatient.json();
}
