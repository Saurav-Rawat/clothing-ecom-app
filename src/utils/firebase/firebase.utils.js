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
} from "firebase/auth";
// getFirestore initialize firestore db
// doc retrieve document from firestore db
// getDoc gets the doc data
// setDoc sets the doc data
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
} from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  // your config obj
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// provider which will let us use google auth
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  //it means everytime when someone interact with provider we will prompt them and we want them to select an account
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
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
      });
    } catch (err) {
      console.log("error creating user", err.message);
    }
  }
  return userDocRef;

  // if user exist
};
