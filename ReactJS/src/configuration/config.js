import { getFirestore } from 'firebase/compat/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


const firebaseConfig = {
  apiKey: "AIzaSyC-328gtfgeEDyduRczY70H33REUVWqNt4",
  authDomain: "store-ly-811a7.firebaseapp.com",
  projectId: "store-ly-811a7",
  storageBucket: "store-ly-811a7.appspot.com",
  messagingSenderId: "746864507065",
  appId: "1:746864507065:web:85002f2b901bd1a1e74368",
  measurementId: "G-JBR2MRV5XN"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export const auth = firebase.auth();
export default db






// const db = firebase.firestore();



// export default db