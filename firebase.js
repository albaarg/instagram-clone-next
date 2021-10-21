// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5H4TYPgq_pi4dkuMRvyLZJyGRS4yQVCQ",
  authDomain: "instagram-clone-next.firebaseapp.com",
  projectId: "instagram-clone-next",
  storageBucket: "instagram-clone-next.appspot.com",
  messagingSenderId: "532909802885",
  appId: "1:532909802885:web:5fea8221047c4bb39270ec",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
