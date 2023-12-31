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
import { FormValues } from "../components/register/index";
import { iDefaultProviderProps } from "./@types";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../services/firebaseConfig";
import {
  DocumentData,
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";

// Consertar tipos
const UserContext = createContext<any | null>(null);

export const UserContextProvider = ({ children }: iDefaultProviderProps) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User[] | null>(null);
  const [userDb, setUserDb] = useState<DocumentData | null>(null); // [0] -> userDb[0]
  const [userReady, setUserReady] = useState<boolean>(false);
  const [empresas, setEmpresas] = useState<any[] | null>(null);

  useEffect(() => {
    getEmpresas();
    onAuthStateChanged(auth, (currUser) => {
      if (currUser) {
        //colocando usuário no estado user
        setUser(currUser.providerData);
        const userEmail = currUser.email;
        //buscando as informcações do usuário no banco de dados
        const usersCollection = collection(db, "users");
        const q = query(usersCollection, where("email", "==", userEmail));

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const querySnapshot = getDocs(q).then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            //colocando as informações do usuário (do banco de dados) no estado userDb
            setUserDb(doc.data());
          });
          setUserReady(true);
        });

        console.log("User is signed in.");
      } else {
        setUser(null);
        console.log("No user is signed in.");
      }
      // setUserReady(true);
    });
  }, []);

  const createUserDb = (
    userId: User,
    name: string,
    email: string,
    empresa: string
  ) => {
    setDoc(doc(db, "users", userId.uid), { name, email, empresa, adm: true }) //adm: true -> registro exclusivos do admin
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  };

  const createUser = (auth: Auth, data: FormValues) => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        localStorage.setItem(
          "@Smart-Inspecs",
          JSON.stringify(user.providerData)
        );
        setUser(user.providerData);
        createUserDb(user, data.nome, data.email, data.empresa);
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
        localStorage.removeItem("@Smart-Inspecs:obraSelected");
        setUser(null);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.code, error.message);
        alert("Erro ao deslogar");
      });
  };

  const getEmpresas = () => {
    const empresasCollection = collection(db, "empresas");
    let empresasQuery: any[] = [];
    const querySnapshot = getDocs(empresasCollection).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        empresasQuery.push(doc.data());
      });
    });
    setEmpresas(empresasQuery);
  };

  return (
    <UserContext.Provider
      value={{
        createUser,
        loginUser,
        logoutUser,
        user,
        userReady,
        userDb,
        getEmpresas,
        empresas,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
