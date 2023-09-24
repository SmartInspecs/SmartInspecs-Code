import React, { useContext } from "react";
import { DashContent } from "./style";
import ObraCard from "../obraCard";
import { ObrasContexts } from "../../../contexts/obrasContext";
import iconCadastrar from "../../../assets/icons-home/cadastrar_obra.png";
import iconGerenciar from "../../../assets/icons-home/gerenciar_usuarios.png";
import iconDashboard from "../../../assets/icons-home/dashboard_empresa.png";
import iconAlterar from "../../../assets/icons-home/alterar_dados.png";
import { useNavigate } from "react-router-dom";

const DashContentAdm = () => {
  const { obras, loadingObra, setModalOpen } = useContext(ObrasContexts);

  const navigate = useNavigate();
  const handleClickWorkInProgress = () => {
    navigate("/working-progress");
  };

  return (
    <DashContent>
      <span>home</span>
      <div className="dash-content-box-area">
        <h3 className="section-title">Gerenciamento</h3>
        <div className="dash-content-boxes">
          <button
            className="dash-content-box"
            onClick={() => setModalOpen(true)}
          >
            <img
              src={iconCadastrar}
              alt=" Um caminhão de construção civil com um sinal de mais"
            />
            <span>Cadastrar nova obra</span>
          </button>
          <button className="dash-content-box">
            <img
              src={iconGerenciar}
              alt="Dois trabalhadores com capacete de segurança"
            />
            <span>Gerenciar usuários</span>
          </button>
          <button className="dash-content-box">
            <img src={iconAlterar} alt="Lápis sobre um papel " />
            <span>Alterar meus dados</span>
          </button>
          <button
            className="dash-content-box"
            onClick={() => handleClickWorkInProgress()}
          >
            <img src={iconDashboard} alt="Gráfico em barras verticais" />
            <span>Dashboard empresa</span>
          </button>
        </div>
      </div>
      <div className="dash-obras">
        <h3 className="section-title">Minhas obras</h3>
        <div className="dash-content-obras">
          <ul className="obras-wrapper">
            {loadingObra ? (
              <p>carregando...</p>
            ) : obras?.length > 0 ? (
              obras?.map(
                (
                  obra: {
                    nome: string;
                    endereço: string;
                    inspecoes: [];
                    url: string;
                  },
                  index: number
                ) => <ObraCard obra={obra} key={index} />
              )
            ) : (
              <p>Nenhuma obra cadastrada</p>
            )}
          </ul>
        </div>
      </div>
    </DashContent>
  );
};

export default DashContentAdm;
