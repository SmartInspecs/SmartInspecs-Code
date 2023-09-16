import React from "react";
import { StyledMenu, StyledLogo } from "../style";
import { Link } from "react-router-dom";
import icon_house from "../../../assets/icons-home/icon_house.png";

const MenuSidebar = () => {
  return (
    <StyledMenu>
      <div className="inner-container">
        <StyledLogo>smart inspecs</StyledLogo>
        <div className="side-options">
          <h3>Home</h3>
          <div className="side-option">
            <button className="side-option-buttom">
              <img src={icon_house} alt="Uma casa"/>
              <span>Início</span>
            </button>
          </div>
          <h3>Inspeções</h3>
          <div className="side-option">
            <button>Inspeção de segurança</button>
            <button>Inspeção de telhado</button>
            <button>Inspeção de fachada</button>
            <button>Avanço físico</button>
          </div>
          <h3>Relatórios</h3>
          <div className="side-option">
            <button>Acessar relatórios</button>
          </div>
          <h3>Minha Empresa</h3>
          <div className="side-option">
            <button>Dashboard empresa</button>
          </div>
          <Link to={"/suporte"}>ir para suporte ➙</Link>
        </div>
      </div>
    </StyledMenu>
  );
};

export default MenuSidebar;
