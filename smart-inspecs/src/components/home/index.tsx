import React, { useContext } from "react";
import UserContext from "../../contexts/userContext";
import { auth } from "../../services/firebaseConfig";
import { Container } from "./style";
import MenuSidebar from "./menu";

const Home = () => {
  const { user, logoutUser } = useContext(UserContext);

  // const localUser = JSON.parse(localStorage.getItem("@Smart-Inspecs") || "{}");

  return (
    <Container>
      <MenuSidebar />
      <div className="dash">
        <header>
          <h2>
            Bem vindo, <span>{user[0].email}!</span>
          </h2>
          <button onClick={() => logoutUser(auth)}>Logout</button>
        </header>
      </div>
    </Container>
  );
};

export default Home;
