// import * as firebase from "firebase/app"
// import 'firebase/storage'
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// // const firebaseConfig = {
// //     apiKey: "AIzaSyDELtExiZMxa_9BmlrObz56lxcTugL30mI",
// //     authDomain: "portal-93461.firebaseapp.com",
// //     projectId: "portal-93461",
// //     storageBucket: "portal-93461.appspot.com",
// //     messagingSenderId: "760536690043",
// //     appId: "1:760536690043:web:f9c7a321c909985e47a1de",
// //     measurementId: "G-18DQBTQY7L"
// // };



// // Initialize Firebase
// //const app = firebase.initializeApp(firebaseConfig);
// // const auth = app.auth();
// // const db = app.firestore();

// // const signInWithEmailAndPassword = async (email, password) => {
// //     try {
// //         await auth.signInWithEmailAndPassword(email, password);
// //     } catch (err) {
// //         console.error(err);
// //         alert(err.message);
// //     }
// // };
// // const logout = () => {
// //     auth.signOut();
// // };
// export const app = firebase.initializeApp({
//     "projectId": "portal-93461",
//     "appId": "1:760536690043:web:5342ffe35bac47e247a1de",
//     "storageBucket": "portal-93461.appspot.com",
//     "locationId": "us-central",
//     "apiKey": "AIzaSyDELtExiZMxa_9BmlrObz56lxcTugL30mI", "authDomain": "portal-93461.firebaseapp.com",
//     "messagingSenderId": "760536690043", "measurementId": "G-664YTN92LS"

// })

import firebase from 'firebase/app'

// import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDELtExiZMxa_9BmlrObz56lxcTugL30mI",
    authDomain: "portal-93461.firebaseapp.com",
    projectId: "portal-93461",
    storageBucket: "portal-93461.appspot.com",
    messagingSenderId: "760536690043",
    appId: "1:760536690043:web:f9c7a321c909985e47a1de",
    measurementId: "G-18DQBTQY7L"
};

const app = firebase.initializeApp(firebaseConfig);
const storage = firebase.storage()

// const storage = getStorage(app);

export { app };