import { AxiosErrorResponse } from '../models/request';

export const getErrorMessage = (errorResp: AxiosErrorResponse) => {
  const resp = errorResp.response || '';
  const { status, statusText, data } = resp;
  let errorText = '';

  switch (status) {
    case 401:
      errorText = 'Unauthorized, please log in';
      break;
    default:
      errorText = data?.message || statusText;
  }

  return {
    status,
    errorText,
  };
};
