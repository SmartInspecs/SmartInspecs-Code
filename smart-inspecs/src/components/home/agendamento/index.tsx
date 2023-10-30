import React, { useContext, useState } from "react";
import { StyledAgendamentoDiv } from "./style";
import { ObrasContexts } from "../../../contexts/obrasContext";
import { useForm } from "react-hook-form";
import { InspecaoContext } from "../../../contexts/inspecaoContext";
import { format } from "date-fns";

interface iAgendamento {
  finalidade: string;
  date: string;
  responsavel: string;
}

const Agendamento = () => {
  const { obraSelected } = useContext(ObrasContexts);
  const {
    addAgendamento,
    deleteAgendamento,
    agendamentosSnapshot,
    loadingAgendamentos,
  } = useContext(InspecaoContext);
  const [formAgenda, setFormAgenda] = useState(false);
  const [agendamentosLocal, setAgendamentosLocal] = useState<iAgendamento[]>(
    []
  );

  const { register, handleSubmit } = useForm<iAgendamento>({
    defaultValues: {
      date: "",
      responsavel: "",
      finalidade: "",
    },
  });

  const onSubmit = handleSubmit((data: iAgendamento, e) => {
    e?.preventDefault();
    setAgendamentosLocal([...agendamentosLocal, data]);
    addAgendamento(data);
  });

  const formatDate = (date: any) => {
    const dateParsed = new Date(date);
    return format(dateParsed, "dd/MM/yyyy HH:mm");
  };

  return (
    <StyledAgendamentoDiv>
      <span>home ➙ obras ➙ {obraSelected?.nome}</span>
      <div className="dash-content-box-area">
        <div className="agendamentos">
          <span className="section-title">Agendamentos</span>
          <ul className="agendamentos-box">
            {agendamentosSnapshot.docs?.length === 0 && (
              <span>Sem agendamentos</span>
            )}
            {agendamentosSnapshot.docs?.map((doc: any, index: number) => {
              const data = doc.data();
              return (
                <li className="agendamento" key={index}>
                  <span>Finalidade: {data.finalidade}</span>
                  <span>Data: {formatDate(data?.date)}</span>
                  <span>Responsável: {data?.responsavel}</span>
                  <button onClick={() => deleteAgendamento(doc.id)}>
                    Excluir
                  </button>
                </li>
              );
            })}
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
              {...register("date")}
              placeholder="Data"
            />
            <input
              type="text"
              {...register("finalidade")}
              placeholder="Finalidade"
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
