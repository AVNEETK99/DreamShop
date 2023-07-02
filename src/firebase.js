import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAMJc3ybdTW5LzfPmWvz44r7j09saBtUw8",
    authDomain: "dreamshop-e2e5e.firebaseapp.com",
    projectId: "dreamshop-e2e5e",
    storageBucket: "dreamshop-e2e5e.appspot.com",
    messagingSenderId: "478724292885",
    appId: "1:478724292885:web:caa718eab934d3370f291c",
    measurementId: "G-01G0BVVSBP"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };

