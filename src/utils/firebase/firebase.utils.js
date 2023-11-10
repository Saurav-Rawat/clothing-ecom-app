// fireStore data storage mechanism
// collection => document => data(getDoc, setDoc helps us to modify and get data)
// shoe => nikeAirmax => {name,size,cost:{price,currency}}

// initializeApp: takes configurations and initialie app
import { initializeApp } from "firebase/app";
// Authentication methods
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
// getFirestore initialize firestore db
// doc retrieve document from firestore db
// getDoc gets the doc data
// setDoc sets the doc data
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  // your config obj
  apiKey: "AIzaSyCcEMxyJvHD5MtldwiUGpB07IegiZ3WAbg",
  authDomain: "react-ecom-1.firebaseapp.com",
  projectId: "react-ecom-1",
  storageBucket: "react-ecom-1.appspot.com",
  messagingSenderId: "376749176573",
  appId: "1:376749176573:web:d05b2fe4e0ac5b97743094",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// provider which will let us use google auth
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  //it means everytime when someone interact with provider we will prompt them and we want them to select an account
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInfo = {}
) => {
  const { uid } = userAuth;
  // check if user already exist
  // doc needs db(firestoreDb) users(collection name) uid(document id to check if user already exist)
  //  if user does not exist with the uid google firestore will create a temporary document (not in users collection i.e firestore db is still empty) and give us reference to that document
  //  which we can use to setDoc values
  const userDocRef = doc(db, "users", uid);

  // userSnapshot is object which gives us methods which will help us to check if this doc(user with above passed uid) exist
  const userSnapshot = await getDoc(userDocRef);

  //  if user does not exist
  if (!userSnapshot.exists()) {
    // create and set the document with the data we get from userAuth
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (err) {
      console.log("error creating user", err.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const SignOutUser = async () => await signOut(auth);

// onAuthStateChanged is a observer which is invoked whenever there is a change in auth state i.e signIn singOut
// we can pass a callback function that gets called whenever the auth state is changed
// inside callback(user) we can a userObject which has the value of currently logged in user if we perform signout that user object will be null
export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
