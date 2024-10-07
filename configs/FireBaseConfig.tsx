// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC6LX66E_JKaqe2KOMg8BnKAtbSA66kJ5o",
    authDomain: "business-shop-9f38e.firebaseapp.com",
    projectId: "business-shop-9f38e",
    storageBucket: "business-shop-9f38e.appspot.com",
    messagingSenderId: "383132191943",
    appId: "1:383132191943:web:69a92f955fbcf3579c42e2",
    measurementId: "G-0J20CG9P40"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);