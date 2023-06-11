// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { GoogleAuthProvider, getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpMAa-orO9QCFQ82qgHanU7SdSrcto9rY",
  authDomain: "app-jc-19e66.firebaseapp.com",
  projectId: "app-jc-19e66",
  storageBucket: "app-jc-19e66.appspot.com",
  messagingSenderId: "1036732488445",
  appId: "1:1036732488445:web:adbe5dc16b48f54dd9fc94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()