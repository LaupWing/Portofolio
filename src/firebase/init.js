import firebase from 'firebase'
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAOMarF-NJTBj_rdlcTYUf1eaSwiP0H0mk",
    authDomain: "portofolio-156ff.firebaseapp.com",
    databaseURL: "https://portofolio-156ff.firebaseio.com",
    projectId: "portofolio-156ff",
    storageBucket: "portofolio-156ff.appspot.com",
    messagingSenderId: "1095935908280",
    appId: "1:1095935908280:web:afb731ff11b13a2fcb574d"
};
  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore()