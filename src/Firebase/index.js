import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyB8zAPBi5nM33rXb-2qXjBV3YOhsL2fLqU",
    authDomain: "robinradio-2bd19.firebaseapp.com",
    databaseURL: "https://robinradio-2bd19.firebaseio.com",
    projectId: "robinradio-2bd19",
    storageBucket: "robinradio-2bd19.appspot.com",
    messagingSenderId: "881629779502"
  };
  export const app = firebase.initializeApp(config);

  export const storage = firebase.storage();

  export const db = firebase.database();