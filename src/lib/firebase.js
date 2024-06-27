
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-5b732.firebaseapp.com",
  projectId: "reactchat-5b732",
  storageBucket: "reactchat-5b732.appspot.com",
  messagingSenderId: "577398038364",
  appId: "1:577398038364:web:8dcac50339729fce3deb99"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()
