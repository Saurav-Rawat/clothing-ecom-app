import { useState, createContext, useEffect } from "react";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    // inside callback(user) we can a user Object which has the value of currently logged in user(if logged in) else(if not logged in) user object will be null
    // as onAuthStateChanged returns a unsubscribe function we add it in cleanup to unsubscribe
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
