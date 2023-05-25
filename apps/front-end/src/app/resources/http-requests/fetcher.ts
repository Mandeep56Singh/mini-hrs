import { getItem } from '../local-storage.resource';

interface Config {
  method: string;
  data: any;
}

const accessToken = getItem('access_token');

export const fetcher = async (url: string, config?: Config) => {
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    ...config,
  });
  if (!res.ok) {
    const info: { statusCode: number; message: string } = await res.json();
    const error = {
      message: 'An error has occured while fetching data',
      info: info,
      status: res.status,
    };

    throw error;
  }

  return res.json();
};
