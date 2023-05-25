import { getApiUrl } from '../config/config.service';
import { Program } from '../models/programs';
import { customAxios } from './http-requests/custom-axios';

function getBaseUrl() {
  return getApiUrl() + `/programs`;
}

export async function getPrograms(): Promise<Program[]> {
  const url = getBaseUrl();
  const resp = await customAxios.get(url);
  return resp.data;
}
