import React from "react";
import { LoadingContainer } from "./style";

const Loading = () => {
  return (
    <LoadingContainer>
      <h1 className="logo">smart inspecs</h1>
      <div className="loading-spinner"></div>
      <div>Carregando...</div>
    </LoadingContainer>
  );
};

export default Loading;
