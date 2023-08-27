import React, { useContext } from "react";
import UserContext from "../../contexts/userContext";
import { auth } from "../../services/firebaseConfig";

const Home = () => {
  const { user, logoutUser } = useContext(UserContext);

  // const localUser = JSON.parse(localStorage.getItem("@Smart-Inspecs") || "{}");

  return (
    <>
      <p>{user ? "existe" : "não existe"}</p>
      <p>username: {user ? user[0].email : "carregando..."}</p>
      <button onClick={() => logoutUser(auth)}>Logout</button>
    </>
  );
};

export default Home;
