import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//     apiKey: "AIzaSyBplsjBu0VITr9RCxj8rJPcPwo52jmROOs",
//     authDomain: "cla-test-b35da.firebaseapp.com",
//     projectId: "cla-test-b35da",
//     storageBucket: "cla-test-b35da.appspot.com",
//     messagingSenderId: "727866046606",
//     appId: "1:727866046606:web:2dd7666f75e8d845a2b1df",
//     measurementId: "G-GLBG34ZJXD"
// };

const firebaseConfig = {

    apiKey: "AIzaSyB-n-QZ2J_GpHeqhn6uz-TSQAldkvi0lUM",

    authDomain: "cla-stories.firebaseapp.com",

    projectId: "cla-stories",

    storageBucket: "cla-stories.appspot.com",

    messagingSenderId: "263250403554",

    appId: "1:263250403554:web:92eba0e0d4ed44941efebb",

    measurementId: "G-6QJJW9GSGK"

};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);