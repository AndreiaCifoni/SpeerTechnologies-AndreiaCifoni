import React from "react";
import "./css/body.css";
import ActivityArchive from "./components/ActivityArchive";
import ActivityList from "./components/ActivityList";

const HomePage = ({ isArchivePage, activityList }) => {
  return (
    <div>
      {isArchivePage ? (
        <ActivityArchive activityList={activityList} />
      ) : (
        <ActivityList activityList={activityList} />
      )}
    </div>
  );
};

export default HomePage;
