// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaz7CDlJd7XlaXjM5VAmHyR1xRR8h5k7A",
  authDomain: "sssssshhhhhh-1b38a.firebaseapp.com",
  projectId: "sssssshhhhhh-1b38a",
  storageBucket: "sssssshhhhhh-1b38a.appspot.com",
  messagingSenderId: "231666203997",
  appId: "1:231666203997:web:79aaa8a6d3a70ccae5fcb4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

// Firestore
export const db = getFirestore(app);
