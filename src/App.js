import React from "react";
import { createGlobalStyle } from "styled-components";
import Home from "./Home";
import Header from "./components/Header";

const GlobalStyles = createGlobalStyle`
body{
  margin:0;
  paddinng:0;
  box-sizing: border-box;
  font-family: 'Times New Roman', Times, serif;

}
`;

function App() {
  return (
    <>
      <Header />
      <Home />
      <GlobalStyles />
    </>
  );
}

export default App;
