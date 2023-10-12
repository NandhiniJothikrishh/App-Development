// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{GoogleAuthProvider, getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcynL4W-dtPuKokvdZe6wpUs5vEj0-ZDI",
  authDomain: "pet-subcription.firebaseapp.com",
  projectId: "pet-subcription",
  storageBucket: "pet-subcription.appspot.com",
  messagingSenderId: "1020293874525",
  appId: "1:1020293874525:web:a299c876268643391c5eb4",
  measurementId: "G-5TBEZ00NKE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
const analytics = getAnalytics(app);

const googleProvider=new GoogleAuthProvider();
export {googleProvider,auth} ;