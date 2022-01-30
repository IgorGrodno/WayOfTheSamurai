import React from "react";
import "./App.css";
import Header from "./componets/Header/Header";
import MainContent from "./componets/MainContent/MainContent";
import NavBar from "./componets/NavBar/NavBar";
import styles from "./componets/MainContent/MainContent.module.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dialogs from "./componets/Dialogs/Dialogs";

const App = () => {
  return (
    <BrowserRouter>
      <div className="wraper">
        <div className="app-grid">
          <Header />
          <NavBar />
          <div className={styles["main-content"]}>
            <Routes>
              <Route path="/mainContent" element={<MainContent />} />
              <Route path="/dialogs" element={<Dialogs />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
