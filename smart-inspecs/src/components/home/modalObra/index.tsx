import React, { useContext } from "react";
import { StyledModalWrapper } from "./style";
import { ObrasContexts } from "../../../contexts/obrasContext";
import no_image from "../../../assets/no_image.jpg";
import { Link } from "react-router-dom";
const ModalObra = () => {
  const { setModalObra, obraSelected } = useContext(ObrasContexts);

  return (
    <StyledModalWrapper>
      <div className="modal-box">
        <div className="modal-box-header">
          <h3 className="modal-title">{obraSelected.nome}</h3>
          <button onClick={() => setModalObra(false)}>X</button>
        </div>
        <div className="modal-box-content">
          <div className="modal-box-content-img">
            <img
              src={obraSelected.imgUrl ? obraSelected.imgUrl : no_image}
              alt="Imagem da obra"
              className="img-modal"
            />
          </div>
          <div className="modal-box-content-info">
            <span>Nome: {obraSelected.nome}</span>
            <span>Endereço: {obraSelected.endereco}</span>
            <Link to={"/"}>Acessar detalhe</Link>
          </div>
        </div>
      </div>
    </StyledModalWrapper>
  );
};

export default ModalObra;
