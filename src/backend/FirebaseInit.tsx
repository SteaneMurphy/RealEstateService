import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

/*
    This is the Firestore intialisation script. It contains VITE variables to the .env keys.
    Using these keys, the connection to the database is acheived using the 'initializeApp'
    function built into the firebase library.

    Once initialised, the reference is then stored in a varibale 'db' for use in the
    backend service using the 'getFirestore' function. This variable is exported for 
    use in another script.
*/

const firebaseConfig: { [key: string]: any } = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID,
    measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
