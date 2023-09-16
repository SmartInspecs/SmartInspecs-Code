import React, { useContext } from "react";
import { StyledModalWrapper, customButtonStyle } from "./style";
import { ObrasContexts } from "../../contexts/obrasContext";
import { Button, Stack, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../services/firebaseConfig";

type FormValuesEmpresa = {
  nome: string;
  endereco: string;
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
      endereco: "",
    },
  });

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = handleSubmit((data: FormValuesEmpresa, e) => {
    e?.preventDefault();
    const file = e?.target[4]?.files[0];
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

  return (
    <StyledModalWrapper>
      <div className="modal-box">
        <div className="modal-box-header">
          <h3 className="modal-title">Criar nova obra</h3>
          <button className="modal-button" onClick={() => setModalOpen(false)}>X</button>
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
                label="Endereço"
                {...register("endereco")}
                error={!!errors.endereco}
                helperText={errors.nome?.message}
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
