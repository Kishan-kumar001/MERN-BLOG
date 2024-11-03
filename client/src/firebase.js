// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-425ea.firebaseapp.com",
  projectId: "mern-blog-425ea",
  storageBucket: "mern-blog-425ea.firebasestorage.app",
  messagingSenderId: "758039437150",
  appId: "1:758039437150:web:b19849a6232d1f91c239cf",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
