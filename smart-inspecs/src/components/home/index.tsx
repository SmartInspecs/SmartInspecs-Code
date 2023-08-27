import React, { useContext } from "react";
import UserContext from "../../contexts/userContext";
import { auth } from "../../services/firebaseConfig";

const Home = () => {
  const { logoutUser } = useContext(UserContext);
  // const user = JSON.parse(localStorage.getItem("@Smart-Inspecs") || "{}");
  const user = auth.currentUser;
  return (
    <>
      <p>username: {user ? user.email : "Não encontrado"}</p>
      <button onClick={() => logoutUser(auth)}>Logout</button>
    </>
  );
};

export default Home;
