import React from "react";

import { Routes, Route } from "react-router-dom";

import Header from "./Header.jsx";
import ActivityList from "./components/ActivityList.js";
import Activity from "./components/Activity.js";

const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="container-view">
        <Routes>
          <Route exact path={"/"} element={<ActivityList />} />
          <Route path={"/activity/:id"} element={<Activity />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
