import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAfJ4eK6BOaO-taO-fiFP9gMtDP1WYjYUU",
    authDomain: "fir-app-149e9.firebaseapp.com",
    projectId: "fir-app-149e9",
    storageBucket: "fir-app-149e9.appspot.com",
    messagingSenderId: "504576722429",
    appId: "1:504576722429:web:0621754e03620984db4594"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();