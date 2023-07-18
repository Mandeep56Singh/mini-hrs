import { getApiUrl } from '../config/config.service';
import { customAxios } from './http-requests/custom-axios';
import { QuestionDto } from '../models/question';

function getBaseUrl() {
  return getApiUrl() + `/question`;
}

export async function createQuestion(payload: QuestionDto) {
  const url = getBaseUrl();
  const resp = await customAxios.post(url, {
    question: payload.question,
    answerTypeUuid: payload.answerTypeUuid,
  });
  return resp.data;
}
