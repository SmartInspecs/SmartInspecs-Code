import React from "react";
import { Container } from "./style";
import Foto from "../../assets/Drone-PNG 1.png";
import { Link } from "react-router-dom";

const LandingContent = () => {
  return (
    <Container>
      <nav>
        <h2 className="logo">Smart Inspect</h2>
        <ul>
          <li>
            <Link to="/">Início</Link>
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
      <div className="callToAction">
        <img
          src={Foto}
          alt="Drone com sobreamento verde"
          className="droneImg"
        />
        <div className="callToActionRight">
          <h2 className="callToAction__title">inspeção com drones</h2>
        </div>
      </div>
    </Container>
  );
};

export { LandingContent };
