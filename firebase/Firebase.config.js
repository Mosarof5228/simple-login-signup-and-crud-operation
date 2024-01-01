// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBBCp0G65xMQ-3HTdOfojttJFpJna1Nbb8",
    authDomain: "doctore-real.firebaseapp.com",
    projectId: "doctore-real",
    storageBucket: "doctore-real.appspot.com",
    messagingSenderId: "179985753809",
    appId: "1:179985753809:web:52b6c6b46f4a930fb747f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;