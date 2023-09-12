import React from "react";
import { Card } from "./style";

interface iObraCardProps {
  key: number;
  obra: {
    nome: string;
    endereço: string;
    inspecoes: string;
  };
}

const ObraCard = ({ obra }: iObraCardProps) => {
  return (
    <Card>
      <div className="img"></div>
      <div className="bottom-card">
        <p>{obra.nome}</p>
        <div className="buttons">
          <button className="primary-button">Saiba mais</button>
          <button className="secondary-button">Editar</button>
        </div>
        <span className="bottom-card-edit">Última edição: xx/yy/zzzz</span>
      </div>
    </Card>
  );
};

export default ObraCard;
