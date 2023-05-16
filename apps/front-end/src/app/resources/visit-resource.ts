import { getApiUrl } from '../config/config.service';
import { CreateVisitPayload, CompleteVisitPayload } from '../models/visit';
import { Visit } from '../models/visit';

function getBaseUrl() {
  return getApiUrl() + `/visits`;
}

export async function startVisit(payload: CreateVisitPayload): Promise<Visit> {
  const url = getBaseUrl();
  const newVisit = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  return newVisit.json();
}

export async function getPatientVisits(patientUuid: string): Promise<Visit[]> {
  const url = getBaseUrl() + `/patient?patientUuid=${patientUuid}`;
  const visits = await fetch(url);
  return visits.json();
}

export async function endVisit(visitUuid: string, visitEnd: Date) {
  const url = getBaseUrl() + `/${visitUuid}`;
  const data: CompleteVisitPayload = {
    visitEnd: visitEnd,
  };
  const enrolledPrograms = await fetch(url, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return enrolledPrograms.json();
}