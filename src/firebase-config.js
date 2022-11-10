// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration.  Replace this with the block from your firebase console.
const firebaseConfig = {
  apiKey: "YourAPIKey",
  authDomain: "YourAuthDomain",
  projectId: "YourProjectID",
  storageBucket: "YourStorageBucket",
  messagingSenderId: "Your MessagingSenderID",
  appId: "YourAppID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
