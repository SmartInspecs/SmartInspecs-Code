import React, { useContext } from "react";
import UserContext from "../../contexts/userContext";
import { auth } from "../../services/firebaseConfig";
import { Container } from "./style";
import MenuSidebar from "./menu";
import { ObrasContexts } from "../../contexts/obrasContext";
import ModalCriarObra from "../modalCriarObra";
import ModalObra from "./modalObra";
import { Outlet } from "react-router-dom";

const Home = () => {
  const { userDb, logoutUser } = useContext(UserContext);
  const { modalOpen, modalObra } = useContext(ObrasContexts);
  // const localUser = JSON.parse(localStorage.getItem("@Smart-Inspecs") || "{}");
  // para captar o usuário logado na plataforma use userDb.name

  return (
    <>
      {modalOpen ? <ModalCriarObra /> : false}
      {modalObra ? <ModalObra /> : false}
      <Container>
        <MenuSidebar />
        <div className="dash">
          <header>
            <h2>
              Bem vindo, <span>{userDb ? userDb.name : "Carregando..."}!</span>
            </h2>
            <button onClick={() => logoutUser(auth)}>Logout</button>
          </header>
          <Outlet />
        </div>
      </Container>
    </>
  );
};

export default Home;
