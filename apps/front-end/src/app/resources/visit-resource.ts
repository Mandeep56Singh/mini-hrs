import { getApiUrl } from '../config/config.service';
import { CreateVisitPayload } from '../models/visit';
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
