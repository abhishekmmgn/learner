import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  //   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  //   authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  //   projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  //   storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  //   messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  //   appId: import.meta.env.VITE_FIREBASE_APP_ID,
  //   measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
  apiKey: "AIzaSyCbuPudRHSXLIDlJf75z45hn5pN8JqSz44",
  authDomain: "learner-007-93afa.firebaseapp.com",
  projectId: "learner-007-93afa",
  storageBucket: "learner-007-93afa.appspot.com",
  messagingSenderId: "674957036363",
  appId: "1:674957036363:web:5e6ca746e22b7c16f776ce",
  measurementId: "G-5HPQBKJ950",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
