import React, { useContext } from "react";
import { StyledModalWrapper, customButtonStyle } from "./style";
import { ObrasContexts } from "../../contexts/obrasContext";
import { Button, Stack, TextField } from "@mui/material";
import { set, useForm } from "react-hook-form";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../services/firebaseConfig";

type FormValuesEmpresa = {
  nome: string;
  cep: string;
  logradouro: string;
  bairro: string;
  localidade: string;
  numero: string;
  uf: string;
};

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const ModalCriarObra = () => {
  const { addObras, setModalOpen } = useContext(ObrasContexts);
  const [imgUrl, setImgUrl] = React.useState<string>("");
  const [progress, setProgress] = React.useState<number>(0);

  const form = useForm<FormValuesEmpresa>({
    defaultValues: {
      nome: "",
      cep: "",
      logradouro: "",
      bairro: "",
      localidade: "",
      numero: "",
      uf: "",
    },
  });

  const { register, handleSubmit, formState, setValue, setFocus } = form;
  const { errors } = formState;

  const onSubmit = handleSubmit((data: FormValuesEmpresa, e) => {
    e?.preventDefault();
    const file = e?.target[14]?.files[0];
    if (!file) return;

    const storageRef = ref(storage, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        alert(error.message);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setImgUrl(url);
          addObras({ ...data, url, inspecoes: [] });
        });
      }
    );
  });

  const checkCEP = (e: any) => {
    const cep = e.target.value.replace(/\D/g, "");
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setValue("logradouro", data.logradouro);
        setValue("bairro", data.bairro);
        setValue("localidade", data.localidade);
        setValue("uf", data.uf);
        setFocus("numero");
      });
  };

  return (
    <StyledModalWrapper>
      <div className="modal-box">
        <div className="modal-box-header">
          <h3 className="modal-title">Criar nova obra</h3>
          <button className="modal-button" onClick={() => setModalOpen(false)}>
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
                onBlur={checkCEP}
              />
              <TextField
                label="Logradouro"
                {...register("logradouro")}
                error={!!errors.logradouro}
                helperText={errors.logradouro?.message}
              />
              <TextField
                label="Bairro"
                {...register("bairro")}
                error={!!errors.bairro}
                helperText={errors.bairro?.message}
              />
              <TextField
                label="Localidade"
                {...register("localidade")}
                error={!!errors.localidade}
                helperText={errors.localidade?.message}
              />
              <TextField
                label="número"
                {...register("numero")}
                error={!!errors.numero}
                helperText={errors.numero?.message}
              />
              <TextField
                label="UF"
                {...register("uf")}
                error={!!errors.uf}
                helperText={errors.uf?.message}
              />
              <Button
                component="label"
                variant="contained"
                startIcon={<CloudUploadIcon />}
              >
                Adicione uma imagem
                <VisuallyHiddenInput type="file" />
              </Button>
              {!imgUrl && <progress value={progress} max="100" />}
              {imgUrl && <img src={imgUrl} alt="Uploaded" height={200} />}
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={customButtonStyle}
              >
                Criar obra
              </Button>
            </Stack>
          </form>
        </div>
      </div>
    </StyledModalWrapper>
  );
};

export default ModalCriarObra;
