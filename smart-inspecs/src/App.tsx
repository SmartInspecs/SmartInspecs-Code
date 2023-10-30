import React from "react";
import "./App.css";
import GlobalStyle from "./styles/GlobalStyles";
import RoutesMain from "./routes";
import { UserContextProvider } from "./contexts/userContext";
import { ObrasContextProvider } from "./contexts/obrasContext";
import { InspecaoContextProvider } from "./contexts/inspecaoContext";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer />
      <InspecaoContextProvider>
        <UserContextProvider>
          <ObrasContextProvider>
            <GlobalStyle />
            <RoutesMain />
          </ObrasContextProvider>
        </UserContextProvider>
      </InspecaoContextProvider>
    </>
  );
}

export default App;
