import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyD8_buzyIVpMe-GrBGA0zr_jAV_UqvQ2LU",
  authDomain: "lx-clone-f482e.firebaseapp.com",
  projectId: "lx-clone-f482e",
  storageBucket: "lx-clone-f482e.firebasestorage.app",
  messagingSenderId: "362190717630",
  appId: "1:362190717630:web:320065212191f48aaed4ef"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()

