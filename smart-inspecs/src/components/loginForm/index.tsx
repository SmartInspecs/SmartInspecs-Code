import { TextField, Button, Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import { StyledParagraph, StyledTitle } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import * as yup from "yup";

//alterar para interfaces
type FormValues = {
  email: string;
  password: string;
};

const loginFormSchema = yup.object().shape({
  email: yup.string().required("E-mail é obrigatório").email("E-mail inválido"),
  password: yup.string().required("Senha é obrigatória"),
});

export const LoginForm = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginFormSchema),
  });

  const { register, handleSubmit, formState } = form;

  const { errors } = formState;

  const onSubmit = handleSubmit((data: FormValues, e) => {
    e?.preventDefault();
    console.log(data);
  });

  const customButtonPrimary = {
    backgroundColor: "#006400",
    color: "white",
    padding: "10px",
    fontWeight: "600",
    fontSize: "24px",
  };

  const customButtonSecundary = {
    backgroundColor: "transparent",
    color: "#006400",
    padding: "10px",
    fontWeight: "600",
    fontSize: "24px",
    border: "1px solid #006400",
  };
  return (
    <>
      <form noValidate onSubmit={onSubmit}>
        <Stack spacing={2} width={"90%"} fontFamily={"Poppins"}>
          <StyledTitle>Login</StyledTitle>
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
            style={customButtonPrimary}
          >
            Login
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={customButtonSecundary}
          >
            Cadastre-se
          </Button>

          <StyledParagraph>
            esqueceu a senha? <Link to="/">clique aqui</Link>
          </StyledParagraph>
        </Stack>
      </form>
    </>
  );
};
