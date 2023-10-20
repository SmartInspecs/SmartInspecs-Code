import React from "react";
import { StyledModalWrapper } from "./style";

interface ModalEditFuncProps {
  setModalEditInfo: (value: boolean) => void;
}

const ModalEditFunc: React.FC<ModalEditFuncProps> = ({ setModalEditInfo }) => {
  return (
    <StyledModalWrapper>
      <div className="modal-box">
        <div className="modal-box-header">
          <div className="modal-title">ModalFuncionarios</div>
          <button
            className="modal-button"
            onClick={() => setModalEditInfo(false)}
          >
            X
          </button>
        </div>
      </div>
    </StyledModalWrapper>
  );
};

export default ModalEditFunc;
