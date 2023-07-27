import React, { useState, useEffect } from "react";

import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import Header from "./Header.jsx";
import Activity from "./components/Activity.js";
import ActivityArchive from "./components/ActivityArchive.js";
import HomePage from "./HomePage.js";
import { async } from "regenerator-runtime";

const App = () => {
  const [isArchivePage, setIsArchivePage] = useState(false);
  const [activityList, setActivityList] = useState([]);

  const fetchActivityList = async () => {
    try {
      const response = await fetch(
        `https://cerulean-marlin-wig.cyclic.app/activities`
      );
      const data = await response.json();

      setActivityList(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchActivityList();
  }, []);

  const archiveAllActivities = async () => {
    try {
      for (const activity of activityList) {
        await fetch(
          `https://cerulean-marlin-wig.cyclic.app/activities/${activity.id}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              is_archived: true,
            }),
          }
        );
      }
      await fetchActivityList();
    } catch (error) {
      console.log(error);
    }
  };

  const unarchiveAllActivities = async () => {
    try {
      await fetch(`https://cerulean-marlin-wig.cyclic.app/reset`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          is_archived: false,
        }),
      });
      await fetchActivityList();
    } catch (error) {
      console.log(error);
    }
  };

  const onInboxHome = async () => {
    setIsArchivePage(false);
    await fetchActivityList();
  };
  const onArchiveHome = async () => {
    setIsArchivePage(true);
    await fetchActivityList();
  };

  if (!activityList) {
    return <div>Loading</div>;
  }

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
          {isArchivePage ? (
            <Link
              className="activity_list_link"
              onClick={unarchiveAllActivities}
            >
              Unarchive All
            </Link>
          ) : (
            <Link className="activity_list_link" onClick={archiveAllActivities}>
              Archive All
            </Link>
          )}
        </div>
        <Routes>
          <Route
            exact
            path={"/"}
            element={
              <HomePage
                isArchivePage={isArchivePage}
                activityList={activityList}
              />
            }
          />
          <Route path={"/activities/:id"} element={<Activity />} />
          <Route
            path={"/archive"}
            element={<ActivityArchive activityList={activityList} />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
