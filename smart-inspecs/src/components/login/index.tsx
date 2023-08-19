import React from "react";
import { Container } from "./style";
import { LoginForm } from "../loginForm";

const Login = () => {
  return (
    <Container>
      <h1 className="logo">smart inspecs</h1>
      <div className="wrapper">
        <LoginForm />
      </div>
    </Container>
  );
};

export default Login;
