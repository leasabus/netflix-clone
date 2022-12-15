// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyBlqAWhxEcQt-J6Zfg2X9pmtz6KphrjAvM',
    authDomain: 'netflix-react-dd73b.firebaseapp.com',
    projectId: 'netflix-react-dd73b',
    storageBucket: 'netflix-react-dd73b.appspot.com',
    messagingSenderId: '699364813495',
    appId: '1:699364813495:web:8ed9bef6f8f19522d53b32',
};




// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);