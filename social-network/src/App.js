import React from "react";
import "./App.css";
import Header from "./componets/Header";
import MainContent from "./componets/MainContent";
import NavBar from "./componets/NavBar";

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
