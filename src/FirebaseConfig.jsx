import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAC19caGgb3mml61G97FRm_GxbNE3AHs14",
    authDomain: "disney-app-clone-3c601.firebaseapp.com",
    projectId: "disney-app-clone-3c601",
    storageBucket: "disney-app-clone-3c601.appspot.com",
    messagingSenderId: "80389957409",
    appId: "1:80389957409:web:6d2a43d3031b4250dfc060",
    measurementId: "G-XBBZY22SB3"
};

const Firebase = firebase.initializeApp(firebaseConfig)
const db = Firebase.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {auth,provider}
export default db
  


