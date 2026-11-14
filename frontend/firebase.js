import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ks-aicodeeditor.firebaseapp.com",
  projectId: "ks-aicodeeditor",
  storageBucket: "ks-aicodeeditor.firebasestorage.app",
  messagingSenderId: "259222985764",
  appId: "1:259222985764:web:1db2cad643eec239d20cb1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
