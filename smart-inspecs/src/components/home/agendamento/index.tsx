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
              </div>
              <button>
                X</button>
                
              </li>
            ))}
          </ul>
        </div>
      </div>
    </StyledAgendamentoDiv>
  );
};

export default Agendamento;
