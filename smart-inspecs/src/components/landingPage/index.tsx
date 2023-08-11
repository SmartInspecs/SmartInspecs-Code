import React from "react";
import { Container } from "./style";
import Foto from "../../assets/Drone-PNG 1.png";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon 2.png";
import icon3 from "../../assets/icon3.png";
import { Link } from "react-router-dom";

const LandingContent = () => {
  return (
    <Container>
      <nav>
        <h2 className="logo">smart inspecs</h2>
        <ul>
          <li>
            <Link to="#inicio">Início</Link>
          </li>
          <li>
            <Link to="#nossas">Nossas soluções</Link>
          </li>
          <li>
            <Link to="/">Sobre nós</Link>
          </li>
        </ul>
        <button>login</button>
      </nav>
      <div className="callToAction" id="inicio">
        <img
          src={Foto}
          alt="Drone com sobreamento verde"
          className="droneImg"
        />
        <div className="callToAction--Right">
          <h2 className="callToAction__title">inspeção com drones</h2>
          <p className="callToAction__subtitle">
            sistema informatizado para inspeção em obras com drone
          </p>
          <div className="callToAction--Right__buttons">
            <button className="callToAction--Right__buttons__teste">
              teste agora
            </button>
            <button className="callToAction--Right__buttons__conheca">
              conheça
            </button>
          </div>
        </div>
      </div>
      <div className="division" id="nossas">
        <hr />
        <span>nossas soluções</span>
        <hr />
      </div>
      <ul className="solutions">
        <li className="solutions__cards">
          <img src={icon1} alt="Drone inspecionando uma casa" />
          <span className="solutions__cards__title">
            Inspeção de telhados e estruturas
          </span>
        </li>
        <li className="solutions__cards">
          <img src={icon2} alt="Escudo, indicando segurança" />
          <span className="solutions__cards__title">
            Inspeção de segurança da obra
          </span>
        </li>
        <li className="solutions__cards">
          <img src={icon3} alt="Lupa inspecionando uma fotografia" />
          <span className="solutions__cards__title">
            Reconhecimento de imagens de guarda-corpo
          </span>
        </li>
      </ul>
    </Container>
  );
};

export { LandingContent };
