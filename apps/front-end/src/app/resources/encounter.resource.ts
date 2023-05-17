import { getApiUrl } from '../config/config.service';
import { CreateEncounterPayLoad, Encounter } from '../models/encounter';

function getBaseUrl() {
  return getApiUrl() + `/encounters`;
}

export async function createEncounter(
  payload: CreateEncounterPayLoad
): Promise<Encounter[]> {
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
