// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQM8jYwcCWOQIoJqs9INqOCyKs_U58Oi4",
  authDomain: "my-first-firebase-projec-42c92.firebaseapp.com",
  projectId: "my-first-firebase-projec-42c92",
  storageBucket: "my-first-firebase-projec-42c92.firebasestorage.app",
  messagingSenderId: "668192765839",
  appId: "1:668192765839:web:71a121b213da4f899e3dfa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth with persistence (for React Native)
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { app, auth };
