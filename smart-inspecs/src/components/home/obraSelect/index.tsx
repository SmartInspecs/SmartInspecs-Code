import React from "react";
import { DashObraStyled } from "./style";
import no_image from "../../../assets/no_image.jpg";
import { Link } from "react-router-dom";

interface iObraSelected {
  nome: string;
  endereco: string;
  cep: string;
  respTecnico: string;
  respSegQual: string;
  prazo: string;
  princMetConst: string;
  tiposEPCs: string;
  area: string;
  tipoObra: string;
  inspecoes: [];
  url: string;
}

const ObraSelected = () => {
  const obraLocalStorage = localStorage.getItem("@Smart-Inspecs:obraSelected");
  const obraSelected: iObraSelected | null =
    obraLocalStorage && JSON.parse(obraLocalStorage);

  // adicionar nome da obra a url, de modo: home/obra/nomeobra
  return (
    <DashObraStyled>
      <span>home ➙ obras ➙ {obraSelected?.nome}</span>
      <div className="dash-content-box-area">
        <div className="dash-content-box-gerenciamento">
          <span className="section-title">Gerenciamento de obra</span>
          <div className="dash-content-boxes">
            <button className="box1">Agendar inspeção</button>
            <button className="box2">Plano de ação</button>
            <button className="box3">Relatórios concluídos</button>
            <button className="box4">Dashboard empresa</button>
            <button className="box5">Gerenciar funcionários</button>
            <button className="box6">Galeria</button>
          </div>
        </div>
        <div className="dash-content-box-detalhes">
          <span className="section-title">Detalhes da obra</span>
          <div className="dash-content-boxes-detalhes">
            <div className="dash-detalhes-img">
              <img
                src={obraSelected!.url ? obraSelected!.url : no_image}
                alt="imagem referente a obra selecionada"
              />
            </div>
            <div className="important-info">
              <span>Informações importantes</span>
              <div className="important-info-list">
                <span>
                  Nome da obra: <p>{obraSelected?.nome}</p>
                </span>
                <span>
                  Endereço: <p>{obraSelected?.endereco}</p>
                </span>
                <span>
                  CEP: <p>{obraSelected?.cep}</p>
                </span>
                <span>
                  Resp. técnico: <p>{obraSelected?.respTecnico}</p>
                </span>
                <span>
                  Resp. de seg./qual.: <p>{obraSelected?.respSegQual}</p>
                </span>
                <span>
                  Prazo: <p>{obraSelected?.prazo}</p>
                </span>
                <span>
                  Princ. métodos construtivos:{" "}
                  <p>{obraSelected?.princMetConst}</p>
                </span>
                <span>
                  Tipos de EPCs: <p>{obraSelected?.tiposEPCs}</p>
                </span>
                <span>
                  Área: <p>{obraSelected?.area}</p>
                </span>
                <span>
                  Tipo de obra: <p>{obraSelected?.tipoObra}</p>
                </span>
              </div>
              <button>Editar informações</button>
            </div>
          </div>
        </div>
      </div>
    </DashObraStyled>
  );
};

export default ObraSelected;
