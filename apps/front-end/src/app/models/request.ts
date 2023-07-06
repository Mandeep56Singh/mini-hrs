export interface AxiosErrorResponse {
  code: string;
  response: {
    data: {
      statusCode: number;
      message: string;
    };
    status: number;
    statusText: string;
  };
}
