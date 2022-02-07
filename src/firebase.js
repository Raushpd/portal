import firebase from "firebase/compat/app"
import { initializeApp } from 'firebase/app';
import 'firebase/compat/auth';
// import { initializeApp } from "firebase/app";
// import { getFirestore } from 'firebase/firestore/lite';
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDELtExiZMxa_9BmlrObz56lxcTugL30mI",
    authDomain: "portal-93461.firebaseapp.com",
    projectId: "portal-93461",
    storageBucket: "portal-93461.appspot.com",
    messagingSenderId: "760536690043",
    appId: "1:760536690043:web:f9c7a321c909985e47a1de",
    measurementId: "G-18DQBTQY7L"
});
const auth = firebase.auth();
// export default firebase;
// export default getDownloadURL
export { auth, firebase };