import React from "react";
import "./App.css";
import GlobalStyle from "./styles/GlobalStyles";
import RoutesMain from "./routes";
import { UserContextProvider } from "./contexts/userContext";
import { ObrasContextProvider } from "./contexts/obrasContext";

function App() {
  return (
    <>
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
