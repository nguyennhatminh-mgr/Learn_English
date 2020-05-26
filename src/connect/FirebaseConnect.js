import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCqlinAcJxn10Gs0fg0tCg6UU4_EuY9apY",
    authDomain: "learnenglish-81e85.firebaseapp.com",
    databaseURL: "https://learnenglish-81e85.firebaseio.com",
    projectId: "learnenglish-81e85",
    storageBucket: "learnenglish-81e85.appspot.com",
    messagingSenderId: "164602339683",
    appId: "1:164602339683:web:738fbdd36474bc02793356",
    measurementId: "G-BWNL8EN44E"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firebaseCon = firebase.storage();