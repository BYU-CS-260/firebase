// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWXLRrZHp42yX5uJNgVSPYkQ4WUGqcJPg",
  authDomain: "blog-698b0.firebaseapp.com",
  projectId: "blog-698b0",
  storageBucket: "blog-698b0.appspot.com",
  messagingSenderId: "953724155937",
  appId: "1:953724155937:web:8f3e385b152aea97214b60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();