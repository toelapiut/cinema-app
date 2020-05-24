import {
  API_KEY,
  APP_ID,
  AUTH_DOMAIN,
  DATABASE_URL,
  MEASUREMENT_ID,
  MESSEGING_SENDING_ID,
  PROJECT_ID,
  STORAGE_BUCKET
} from 'react-native-dotenv'

export const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSEGING_SENDING_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID,
};