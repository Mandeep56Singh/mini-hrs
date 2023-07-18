import { getApiUrl } from '../config/config.service';
import { AnswerTypeDto } from '../models/answer-type';
import { customAxios } from './http-requests/custom-axios';

function getBaseUrl() {
  return getApiUrl() + `/answer-type`;
}

export async function createAnswerType(payload: AnswerTypeDto) {
  const url = getBaseUrl();
  const resp = await customAxios.post(url, {
    name: payload.name,
  });
  return resp.data;
}
