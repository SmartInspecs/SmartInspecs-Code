import { TextField, Button, Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import { StyledTitle } from "./style";
import UserContext from "../../contexts/userContext";
import { useContext } from "react";
import { auth } from "../../services/firebaseConfig";

//alterar para interfaces
type FormValues = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const { loginUser } = useContext(UserContext);

  const form = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { register, handleSubmit, formState } = form;

  const { errors } = formState;

  const onSubmit = handleSubmit((data: FormValues, e) => {
    e?.preventDefault();
    loginUser(auth, data.email, data.password);
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
      <form noValidate onSubmit={onSubmit}>
        <Stack spacing={2} width={"90%"} fontFamily={"Poppins"}>
          <StyledTitle>Login </StyledTitle>
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
        </Stack>
      </form>
    </>
  );
};
