import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAKIwLtJSqAvXG92hEcBS82SAcpt5eG1RY",
  authDomain: "movie-recommendator.firebaseapp.com",
  projectId: "movie-recommendator",
  storageBucket: "movie-recommendator.appspot.com", 
  messagingSenderId: "1075002142355",
  appId: "1:1075002142355:web:f668e811a9c2ba9a5c6766"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // ← PASS `app` HERE
