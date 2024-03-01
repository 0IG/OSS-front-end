import React, { createContext, useState, useEffect } from "react";
// import firebase from "../firebaseConfig/FireBaseConfig";
import { auth } from "../../firebaseConfig/FireBaseConfig";
import { onAuthStateChanged } from "firebase/auth";

export const FirebaseAuthContext = createContext(undefined);

export const FirebaseAuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, setCurrentUser);
  }, []);

  return (
    <FirebaseAuthContext.Provider value={{ currentUser }}>
      {children}
    </FirebaseAuthContext.Provider>
  );
};
