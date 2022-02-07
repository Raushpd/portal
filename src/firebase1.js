
import firebase from "firebase/compat/app"
import 'firebase/compat/firestore';
import { initializeApp } from 'firebase/app';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDELtExiZMxa_9BmlrObz56lxcTugL30mI",
    authDomain: "portal-93461.firebaseapp.com",
    projectId: "portal-93461",
    storageBucket: "portal-93461.appspot.com",
    messagingSenderId: "760536690043",
    appId: "1:760536690043:web:f9c7a321c909985e47a1de",
    measurementId: "G-18DQBTQY7L"


};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = firebase.firestore();

export { storage, app };
export default db;