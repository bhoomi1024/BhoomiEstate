// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,

  authDomain: "mern-estate-3f602.firebaseapp.com",
  projectId: "mern-estate-3f602",
  storageBucket: "mern-estate-3f602.appspot.com",
  messagingSenderId: "328526967966",
  appId: "1:328526967966:web:b5897b25e655ea698a778f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
