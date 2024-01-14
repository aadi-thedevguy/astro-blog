// import {initializeApp, cert, applicationDefault} from "firebase-admin/app"
// import {getFirestore} from "firebase-admin/firestore"

// const app = initializeApp({
//   credential: cert(import.meta.env.GOOGLE_APPLICATION_CREDENTIALS)
// });

// const db = getFirestore(app);
// export {db}


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: import.meta.env.API_KEY,
  authDomain: import.meta.env.AUTH_DOMAIN,
  databaseURL: import.meta.env.DATABASE_URL,
  projectId: import.meta.env.PROJECT_ID,
  storageBucket: import.meta.env.STORAGE_BUCKET,
  messagingSenderId: import.meta.env.SENDER_ID,
  appId: import.meta.env.APP_ID,
  measurementId: import.meta.env.MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}