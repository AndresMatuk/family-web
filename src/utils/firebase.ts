// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVeS5_0tupuZmYFw4HZVamTCIXcYl4FBg",
  authDomain: "familyweb-b4245.firebaseapp.com",
  projectId: "familyweb-b4245",
  storageBucket: "familyweb-b4245.firebasestorage.app",
  messagingSenderId: "675603283419",
  appId: "1:675603283419:web:5e7188e522c4fc8678fbfe",
  measurementId: "G-GLYV0EDT0T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Firestore y expórtalo
export const db = getFirestore(app);