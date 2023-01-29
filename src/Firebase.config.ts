// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEJK1SY91kprCiyqA_QN6e3iu2E47JhBQ",
  authDomain: "e-commerce-43ccc.firebaseapp.com",
  projectId: "e-commerce-43ccc",
  storageBucket: "e-commerce-43ccc.appspot.com",
  messagingSenderId: "92196971511",
  appId: "1:92196971511:web:503e6bf9cd503d3ecb44f2",
  measurementId: "G-NCL5TKL0WN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const Storage = getStorage(app);
export const DB = getFirestore(app);

export default app;
// const analytics = getAnalytics(app);