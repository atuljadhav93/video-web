// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBidOe9ukYlQdVF2osHtRcbvCOPkKopVbM",
  authDomain: "netflixgpt-75b4f.firebaseapp.com",
  projectId: "netflixgpt-75b4f",
  storageBucket: "netflixgpt-75b4f.appspot.com",
  messagingSenderId: "443912314042",
  appId: "1:443912314042:web:a9ff40143d244625567683",
  measurementId: "G-C9V4XMGZL1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();