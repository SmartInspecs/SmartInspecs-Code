import React, { useContext, useState } from "react";
import { StyledAgendamentoDiv } from "./style";
import { ObrasContexts } from "../../../contexts/obrasContext";
import { useForm } from "react-hook-form";

interface iAgendamento {
  obra: string;
  data: string;
  responsavel: string;
}
const Agendamento = () => {
  const { obraSelected } = useContext(ObrasContexts);
  const [formAgenda, setFormAgenda] = useState(false);
  const [agendamentos, setAgendamentos] = useState<iAgendamento[]>([]);

  const { register, handleSubmit } = useForm<iAgendamento>({
    defaultValues: {
      obra: obraSelected?.nome,
      data: "",
      responsavel: "",
    },
  });

  const onSubmit = handleSubmit((data: iAgendamento, e) => {
    e?.preventDefault();
    console.log(data);
    setAgendamentos([...agendamentos, data]);
  });

  return (
    <StyledAgendamentoDiv>
      <span>home ➙ obras ➙ {obraSelected?.nome}</span>
      <div className="dash-content-box-area">
        <div className="agendamentos">
          <span className="section-title">Agendamentos</span>
          <ul className="agendamentos-box">
            {agendamentos.length === 0 && <span>Sem agendamentos</span>}
            {agendamentos.map((agendamento, index) => (
              <li className="agendamento" key={index}>
                <span>Data: {agendamento.data}</span>
                <span>Responsável: {agendamento.responsavel}</span>
              </li>
            ))}
          </ul>
        </div>
        <button
          className="criar-agendamento"
          onClick={() => setFormAgenda(true)}
        >
          Criar novo agendamento
        </button>
        {formAgenda && (
          <form className="form-agenda" onSubmit={onSubmit}>
            <input
              type="datetime-local"
              {...register("data")}
              placeholder="Data"
            />
            <input
              type="text"
              {...register("responsavel")}
              placeholder="Responsável"
            />
            <button>Agendar</button>
          </form>
        )}
      </div>
    </StyledAgendamentoDiv>
  );
};

export default Agendamento;
