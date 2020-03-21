import {https} from '../utils/utils';
import URLS from './urls';

export const getLatestMovie = () => {
  return https.get(`movie${URLS.movies.latest}`)
};
