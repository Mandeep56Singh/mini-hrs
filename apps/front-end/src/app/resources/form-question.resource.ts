import { getApiUrl } from '../config/config.service';
import { CreateFormQuestionDto } from '../models/form-question';
import { customAxios } from './http-requests/custom-axios';

function getBaseUrl() {
  return getApiUrl() + `/form-question`;
}
export async function createFormQuestion(
  payload: CreateFormQuestionDto
): Promise<number> {
  const url = getBaseUrl();
  const resp = await customAxios.post(url, {
    formUuid: payload.formUuid,
    questions: payload.questions,
  });
  return resp.data;
}
