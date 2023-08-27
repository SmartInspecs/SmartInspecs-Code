import React from "react";
import "./App.css";
import GlobalStyle from "./styles/GlobalStyles";
import RoutesMain from "./routes";
import { UserContextProvider } from "./contexts/userContext";

function App() {
  return (
    <>
      <UserContextProvider>
        <GlobalStyle />
        <RoutesMain />
      </UserContextProvider>
    </>
  );
}

export default App;
