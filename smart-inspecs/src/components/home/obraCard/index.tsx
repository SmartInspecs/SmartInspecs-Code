import React, { useContext } from "react";
import { Card } from "./style";
import { ObrasContexts } from "../../../contexts/obrasContext";

interface iObraCardProps {
  obra: {
    nome: string;
    endereço: string;
    inspecoes: [];
    url: string;
  };
}

const ObraCard = ({ obra }: iObraCardProps) => {
  const { setModalObra, setObraSelected } = useContext(ObrasContexts);

  const handleClick = () => {
    setObraSelected(obra);
    setModalObra(true);
    localStorage.setItem("@Smart-Inspecs:obraSelected", JSON.stringify(obra));
  };

  return (
    <Card>
      {obra.url ? (
        <img src={obra.url} alt="Imagem da obra" />
      ) : (
        <div className="img"></div>
      )}
      <div className="bottom-card">
        <p>{obra.nome}</p>
        <div className="buttons">
          <button className="primary-button" onClick={() => handleClick()}>
            Saiba mais
          </button>
          <button className="secondary-button">Editar</button>
        </div>
        <span className="bottom-card-edit">Última edição: xx/yy/zzzz</span>
      </div>
    </Card>
  );
};

export default ObraCard;
