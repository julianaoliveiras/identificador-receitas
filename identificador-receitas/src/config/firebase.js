import firebase from 'firebase';

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDiJn92aWsRrr4OAEvz8Sw5GqGiyjjMNwI",
    authDomain: "receitas-96769.firebaseapp.com",
    projectId: "receitas-96769",
    storageBucket: "receitas-96769.appspot.com",
    messagingSenderId: "297899881756",
    appId: "1:297899881756:web:abc95c6f9c210a99f1f6d9",
    measurementId: "G-86NY8QLCSF"
  };
  // Initialize Firebase
 export default firebase.initializeApp(firebaseConfig);
 // firebase.analytics();