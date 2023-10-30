import React, { useContext } from "react";
import { Card } from "./style";
import { ObrasContexts } from "../../../contexts/obrasContext";
import { Timestamp } from "firebase/firestore";

interface iObraCardProps {
  obra: {
    id: string;
    nome: string;
    endereço: string;
    inspecoes: [];
    url: string;
    updateAt?: { nanoseconds: number; seconds: number };
  };
}

const ObraCard = ({ obra }: iObraCardProps) => {
  const { setModalObra, getObra } = useContext(ObrasContexts);

  const handleClick = async () => {
    await getObra(obra.id);
    setModalObra(true);
    localStorage.setItem("@Smart-Inspecs:obraSelected", JSON.stringify(obra));
  };

  const handleDate = (date: number | undefined) => {
    if (!date) {
      return;
    }
    const dataParsed = new Date(date * 1000);
    return dataParsed;
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
        <span className="bottom-card-edit">
          Última edição: {handleDate(obra.updateAt?.seconds)?.toString()}
        </span>
      </div>
    </Card>
  );
};

export default ObraCard;
