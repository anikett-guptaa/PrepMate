
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCcSdCEKaeTSxgez3W0W_BT_zAGnBRro_8",
  authDomain: "prepmate-addcd.firebaseapp.com",
  projectId: "prepmate-addcd",
  storageBucket: "prepmate-addcd.firebasestorage.app",
  messagingSenderId: "724327182450",
  appId: "1:724327182450:web:984cdeff72aca106d952eb",
  measurementId: "G-G64002PMKT"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);