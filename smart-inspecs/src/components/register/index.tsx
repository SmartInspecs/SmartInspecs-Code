import {
  Button,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import React, { useContext } from "react";
import { StyledTitle } from "../loginForm/style";
import { useForm } from "react-hook-form";
import { Container } from "../login/style";
import { Link } from "react-router-dom";
import UserContext from "../../contexts/userContext";
import { auth } from "../../services/firebaseConfig";

export type FormValues = {
  nome: string;
  email: string;
  password: string;
  empresa: string;
};

export const RegisterForm = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      nome: "",
      email: "",
      password: "",
      empresa: "None",
    },
  });

  const { createUser } = useContext(UserContext);

  const { register, handleSubmit, formState } = form;

  const { errors } = formState;
  const empresas = ["MRV"];

  const onSubmit = handleSubmit((data: FormValues, e) => {
    e?.preventDefault();
    createUser(auth, data);
  });

  const customButtonStyle = {
    backgroundColor: "#006400",
    color: "white",
    padding: "10px",
    fontWeight: "600",
    fontSize: "24px",
  };

  return (
    <>
      <Container>
        <h1 className="logo">smart inspecs</h1>
        <div className="wrapper">
          <form noValidate onSubmit={onSubmit}>
            <Stack spacing={2} width={"90%"} fontFamily={"Poppins"}>
              <StyledTitle>Registro</StyledTitle>
              <TextField
                label="Seu nome"
                type="text"
                {...register("nome", {
                  required: "O seu é obrigatório",
                })}
                error={!!errors.nome}
                helperText={errors.nome?.message}
              />
              <TextField
                label="E-mail"
                type="email"
                {...register("email", {
                  required: "E-mail é obrigatório",
                })}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
              <TextField
                label="Senha"
                type="password"
                {...register("password", {
                  required: "Senha é obrigatória",
                })}
                error={!!errors.password}
                helperText={errors.password?.message}
              />
              {/* <InputLabel id="label-select">Empresa</InputLabel> */}
              <Select
                labelId="label-select"
                {...register("empresa")}
                label="Empresa"
              >
                <MenuItem value={""}>None</MenuItem>
                {empresas?.map((empresa, index: number) => (
                  <MenuItem key={index} value={empresa}>
                    {empresa}
                  </MenuItem>
                ))}
              </Select>
              {/* <TextField
                label="Empresa"
                type="text"
                {...register("empresa", {
                  required: "O nome da empresa é obrigatório",
                })}
                error={!!errors.empresa}
                helperText={errors.empresa?.message}
              /> */}
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={customButtonStyle}
              >
                Registrar
              </Button>
              <Link to="/login">Ir para login</Link>
            </Stack>
          </form>
        </div>
      </Container>
    </>
  );
};
