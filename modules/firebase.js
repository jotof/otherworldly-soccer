import firebase from 'firebase';
const config = {
  apiKey: "AIzaSyCYKxIPAlgLOw6n7NFN3Wt_2kclOLQpDUI",
  authDomain: "otherworldly-soccer.firebaseapp.com",
  databaseURL: "https://otherworldly-soccer.firebaseio.com",
  projectId: "otherworldly-soccer",
  storageBucket: "otherworldly-soccer.appspot.com",
  messagingSenderId: "545415884501"
};

export default () => {
  firebase.initializeApp(config);
  return firebase.database();
}
