import React from "react";
import { Container } from "./style";
import Foto from "../../assets/Drone-PNG 1.png";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon 2.png";
import icon3 from "../../assets/icon3.png";
import qualidade from "../../assets/qualidade.jpeg";
import seguranca from "../../assets/seguranca.jpeg";
import { Link, useNavigate } from "react-router-dom";
import mrv from "../../assets/mrvlogo.png";
import cnpq from "../../assets/CNPq_v2017_rgb.jpg";
import capes from "../../assets/logo-original-capes.png";
import fapesb from "../../assets/fapesb3.jpg";
import fep from "../../assets/Fep-logo.png";
const LandingContent = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

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
            <Link to="#about">Sobre nós</Link>
          </li>
        </ul>
        <button onClick={() => handleClick()}>login</button>
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
      <ul className="solutions" id="about">
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
          <img src={seguranca} alt="inspeção de qualidade com drone" />
          <div className="aboutUs_card_text">
            <h3 className="aboutUs__card__text__title">
              inspeção de segurança
            </h3>
            <p className="aboutUs__card__text__subtitle">
              A inspeção automatizada de fachadas e telhados por meio de drones
              e algoritmos de inteligência artificial é uma abordagem inovadora
              e eficiente para avaliar a condição estrutural e a integridade de
              edifícios e outras estruturas. Essa combinação de tecnologias
              permite realizar inspeções com mais celeridade, precisão e
              segurança em comparação com os métodos tradicionais.
            </p>
          </div>
        </div>
        <div className="aboutUs__card__2">
          <div className="aboutUs_card_text">
            <h3 className="aboutUs__card__text__title">
              inspeção de qualidade
            </h3>
            <p className="aboutUs__card__text__subtitle">
              A inspeção de segurança em canteiro de obras com uso de drones e
              dispositivos móveis fornece informações em tempo hábil das
              situações de risco e condições inseguras, de modo a dar celeridade
              ao processo de tomada de decisão para correções imediatas, ações
              corretivas e preventivas. O módulo segurança do sistema Smart
              Inspecs tem como premissa inspecionar requisitos de segurança
              especificados pelas normas regulamentadoras de segurança do
              trabalho voltadas à construção civil (ex. NR18 e NR35), sendo
              capaz de monitorar grandes áreas e de difícil acesso, com
              diferentes perspectivas e em reduzido tempo.
            </p>
          </div>
          <img src={qualidade} alt="inspeção de qualidade" />
        </div>
      </div>
      <div className="division" id="nossas">
        <hr />
        <span>Parceiros</span>
        <hr />
      </div>
      <ul className="partners">
        <li>
          <img src={mrv} alt="MRV construtora" />
        </li>
        <li>
          <img src={cnpq} alt="CNPQ" />
        </li>
        <li>
          <img src={capes} alt="CAPES" />
        </li>
        <li>
          <img src={fapesb} alt="FAPESB" />
        </li>
        <li>
          <img src={fep} alt="FEP" />
        </li>
      </ul>
      <hr className="division-last" />
      <footer>
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
        <button>Fale conosco</button>
      </footer>
      <p className="copy">Todos direitos reservados. GETEC UFBA.</p>
    </Container>
  );
};

export { LandingContent };
