import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState, createContext } from "react";
import { auth } from "../services/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { FormValues } from "../components/loginForm";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  const signIn = (data: FormValues) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const userSigned = userCredential.user;
        setUser(userSigned);
        console.log(user);
        navigate("/home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
    console.log(data);
  };

  return (
    <AuthContext.Provider value={{ user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
