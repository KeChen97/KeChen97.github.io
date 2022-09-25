import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA1dJ-t3Hs3Ty0adAYCpgp_FwRlwhlyhnA",
  authDomain: "kechen-9423b.firebaseapp.com",
  projectId: "kechen-9423b",
  storageBucket: "kechen-9423b.appspot.com",
  messagingSenderId: "555852999545",
  appId: "1:555852999545:web:488cacf6395faf89565da8",
  measurementId: "G-7FRPKVKP6N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
logEvent(analytics, "visit");
