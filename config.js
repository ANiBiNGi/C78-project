import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCNtAi6xgyJLQw4nFOxvlwfflM32Ualmqg",
  authDomain: "barter-app-dcc00.firebaseapp.com",
  projectId: "barter-app-dcc00",
  databaseUrl: 'https://barter-app-dcc00.firebaseapp.com',
  storageBucket: "barter-app-dcc00.appspot.com",
  messagingSenderId: "488341452113",
  appId: "1:488341452113:web:8c72c0fb4d7713c8d5cf70"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()