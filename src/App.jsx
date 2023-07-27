import React, { useState } from "react";

import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import Header from "./Header.jsx";
import Activity from "./components/Activity.js";
import ActivityArchive from "./components/ActivityArchive.js";
import HomePage from "./HomePage.js";

const App = () => {
  const [isArchivePage, setIsArchivePage] = useState(false);

  const onInboxHome = () => {
    setIsArchivePage(false);
  };
  const onArchiveHome = () => {
    setIsArchivePage(true);
  };

  return (
    <div className="container">
      <Header />
      <div className="container-view">
        <div className="nav-container">
          <div className="nav-container2">
            <Link className="activity_list_link" to="/" onClick={onInboxHome}>
              Inbox
            </Link>
            <Link
              className="activity_list_link"
              to="/archive"
              onClick={onArchiveHome}
            >
              Archive List
            </Link>
          </div>
          <Link className="activity_list_link" to="/archive">
            Archive All
          </Link>
        </div>
        <Routes>
          <Route
            exact
            path={"/"}
            element={<HomePage isArchivePage={isArchivePage} />}
          />
          <Route path={"/activities/:id"} element={<Activity />} />
          <Route path={"/archive"} element={<ActivityArchive />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
