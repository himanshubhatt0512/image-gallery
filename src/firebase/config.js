import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAifkMSQzUrkFlGk7uuCXo78qlBQDE98eg",
    authDomain: "photo-gallery-app-fe055.firebaseapp.com",
    projectId: "photo-gallery-app-fe055",
    storageBucket: "photo-gallery-app-fe055.appspot.com",
    messagingSenderId: "384694079506",
    appId: "1:384694079506:web:d1071ea36aaf463d4c08cb"
};
  


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };