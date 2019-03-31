import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyAlvu931U9cflEW5emTy_NSdhkoMQTN5uM",
  authDomain: "expensify-43e56.firebaseapp.com",
  databaseURL: "https://expensify-43e56.firebaseio.com",
  projectId: "expensify-43e56",
  storageBucket: "expensify-43e56.appspot.com",
  messagingSenderId: "732864814307"
};

firebase.initializeApp(config);

const database = firebase.database()

export { firebase, database as default }