import React from "react";
import "./App.css";
import Header from "./componets/Header/Header";
import MainContent from "./componets/MainContent/MainContent";
import NavBar from "./componets/NavBar/NavBar";

const App = () => {
  return (
    <div className="wraper">
      <div className="app-grid">
        <Header />
        <NavBar />
        <MainContent />
      </div>
    </div>
  );
};

export default App;
