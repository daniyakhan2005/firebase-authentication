// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAE_aaRWylQeTTE8Bwbpc-Ld3hH51xriUE",
  authDomain: "fir-authentication-e36d7.firebaseapp.com",
  projectId: "fir-authentication-e36d7",
  storageBucket: "fir-authentication-e36d7.appspot.com",
  messagingSenderId: "783231128486",
  appId: "1:783231128486:web:deabc500f30329ca5e3567",
  measurementId: "G-GW87JNTTJP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);