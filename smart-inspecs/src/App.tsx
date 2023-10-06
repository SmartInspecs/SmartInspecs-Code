import React from "react";
import "./App.css";
import GlobalStyle from "./styles/GlobalStyles";
import RoutesMain from "./routes";
import { UserContextProvider } from "./contexts/userContext";
import { ObrasContextProvider } from "./contexts/obrasContext";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer />
      <UserContextProvider>
        <ObrasContextProvider>
          <GlobalStyle />
          <RoutesMain />
        </ObrasContextProvider>
      </UserContextProvider>
    </>
  );
}

export default App;
