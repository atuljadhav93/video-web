import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBidOe9ukYlQdVF2osHtRcbvCOPkKopVbM",
  authDomain: "netflixgpt-75b4f.firebaseapp.com",
  projectId: "netflixgpt-75b4f",
  storageBucket: "netflixgpt-75b4f.appspot.com",
  messagingSenderId: "443912314042",
  appId: "1:443912314042:web:a9ff40143d244625567683",
  measurementId: "G-C9V4XMGZL1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//eslint-disable-next-line
const analytics = getAnalytics(app);

export const auth = getAuth();
