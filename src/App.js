
import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/UI/AppRouter/AppRouter";
import Navbar from "./components/UI/Navbar/Navbar";
import "../src/styles/main.scss";


function App() {

  return (
    <BrowserRouter>
      <Navbar />
     <AppRouter />

    </BrowserRouter>
  );
}

export default App;
