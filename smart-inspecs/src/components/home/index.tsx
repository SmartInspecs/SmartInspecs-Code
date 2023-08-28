import React, { useContext } from "react";
import UserContext from "../../contexts/userContext";
import { auth } from "../../services/firebaseConfig";
import { Container, Menu } from "./style";

const Home = () => {
  const { user, logoutUser } = useContext(UserContext);

  // const localUser = JSON.parse(localStorage.getItem("@Smart-Inspecs") || "{}");

  return (
    <Container>
      <Menu>
        <p>{user ? "existe" : "não existe"}</p>
        <p>username: {user ? user[0].email : "carregando..."}</p>
        <button onClick={() => logoutUser(auth)}>Logout</button>
      </Menu>
      <div>
        <h1>Home</h1>
      </div>
    </Container>
  );
};

export default Home;
