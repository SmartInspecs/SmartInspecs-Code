import React, { useContext, useState } from "react";
import { Styled
        Div } from "./style";
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
      <span >Agendamentos</span>
      <div className="dash-content-box-area">
      
        <div className="container-criar_agendamento">
          
          <button
            className="criar-agendamento"
            onClick={() => setFormAgenda(true)}
          >
            Criar novo agendamento
          </button>
          {formAgenda && (
            <form className="form-agenda" onSubmit={onSubmit}>
              <fieldset className="form-campo">
                <label className="campo-etiqueta" htmlFor="Data">Data e Hora</label>
                <input
                  className="campo-escrita"
                  type="datetime-local"
                  {...register("data")}
                  placeholder="Data"
                />
              </fieldset>
              <fieldset className="form-campo">
                <label className="campo-etiqueta" htmlFor="Responsável">Responsável</label>
                <input
                  className="campo-escrita"
                  type="text"
                  {...register("responsavel")}
                  placeholder="Responsável"
                />
              </fieldset>
              
              <button className="agendar">Agendar</button>
            </form>
          )}
        </div>
        <div className="agendamentos">
          <span className="section-title">Lista de Agendamentos</span>
          <ul className="agendamentos-box">
            {agendamentos.length === 0 && <span>Sem agendamentos, por enquanto!</span>}
            {agendamentos.map((agendamento, index) => (
              <li className="agendamento" key={index}>
                <div className="atributos-agendamento">
                  <span>Data: {agendamento.data}</span>
                  <span>Responsável: {agendamento.responsavel}</span>
                   <button onClick={() => deleteAgendamento(doc.id)}>
                    Excluir
                  </button>
                </div>
              <button>X</button>
             </li>
            ))}
          </ul>
        </div>
    </StyledAgendamentoDiv>
  );
};

export default Agendamento;
