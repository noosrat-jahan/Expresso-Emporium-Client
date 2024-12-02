// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfIhBGlkJaHWDxtp8R5a9fIciqjqWc0SE",
  authDomain: "expresso-emporium-8e12e.firebaseapp.com",
  projectId: "expresso-emporium-8e12e",
  storageBucket: "expresso-emporium-8e12e.firebasestorage.app",
  messagingSenderId: "763193895539",
  appId: "1:763193895539:web:91d3329cf72a70fafc5806"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
