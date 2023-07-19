import { getApiUrl } from '../config/config.service';
import { CreateFormDto } from '../models/form';
import { customAxios } from './http-requests/custom-axios';

function getBaseUrl() {
  return getApiUrl() + `/form`;
}

export async function createForm(payload: CreateFormDto) {
  const url = getBaseUrl();
  const resp = await customAxios.post(url, {
    name: payload.name,
    encounterTypeUuid: payload.encounterTypeUuid,
  });
  return resp.data;
}
