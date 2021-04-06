import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCxiToblgso5jQmCT2-GGSTaBG0kVNv120",
    authDomain: "udemy-vue-firebase-sites-cd893.firebaseapp.com",
    projectId: "udemy-vue-firebase-sites-cd893",
    storageBucket: "udemy-vue-firebase-sites-cd893.appspot.com",
    messagingSenderId: "121993540903",
    appId: "1:121993540903:web:cb17b20ad5345f5721e502"
};

firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }