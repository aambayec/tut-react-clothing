import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCo0vr0vZ_AwgX-FxO6ppqYbwWgJ8EJYAQ",
  authDomain: "tut-react-clothing.firebaseapp.com",
  projectId: "tut-react-clothing",
  storageBucket: "tut-react-clothing.appspot.com",
  messagingSenderId: "309440487829",
  appId: "1:309440487829:web:35b016cba6e76cd988169c",
  measurementId: "G-TNG6G0KL2R",
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
} else {
  firebase.app(); // if already initialized, use that one
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
