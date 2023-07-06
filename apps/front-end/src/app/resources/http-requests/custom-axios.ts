import axios from 'axios';
import { getItem } from '../local-storage.resource';

const accessToken = getItem('access_token');
export const customAxios = axios.create({
  headers: {
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
  },
});
