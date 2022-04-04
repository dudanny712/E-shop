import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAOFC2pQ4gNpQENyoI1fa1EBVtRY7TBSQs",
    authDomain: "indshop-b1a43.firebaseapp.com",
    projectId: "indshop-b1a43",
    storageBucket: "indshop-b1a43.appspot.com",
    messagingSenderId: "353556514903",
    appId: "1:353556514903:web:5ff47ce3946428ea13bb12"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  
  const auth = firebase.auth();
  
  export { db, auth };
  