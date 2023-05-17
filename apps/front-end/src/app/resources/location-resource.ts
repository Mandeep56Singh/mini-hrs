import { getApiUrl } from '../config/config.service';
import { Location } from '../models/location';

function getBaseUrl() {
  return getApiUrl() + `/locations`;
}

export async function getLocations(): Promise<Location[]> {
  const url = getBaseUrl();
  const programs = await fetch(url);
  return programs.json();
}
