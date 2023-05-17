import { getApiUrl } from '../config/config.service';
import { Program } from '../models/programs';

function getBaseUrl() {
  return getApiUrl() + `/programs`;
}

export async function getPrograms(): Promise<Program[]> {
  const url = getBaseUrl();
  const programs = await fetch(url);
  return programs.json();
}
