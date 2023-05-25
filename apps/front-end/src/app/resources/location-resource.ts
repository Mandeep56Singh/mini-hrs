import { getApiUrl } from '../config/config.service';
import { Location } from '../models/location';
import { customAxios } from './http-requests/custom-axios';

function getBaseUrl() {
  return getApiUrl() + `/locations`;
}

export async function getLocations(): Promise<Location[]> {
  const url = getBaseUrl();
  const resp = await customAxios.get(url);
  return resp.data;
}
