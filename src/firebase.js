import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";


// firebase config for: developerstar-favicon           // hosted on: Pranjal's account
const firebaseConfig = {
    apiKey: "AIzaSyDoRaot5L0WGwd8oD0YOTlaHwWJPB5BBv0",
    authDomain: "developerstar-favicon.firebaseapp.com",
    projectId: "developerstar-favicon",
    storageBucket: "developerstar-favicon.appspot.com",
    messagingSenderId: "479376485450",
    appId: "1:479376485450:web:4404c69a9c1cc78761cab3",
    measurementId: "G-7YG802JEXE"
};

export const app = initializeApp(firebaseConfig);

export const fire = '';
export const db = getFirestore();
export const auth = getAuth(app);
export const storage = getStorage();