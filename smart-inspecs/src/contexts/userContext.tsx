import { createContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  Auth,
  UserInfo as User,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { iDefaultProviderProps } from "./@types";
import { useNavigate } from "react-router-dom";
import { auth } from "../services/firebaseConfig";

const UserContext = createContext<any | null>(null);

export const UserContextProvider = ({ children }: iDefaultProviderProps) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User[] | null>(null);
  const [userReady, setUserReady] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (currUser) => {
      if (currUser) {
        setUser(currUser.providerData);
        console.log("User is signed in.");
      } else {
        setUser(null);
        console.log("No user is signed in.");
      }
      setUserReady(true);
    });
  }, []);

  const createUser = (auth: Auth, email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        localStorage.setItem(
          "@Smart-Inspecs",
          JSON.stringify(user.providerData)
        );
        setUser(user.providerData);
        navigate("/home");
      })
      .catch((error) => {
        console.log(error.code, error.message);
        //modal ERROR
      });
  };

  const loginUser = (auth: Auth, email: string, password: string) => {
    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            localStorage.setItem(
              "@Smart-Inspecs",
              JSON.stringify(user.providerData)
            );
            setUser(user.providerData);
            navigate("/home");
          })
          .catch((error) => {
            console.log(error.code, error.message);
            alert("Erro ao logar");
          });
      })
      .catch((error) => {
        console.log("Erro ao configurar a persistência:", error);
      });
  };

  const logoutUser = (auth: Auth) => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("@Smart-Inspecs");
        setUser(null);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.code, error.message);
        alert("Erro ao deslogar");
      });
  };

  return (
    <UserContext.Provider
      value={{ createUser, loginUser, logoutUser, user, userReady }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
