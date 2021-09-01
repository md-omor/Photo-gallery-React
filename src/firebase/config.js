// import { getAnalytics } from "firebase/analytics";
import * as firebase from "firebase/app";
// import { initializeApp } from "firebase/app";
// import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCmqCy1M7DZjj4MfmWYwicpFicFPJV6RwQ",
  authDomain: "omor-gram.firebaseapp.com",
  projectId: "omor-gram",
  storageBucket: "omor-gram.appspot.com",
  messagingSenderId: "728173617005",
  appId: "1:728173617005:web:ef7dcb621de07e2e9d4464",
  measurementId: "G-B527QXCKJ9",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export default firebase;

export { projectStorage, projectFirestore };
