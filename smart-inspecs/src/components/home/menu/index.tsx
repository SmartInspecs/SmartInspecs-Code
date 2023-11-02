import React from "react";
import { StyledMenu, StyledLogo } from "../style";
import { Link, useNavigate } from "react-router-dom";

const MenuSidebar = () => {
  const navigate = useNavigate();
  const handleClickTo = (add: string) => {
    navigate(`/${add}`);
  };

  let path = window.location.pathname;

  return (
    <StyledMenu>
      <div className="inner-container">
        <StyledLogo>smart inspecs</StyledLogo>
        <div className="side-options">
          <h3>Home</h3>
          <div className="side-option">
            <button
              onClick={() => handleClickTo("home")}
              className={
                path === "/home"
                  ? "side-option-button-selected"
                  : "side-option-button"
              }
            >
              Início
            </button>
          </div>
          <h3>Inspeções</h3>
          <div className="side-option">
            <button
              className={
                path.includes("inspecao-seguranca")
                  ? "side-option-button-selected"
                  : "side-option-button"
              }
            >
              Inspeção de segurança
            </button>
            <button className="side-option-button">Inspeção de telhado</button>
            <button className="side-option-button">Inspeção de fachada</button>
            <button className="side-option-button">Avanço físico</button>
          </div>
          <h3>Relatórios</h3>
          <div className="side-option">
            <button className="side-option-button">Acessar relatórios</button>
          </div>
          <h3>Minha Empresa</h3>
          <div className="side-option">
            <button className="side-option-button">Dashboard empresa</button>
          </div>
          <Link to={"/suporte"}>ir para suporte ➙</Link>
        </div>
      </div>
    </StyledMenu>
  );
};

export default MenuSidebar;
