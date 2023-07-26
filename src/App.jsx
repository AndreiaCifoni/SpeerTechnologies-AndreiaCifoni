import React from "react";

import { Routes, Route } from "react-router-dom";

import Header from "./Header.jsx";
import ActivityList from "./components/ActivityList.js";

const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="container-view">
        <Routes>
          <Route exact path={"/"} element={<ActivityList />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
