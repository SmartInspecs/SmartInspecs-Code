import React, { useContext } from "react";
import { DashObraStyled } from "./style";
import no_image from "../../../assets/no_image.jpg";
import ModalEditInfo from "../../modalEditInfo";
import { ObrasContexts } from "../../../contexts/obrasContext";

export interface iObraSelected {
  id: string;
  nome: string;
  logradouro: string;
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
  const { modalEditInfo, setModalEditInfo } = useContext(ObrasContexts);
  // adicionar nome da obra a url, de modo: home/obra/nomeobra
  //adicionar menu inspeções, e doc segurança
  return (
    <>
      {modalEditInfo && <ModalEditInfo />}
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
                    Endereço: <p>{obraSelected?.logradouro}</p>
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
                {obraSelected?.respTecnico &&
                obraSelected?.prazo &&
                obraSelected.area ? (
                  true
                ) : (
                  <p className="warning">
                    Faltam informações importantes! Clique no botão abaixo e
                    adicione
                  </p>
                )}
                <button onClick={() => setModalEditInfo(true)}>
                  Editar informações
                </button>
              </div>
            </div>
          </div>
        </div>
      </DashObraStyled>
    </>
  );
};

export default ObraSelected;
