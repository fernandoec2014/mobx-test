import React from "react";
import ReactDOM from "react-dom";
import "./main.css";
import Header from "./components/Header";
import Input from "./components/Input";
import Todos from "./components/Todos";
import Footer from "./components/Footer";

import "./styles.css";

function App() {
  return (
    <div>
      <Header />
      <Input />
      <Todos />
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
