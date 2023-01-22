import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";


// firebase config for: developerstar-favicon           // hosted on: Pranjal's account
const firebaseConfig = {
    apiKey: "AIzaSyDwbkfLXmS86MRFNmigCHItObgfaod-JXk",
    authDomain: "favicon-developerstar.firebaseapp.com",
    projectId: "favicon-developerstar",
    storageBucket: "favicon-developerstar.appspot.com",
    messagingSenderId: "984657225892",
    appId: "1:984657225892:web:3ba3c21331e8d6bc3ade31",
    measurementId: "G-8VDGF2TDKQ"
};

export const app = initializeApp(firebaseConfig);

export const fire = '';
export const db = getFirestore();
export const auth = getAuth(app);
export const storage = getStorage();