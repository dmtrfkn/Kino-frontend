import axios from 'axios';
import { parseCookies } from 'nookies';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_URL;

axios.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const { _token } = parseCookies();

    config.headers.Authorization = 'Bearer ' + _token;
  }

  return config;
});

export default axios;
