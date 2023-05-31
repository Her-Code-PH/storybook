// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBX8YcYGQQ1wB0WS5qr5n8dAQsSOh5jK-g",
  authDomain: "baeintech.firebaseapp.com",
  projectId: "baeintech",
  storageBucket: "baeintech.appspot.com",
  messagingSenderId: "501062325272",
  appId: "1:501062325272:web:b9d4a6a6a06f260df3df6d",
  measurementId: "G-W9QBLEDQQ2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
