import React, { useContext } from "react";
import { DashContent } from "./style";
import ObraCard from "../obraCard";
import { ObrasContexts } from "../../../contexts/obrasContext";

const DashContentAdm = () => {
  const { obras, loadingObra, addObras, setModalOpen } =
    useContext(ObrasContexts);
  const handleClick = () => {
    setModalOpen(true);
    addObras({ name: "teste", endereço: "teste", inspecoes: "teste" });
  };

  return (
    <DashContent>
      <span>home</span>
      <div className="dash-content-box-area">
        <h3 className="section-title">Gerenciamento</h3>
        <div className="dash-content-boxes">
          <button className="dash-content-box" onClick={() => handleClick()}>
            Cadastrar nova obra
          </button>
          <button className="dash-content-box">Gerenciar usuários</button>
          <button className="dash-content-box">Alterar dados</button>
          <button className="dash-content-box">Dashboard empresa</button>
        </div>
      </div>
      <div className="dash-obras">
        <h3 className="section-title">Minhas obras</h3>
        <div className="dash-content-obras">
          <ul className="obras-wrapper">
            {loadingObra ? (
              <p>carregando...</p>
            ) : (
              obras?.map(
                (
                  obra: { nome: string; endereço: string; inspecoes: string },
                  index: number
                ) => <ObraCard obra={obra} key={index} />
              )
            )}
          </ul>
        </div>
      </div>
    </DashContent>
  );
};

export default DashContentAdm;
