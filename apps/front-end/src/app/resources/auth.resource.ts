import { getApiUrl } from '../config/config.service';
import { Login, LoginResponse, SignUp } from '../models/auth';
import { getItem } from './local-storage.resource';

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

export function isLoggedIn(): boolean {
  const token_expires_at = getItem('expires_at')
    ? parseInt(getItem('expires_at'))
    : 0;
  const now = new Date();
  const expiredDate = new Date(token_expires_at);
  return expiredDate.getTime() > now.getTime();
}
