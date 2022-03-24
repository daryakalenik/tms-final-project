import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAT9Yx09_RLJN-s5gNwAKZE-dZKeBULfYA",
  authDomain: "final-project-381b3.firebaseapp.com",
  projectId: "final-project-381b3",
  storageBucket: "final-project-381b3.appspot.com",
  messagingSenderId: "379659610835",
  appId: "1:379659610835:web:99070544a8f8c42a82c226",
};

firebase.initializeApp(firebaseConfig);

export const database = firebase.database;
export const auth = firebase.auth();
export default firebase;
