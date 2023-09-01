import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD4QJUtfb9X3vc9uzLNBxC_ysbKGvrwXn4",
  authDomain: "smart-inspecs-b1ded.firebaseapp.com",
  projectId: "smart-inspecs-b1ded",
  storageBucket: "smart-inspecs-b1ded.appspot.com",
  messagingSenderId: "796340345179",
  appId: "1:796340345179:web:684e8e3d89f00935e2227e",
  measurementId: "G-CCQGLLD900"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//Initialize Firestore
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const db = getFirestore(app);

export { app, analytics, auth, db }