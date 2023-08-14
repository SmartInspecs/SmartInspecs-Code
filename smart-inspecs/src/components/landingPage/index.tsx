import React from "react";
import { Container } from "./style";
import Foto from "../../assets/Drone-PNG 1.png";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon 2.png";
import icon3 from "../../assets/icon3.png";
import imgSample from "../../assets/img_sample.png";
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
      <div className="aboutUs">
        <div className="aboutUs__card">
          <img src={imgSample} alt="imagem temporária" />
          <div className="aboutUs_card_text">
            <h3 className="aboutUs__card__text__title">inspeção com drones</h3>
            <p className="aboutUs__card__text__subtitle">
              Somos uma empresa que desenvolve soluções para inspeção de obras
              civis, utilizando drones e inteligência artificial. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Nam egestas at ipsum
              et tincidunt. In cursus auctor dolor sit amet vestibulum. Maecenas
              blandit nibh nec commodo elementum.
            </p>
          </div>
        </div>
        <div className="aboutUs__card__2">
          <div className="aboutUs_card_text">
            <h3 className="aboutUs__card__text__title">inspeção com drones</h3>
            <p className="aboutUs__card__text__subtitle">
              Nossa missão é ajudar as empresas a reduzirem custos e aumentarem
              a segurança de seus funcionários.
            </p>
          </div>
          <img src={imgSample} alt="imagem temporária" />
        </div>
      </div>
    </Container>
  );
};

export { LandingContent };
