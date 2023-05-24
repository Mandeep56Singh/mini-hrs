import { getApiUrl } from '../config/config.service';
import { Login, LoginResponse, SignUp } from '../models/auth';

interface ErroResp {
  statusCode: number;
  message: string;
  error: string;
}

function getBaseUrl(): string {
  return getApiUrl() + `/auth`;
}

export async function signIn(
  payload: Login
): Promise<LoginResponse | ErroResp> {
  const url = getBaseUrl() + '/login';
  const loginResp = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  return loginResp.json();
}

export async function signUp(payload: SignUp) {
  const url = getBaseUrl() + '/sign-up';
  const signUpResp = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  return signUpResp.json();
}
