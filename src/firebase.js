import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";


// Change this
const firebaseConfig = {};

const app = initializeApp(firebaseConfig);

// export const fire = '';
export const db = getFirestore();
export const auth = getAuth(app);
// export const storage = getStorage();