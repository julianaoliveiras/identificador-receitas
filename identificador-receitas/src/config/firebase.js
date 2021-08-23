import firebase from 'firebase';

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCsWDq2M0J4jDImX4V9nxvwfXgI-Gy-fss",
    authDomain: "receitas-identificador.firebaseapp.com",
    projectId: "receitas-identificador",
    storageBucket: "receitas-identificador.appspot.com",
    messagingSenderId: "839748004296",
    appId: "1:839748004296:web:6f193240846d5d5891b8fd",
    measurementId: "G-KV729JPBRQ"
  };
  // Initialize Firebase
  export default firebase.initializeApp(firebaseConfig);
 // firebase.analytics();