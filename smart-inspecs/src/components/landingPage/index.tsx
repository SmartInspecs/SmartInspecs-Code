import React from "react";
import { Container } from "./style";
import Foto from "../../assets/Drone-PNG 1.png";
import { Link } from "react-router-dom";

const LandingContent = () => {
  return (
    <Container>
      <nav>
        <h2 className="logo">smart inspect</h2>
        <ul>
          <li>
            <Link to="#inicio">Início</Link>
          </li>
          <li>
            <Link to="/">Nossas soluções</Link>
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
      <div className="division">
        <hr />
        <span>nossas soluções</span>
        <hr />
      </div>
    </Container>
  );
};

export { LandingContent };
