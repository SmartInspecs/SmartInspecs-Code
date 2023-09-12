import React, { useContext } from "react";
import { StyledModalWrapper } from "./style";
import { ObrasContexts } from "../../contexts/obrasContext";

const ModalCriarObra = () => {
  const { setModalOpen } = useContext(ObrasContexts);

  const handleClickClose = () => {
    setModalOpen(false);
  };

  return (
    <StyledModalWrapper>
      <div className="modal-box">
        <div className="modal-box-header">
          <h3>Criar nova obra</h3>
          <button onClick={() => handleClickClose()}>X</button>
        </div>
      </div>
    </StyledModalWrapper>
  );
};

export default ModalCriarObra;
