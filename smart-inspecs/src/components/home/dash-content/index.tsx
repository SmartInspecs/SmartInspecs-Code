import React from "react";

const DashContentAdm = () => {
  return (
    <div className="dash-content">
      <span>home</span>
      <div className="dash-content-box-area">
        <h3>Gerenciamento</h3>
        <div className="dash-content-boxes">
          <button className="dash-content-box">Cadastrar nova obra</button>
          <button className="dash-content-box">Gerenciar usuários</button>
          <button className="dash-content-box">Alterar dados</button>
          <button className="dash-content-box">Dashboard empresa</button>
        </div>
      </div>
      <div className="dash-content-obras">
        <h3>Minhas obras</h3>
        <div className="dash-content-obras">
          <ul>
            <li className="dash-content-obras-box">
              <div className="img"></div>
              <p>Obra 1</p>
              <div className="buttons">
                <button>Saiba mais</button>
                <button>Editar</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashContentAdm;