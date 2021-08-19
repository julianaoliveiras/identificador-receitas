import firebase from 'firebase';
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDv0fm2MmTx6LwbD7kvJLYyM6LxOTRxRUo",
    authDomain: "identificador-de-receitas.firebaseapp.com",
    projectId: "identificador-de-receitas",
    storageBucket: "identificador-de-receitas.appspot.com",
    messagingSenderId: "275588568182",
    appId: "1:275588568182:web:47873d15fea4db2d53bb57",
    measurementId: "G-Z5MG04YJFK"
  };
  // Initialize Firebase
  export default firebase.initializeApp(firebaseConfig);
 // firebase.analytics();