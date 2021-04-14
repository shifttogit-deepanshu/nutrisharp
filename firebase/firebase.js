import * as firebase from "firebase"
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics

// Add the Firebase products that you want to use
import "firebase/auth";


const app = firebase.initializeApp({
  apiKey: 'AIzaSyDMh_WMZ9WXnQgGwjGjIu3_59sH49brzRU',
  authDomain: 'nutrisharp-dev-3ee73.firebaseapp.com',
  projectId: 'nutrisharp-dev-3ee73',
  storageBucket: 'nutrisharp-dev-3ee73.appspot.com',
  messagingSenderId: '558960443244',
  appId: '558960443244:web:97c9d839f1d03fb4513d49',
  measurementId: 'G-KEHNK19Q9P',
})


export default app
export const auth = app.auth()