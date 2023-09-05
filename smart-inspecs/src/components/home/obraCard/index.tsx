import React from "react";
import { Card } from "./style";

const ObraCard = () => {
  return (
    <Card>
      <div className="img"></div>
      <p>Obra 1</p>
      <div className="buttons">
        <button>Saiba mais</button>
        <button>Editar</button>
      </div>
    </Card>
  );
};

export default ObraCard;
