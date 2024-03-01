// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFEJi2Il8ilKLVAzZOWIyrLMPMFaQzKDQ",
  authDomain: "ossense-54b52.firebaseapp.com",
  databaseURL: "https://ossense-54b52-default-rtdb.firebaseio.com",
  projectId: "ossense-54b52",
  storageBucket: "ossense-54b52.appspot.com",
  messagingSenderId: "700538107327",
  appId: "1:700538107327:web:2d7175e47dc8f3501d9d0a",
  measurementId: "G-XMV54RDXSL",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
