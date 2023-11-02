import React, { useContext } from "react";
import { ContainerStyled } from "./style";
import { ObrasContexts } from "../../contexts/obrasContext";

const InspecaoSeg = () => {
  const { obraSelected } = useContext(ObrasContexts);

  return (
    <ContainerStyled>
      <span className="navigation">
        home ➙ obras ➙ {obraSelected?.nome} ➙ inspeção de segurança
      </span>
      <h3>Inspeção de segurança</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat
        dolor erat, vel interdum mauris tincidunt nec. Praesent auctor est vel
        volutpat commodo. Nulla ac sem non augue rhoncus tincidunt. Ut quis
        justo feugiat, pulvinar dui et, eleifend orci. Nullam tincidunt sapien
        at purus ullamcorper dictum. Quisque sit amet tristique neque, sed
        tincidunt lectus. Donec ornare, metus ut consectetur consequat, diam
        orci laoreet nisl, et condimentum felis dui ac lorem. Morbi cursus
        tempus odio ac laoreet. Phasellus cursus finibus iaculis.{" "}
      </p>
      <span className="options">Opções disponíveis</span>
      <div className="options-buttons">
        <button>Iniciar inspeção de segurança</button>
        <button>Enviar fotos para galeria</button>
        <button>Finalizar relatório</button>
      </div>
    </ContainerStyled>
  );
};

export default InspecaoSeg;
