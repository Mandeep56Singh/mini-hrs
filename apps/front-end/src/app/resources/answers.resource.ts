import { getApiUrl } from '../config/config.service';
import { EncounterAnswers } from '../models/answer';
import { customAxios } from './http-requests/custom-axios';

function getBaseUrl() {
  return getApiUrl() + `/answer`;
}

export async function createEncounterAnswers(payload: EncounterAnswers) {
  const url = getBaseUrl();
  const resp = await customAxios.post(url, {
    ...payload,
  });
  return resp.data;
}
