import axios from 'axios';
import { MOVIEDB_BASE_URL, MOVIEDB_API_KEY } from 'react-native-dotenv'

console.log({MOVIEDB_BASE_URL, MOVIEDB_API_KEY})
export const https = axios.create({
  baseURL: MOVIEDB_BASE_URL,
});

https.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params['key'] = MOVIEDB_API_KEY;
  return config;
});