import { getApiUrl } from '../config/config.service';

function getBaseUrl() {
  return getApiUrl() + `/programs`;
}

const getProgramVisitTypes = (programUuid: string) => {};
