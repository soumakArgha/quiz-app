import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyC3vIt7PL8lx3xNpSA_ia6orijUhwxGEnY",
    authDomain: "teak-serenity-216616.firebaseapp.com",
    databaseURL: "https://teak-serenity-216616.firebaseio.com",
    projectId: "teak-serenity-216616",
    storageBucket: "teak-serenity-216616.appspot.com",
    messagingSenderId: "140998487967"
};
firebase.initializeApp(config);

const db = firebase.firestore();

db.settings({
    timestampsInSnapshots: true
});


export {firebase, db}