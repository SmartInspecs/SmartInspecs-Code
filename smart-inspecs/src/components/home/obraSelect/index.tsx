import React, { useContext } from "react";
import { DashObraStyled } from "./style";
import no_image from "../../../assets/no_image.jpg";
import ModalEditInfo from "../../modalEditInfo";
import { ObrasContexts } from "../../../contexts/obrasContext";
import ModalFuncionarios from "../../modalWorkers";
import iconAgendar from "../../../assets/icons-obraSelect/Agendar.png";
import iconDashboard from "../../../assets/icons-obraSelect/dashboard.png";
import iconDocumentos from "../../../assets/icons-obraSelect/documentos.png";
import iconGaleria from "../../../assets/icons-obraSelect/galeria.png";
import iconPlano from "../../../assets/icons-obraSelect/plano.png";
import iconRelatório from "../../../assets/icons-obraSelect/relatório.png";
import iconGerenciar from "../../../assets/icons-obraSelect/gerenciar.png";
import iconInspecao from "../../../assets/icons-obraSelect/inspecao.png";
import { useNavigate, Link } from "react-router-dom";

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
  const { modalEditInfo, setModalEditInfo, modalEditFunc, setModalEditFunc } =
    useContext(ObrasContexts);
  const navigate = useNavigate();
  const handleClickOutside = (addUrl: string) => {
    window.location.assign(addUrl);
  };

  // adicionar nome da obra a url, de modo: home/obra/nomeobra
  //adicionar menu inspeções, e doc segurança
  return (
    <>
      {modalEditInfo && <ModalEditInfo />}
      {modalEditFunc && <ModalFuncionarios />}
      <DashObraStyled>
        <span>home ➙ obras ➙ {obraSelected?.nome}</span>
        <div className="dash-content-box-area">
          <div className="dash-content-box-gerenciamento">
            <span className="section-title">Gerenciamento de obra</span>
            <div className="dash-content-boxes">
              <button className="box1" onClick={() => navigate("agendamento")}>
                <img
                  src={iconAgendar}
                  alt="Um drone encima de um mini relógio e uma lupa"
                />
                <span>Agendar Inspeção</span>
              </button>
              <button
                className="box2"
                onClick={() => handleClickOutside("/home/inspecao-seguranca")}
              >
                <img src={iconInspecao} alt="Drone sobre uma mão" />
                <span>Inspeção</span>
              </button>
              <button className="box3">
                <img src={iconRelatório} alt="Um relatório com com check" />
                <span>Relatórios concluídos</span>
              </button>
              <button className="box4">
                <img src={iconPlano} alt="Um guindaste sobre um papel" />
                <span>Plano de ação</span>
              </button>
              <button className="box5">
                <img src={iconDashboard} alt="Gráfico em colunas verticais" />
                <span>Dashboard empresa</span>
              </button>
              <button className="box6">
                <img
                  src={iconDocumentos}
                  alt="Documento com um símbolo de segurança"
                />
                <span>Documentação de segurança</span>
              </button>
              <button className="box7" onClick={() => setModalEditFunc(true)}>
                <img src={iconGerenciar} alt="Dois trabalhadores lado a lado" />
                <span>Gerenciar funcionários</span>
              </button>
              <button className="box8">
                <img
                  src={iconGaleria}
                  alt="Imagem exemplo de uma paisagem montanhosa e o sol"
                />
                <span>Galeria</span>
              </button>
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
                <span>Informações importantes:</span>
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
                  <Link
                    className="link-button"
                    to="#"
                    onClick={() => setModalEditInfo(true)}
                  >
                    Editar informações
                  </Link>
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
              </div>
            </div>
          </div>
        </div>
      </DashObraStyled>
    </>
  );
};

export default ObraSelected;
