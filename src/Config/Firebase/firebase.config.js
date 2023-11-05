
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDPNuatkqchLkjz6n2iNDRSOzvsdAu8XJg",
  authDomain: "group-study-ed33e.firebaseapp.com",
  projectId: "group-study-ed33e",
  storageBucket: "group-study-ed33e.appspot.com",
  messagingSenderId: "216459206700",
  appId: "1:216459206700:web:b6fea2a317ad2718fd3189"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);