import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getAnalytics,logEvent  } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBp5ZMR9wqE0kwjQ1n1C640bbMF9KfRqJY",
  authDomain: "onboarding-9c7cf.firebaseapp.com",
  projectId: "onboarding-9c7cf",
  storageBucket: "onboarding-9c7cf.firebasestorage.app",
  messagingSenderId: "131418997790",
  appId: "1:131418997790:web:81a0271fc1392ae0499a0f",
  measurementId: "G-J5Z7VH6JHN"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
export {auth, analytics,logEvent, createUserWithEmailAndPassword, signInWithEmailAndPassword }