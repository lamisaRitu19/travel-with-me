// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCPSMOiHkTmhhTHvXJxw9nR3DFuWp8lJig",
    authDomain: "travel-with-me-f8eff.firebaseapp.com",
    projectId: "travel-with-me-f8eff",
    storageBucket: "travel-with-me-f8eff.appspot.com",
    messagingSenderId: "905379500673",
    appId: "1:905379500673:web:b6461d36b85413a50db380"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;