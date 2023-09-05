import React from "react";
import { DashContent } from "./style";
import ObraCard from "../obraCard";

const DashContentAdm = () => {
  return (
    <DashContent>
      <span>home</span>
      <div className="dash-content-box-area">
        <h3 className="section-title">Gerenciamento</h3>
        <div className="dash-content-boxes">
          <button className="dash-content-box">Cadastrar nova obra</button>
          <button className="dash-content-box">Gerenciar usuários</button>
          <button className="dash-content-box">Alterar dados</button>
          <button className="dash-content-box">Dashboard empresa</button>
        </div>
      </div>
      <div className="dash-obras">
        <h3 className="section-title">Minhas obras</h3>
        <div className="dash-content-obras">
          <ul className="obras-wrapper">
            <ObraCard />
          </ul>
        </div>
      </div>
    </DashContent>
  );
};

export default DashContentAdm;
