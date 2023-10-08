import React, { useContext, useState } from "react";
import { StyledModalWrapper } from "./style";
import { ObrasContexts } from "../../contexts/obrasContext";
import { useForm } from "react-hook-form";
import pencil from "../../assets/pencil.png";
import trash from "../../assets/trash.png";

interface iFuncionario {
  nome: string;
  email: string;
  cargo: string;
  admin?: boolean;
}
const ModalFuncionarios = () => {
  // const localStr = localStorage.getItem("@Smart-Inspecs:obraSelected");
  // const obraSelected = localStr && JSON.parse(localStr);
  const { setModalEditFunc, addFunc, setAddFunc, obraSelected, updateWorkers } =
    useContext(ObrasContexts);
  const [edit, setEdit] = useState<iFuncionario[]>([]); // Initialize edit with an empty array of iFuncionario objects
  const form = useForm<iFuncionario>({
    defaultValues: {
      nome: "",
      email: "",
      cargo: "",
    },
  });
  const { register, handleSubmit } = form;

  const onSubmit = handleSubmit((data: iFuncionario, e) => {
    e?.preventDefault();
    updateWorkers(obraSelected.id, [...obraSelected.funcionarios, data], "add");
    // window.location.reload();
    // updateWorkers(obraSelected.id, [...obraSelected.funcionarios, data]);
  });

  const handleDeleteFunc = (index: number) => {
    const funcArray = [...obraSelected.funcionarios];
    funcArray.splice(index, 1);
    updateWorkers(obraSelected.id, funcArray, "delete");
  };

  const handleEditFunc = (index: number) => {
    setEdit([obraSelected.funcionarios[index]]);
  };

  //////////////////////////////////////
  /// trabalhar no edit funcionario ///
  /////////////////////////////////////
  return (
    <StyledModalWrapper>
      <div className="modal-box">
        <div className="modal-box-header">
          <div className="modal-title">ModalFuncionarios</div>
          <button
            className="modal-button"
            onClick={() => setModalEditFunc(false)}
          >
            X
          </button>
        </div>
        <div className="modal-box-content">
          <div className="modal-content-text">
            {obraSelected?.funcionarios ? (
              <ul className="func-list">
                {obraSelected.funcionarios.map(
                  (funcionario: any, index: number) => (
                    <li key={index} className="func-card">
                      <div className="func-card-left">
                        <span>
                          Nome: <p>{funcionario.nome}</p>
                        </span>
                        <span>
                          Email: <p>{funcionario.email}</p>
                        </span>
                        <span>
                          Cargo: <p>{funcionario.cargo}</p>
                        </span>
                      </div>
                      <div className="func-card-right">
                        <button onClick={() => handleEditFunc(index)}>
                          <img src={pencil} alt="lápis, indicando edição" />
                        </button>
                        <button onClick={() => handleDeleteFunc(index)}>
                          <img src={trash} alt="Lixo, indicando deletar" />
                        </button>
                      </div>
                    </li>
                  )
                )}
              </ul>
            ) : (
              <p>Sem funcionários cadastrados</p>
            )}
            <button onClick={() => setAddFunc(true)}>
              Adicionar funcionários
            </button>
            {addFunc && (
              <form noValidate onSubmit={onSubmit}>
                <input
                  type="text"
                  {...register("nome", {
                    required: "O nome do funcionário é obrigatório",
                  })}
                  placeholder="Nome"
                />
                <input
                  type="email"
                  {...register("email", {
                    required: "O email do funcionário é obrigatório",
                  })}
                  placeholder="Email"
                />
                <input
                  type="text"
                  {...register("cargo", {
                    required: "o cargo do funcionário é obrigatório",
                  })}
                  placeholder="Cargo"
                />
                <button type="submit">Adicionar</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </StyledModalWrapper>
  );
};

export default ModalFuncionarios;
