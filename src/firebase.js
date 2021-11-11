import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC9ekBP8Na62dgWDSsM2DYCdVPmM36t9no",
    authDomain: "twitter-clone-f57b9.firebaseapp.com",
    projectId: "twitter-clone-f57b9",
    storageBucket: "twitter-clone-f57b9.appspot.com",
    messagingSenderId: "106201960961",
    appId: "1:106201960961:web:d8c357db3a75898701a600",
    measurementId: "G-38X5Z4T7G1"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;