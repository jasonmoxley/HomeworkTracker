import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC0jFQc4D7BDbV3MsrKiUWKLcVlsMUDGxM",
    authDomain: "homework-tracker-6c7e0.firebaseapp.com",
    databaseURL: "https://homework-tracker-6c7e0.firebaseio.com",
    projectId: "homework-tracker-6c7e0",
    storageBucket: "homework-tracker-6c7e0.appspot.com",
    messagingSenderId: "331335657143",
    appId: "1:331335657143:web:a5b2dd68a4403424cd0f32",
    measurementId: "G-9RV3BP2VTN"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

firebase.firestore();

export default firebase;