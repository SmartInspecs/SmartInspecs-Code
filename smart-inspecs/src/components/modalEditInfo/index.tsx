import React, { useContext } from "react";
import { StyledModalWrapper } from "./style";
import { ObrasContexts } from "../../contexts/obrasContext";
import { Stack, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { iObraSelected } from "../home/obraSelect";

interface iObraInfos {
  id: string;
  nome: string;
  cep: string;
  logradouro: string;
  respTecnico: string;
  respSegQual: string;
  prazo: string;
  princMetConst: string;
  tiposEPCs: string;
  area: string;
  tipoObra: string;
}

const ModalEditInfo = () => {
  const obraLocalStorage = localStorage.getItem("@Smart-Inspecs:obraSelected");
  const obraSelected: iObraSelected | null =
    obraLocalStorage && JSON.parse(obraLocalStorage);

  const form = useForm<iObraInfos>({
    defaultValues: {
      nome: obraSelected?.nome || "",
      cep: obraSelected?.cep || "",
      logradouro: obraSelected?.logradouro || "",
      respTecnico: obraSelected?.respTecnico || "",
      respSegQual: obraSelected?.respSegQual || "",
      prazo: obraSelected?.prazo || "",
      princMetConst: obraSelected?.princMetConst || "",
      tiposEPCs: obraSelected?.tiposEPCs || "",
      area: obraSelected?.area || "",
      tipoObra: obraSelected?.tipoObra || "",
    },
  });

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const { setModalEditInfo, updateObra } = useContext(ObrasContexts);

  const onSubmit = handleSubmit((obra: iObraInfos, e) => {
    e?.preventDefault();
    updateObra(obraSelected?.id, obra);
    localStorage.setItem(
      "@Smart-Inspecs:obraSelected",
      JSON.stringify((obra = { ...obraSelected, ...obra }))
    );
  });

  return (
    <StyledModalWrapper>
      <div className="modal-box">
        <div className="modal-box-header">
          <h3 className="modal-title">Editar informações da obra</h3>
          <button
            className="modal-button"
            onClick={() => setModalEditInfo(false)}
          >
            X
          </button>
        </div>
        <div className="modal-box-content">
          <form noValidate onSubmit={onSubmit}>
            <Stack spacing={2} width={"90%"} fontFamily={"Poppins"}>
              <TextField
                label="Nome da Obra"
                type="text"
                {...register("nome")}
                error={!!errors.nome}
                helperText={errors.nome?.message}
              />
              <TextField
                label="CEP"
                {...register("cep")}
                error={!!errors.cep}
                helperText={errors.cep?.message}
              />
              <TextField
                label="Logradouro"
                {...register("logradouro")}
                error={!!errors.logradouro}
                helperText={errors.logradouro?.message}
              />
              <TextField
                label="Responsável Técnico"
                {...register("respTecnico")}
                error={!!errors.respTecnico}
                helperText={errors.respTecnico?.message}
              />
              <TextField
                label="Responsável Segurança e Qualidade"
                {...register("respSegQual")}
                error={!!errors.respSegQual}
                helperText={errors.respSegQual?.message}
              />
              <TextField
                label="Prazo de execução"
                {...register("prazo")}
                error={!!errors.prazo}
                helperText={errors.prazo?.message}
              />
              <TextField
                label="Principais métodos construtivos"
                {...register("princMetConst")}
                error={!!errors.princMetConst}
                helperText={errors.princMetConst?.message}
              />
              <TextField
                label="Tipos de EPCs"
                {...register("tiposEPCs")}
                error={!!errors.tiposEPCs}
                helperText={errors.tiposEPCs?.message}
              />
              <TextField
                label="Area"
                {...register("area")}
                error={!!errors.area}
                helperText={errors.area?.message}
              />
              <TextField
                label="Tipo de obra"
                {...register("tipoObra")}
                error={!!errors.tipoObra}
                helperText={errors.tipoObra?.message}
              />
            </Stack>
            <button type="submit">Editar</button>
          </form>
        </div>
      </div>
    </StyledModalWrapper>
  );
};

export default ModalEditInfo;
