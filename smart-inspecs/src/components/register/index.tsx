import { Button, Stack, TextField } from "@mui/material";
import React, { useContext } from "react";
import { StyledTitle } from "../loginForm/style";
import { useForm } from "react-hook-form";
import { Container } from "../login/style";
import { Link } from "react-router-dom";
import UserContext from "../../contexts/userContext";
import { auth } from "../../services/firebaseConfig";

type FormValues = {
  email: string;
  password: string;
};

export const RegisterForm = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { createUser } = useContext(UserContext);

  const { register, handleSubmit, formState } = form;

  const { errors } = formState;

  const onSubmit = handleSubmit((data: FormValues, e) => {
    e?.preventDefault();
    createUser(auth, data.email, data.password);
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
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={customButtonStyle}
              >
                Login
              </Button>
              <Link to="/login">Ir para login</Link>
            </Stack>
          </form>
        </div>
      </Container>
    </>
  );
};
