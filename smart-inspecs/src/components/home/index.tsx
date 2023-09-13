import React, { useContext } from "react";
import UserContext from "../../contexts/userContext";
import { auth } from "../../services/firebaseConfig";
import { Container } from "./style";
import MenuSidebar from "./menu";
import DashContentAdm from "./dash-content";
import { ObrasContexts } from "../../contexts/obrasContext";
import ModalCriarObra from "../modalCriarObra";

const Home = () => {
  const { userDb, logoutUser } = useContext(UserContext);
  const { modalOpen } = useContext(ObrasContexts);
  // const localUser = JSON.parse(localStorage.getItem("@Smart-Inspecs") || "{}");
  // para captar o usuário logado na plataforma use userDb.nome

  return (
    <>
      {modalOpen ? <ModalCriarObra /> : false}
      <Container>
        <MenuSidebar />
        <div className="dash">
          <header>
            <h2>
              Bem vindo, <span>{userDb ? userDb.name : "Carregando..."}!</span>
            </h2>
            <button onClick={() => logoutUser(auth)}>Logout</button>
          </header>
          <DashContentAdm />
        </div>
      </Container>
    </>
  );
};

export default Home;
