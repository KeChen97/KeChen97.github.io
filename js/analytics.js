import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAnalytics, logEvent } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyA-Xb7AzFGmLmdCBQb18Dk2M46KQ2yKcZI",
    authDomain: "ck-blog-642eb.firebaseapp.com",
    projectId: "ck-blog-642eb",
    storageBucket: "ck-blog-642eb.appspot.com",
    messagingSenderId: "722341663902",
    appId: "1:722341663902:web:65a702b61d0ff94129978f",
    measurementId: "G-FSE0WKRSEN"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
logEvent('visit');