import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAXavne8sHZY-aYMlK736ltLyXyrOVDRJc",
  authDomain: "olx-clone-c379d.firebaseapp.com",
  projectId: "olx-clone-c379d",
  storageBucket: "olx-clone-c379d.firebasestorage.app",
  messagingSenderId: "321823666080",
  appId: "1:321823666080:web:77ac137be90ad6bbf57ec5",
  measurementId: "G-6D53QBXMH9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { auth, provider }