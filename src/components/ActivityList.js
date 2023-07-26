import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ActivityCard from "./ActivityCard";
import "../css/body.css";

const ActivityList = () => {
  const [activityList, setActivityList] = useState([]);

  const fetchActivity = async () => {
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
    fetchActivity();
  }, []);

  const showActivity = activityList.map((activity) => {
    return (
      <ActivityCard
        key={activity.id}
        activity_id={activity.id}
        to={activity.to}
        via={activity.via}
      />
    );
  });

  if (!activityList) {
    return <div>Loading</div>;
  }

  return (
    <div>
      <div className="home-container">
        <div className="home-container2">
          <Link className="activity_list_link" to="/">
            Inbox
          </Link>
          <Link className="activity_list_link" to="/archive">
            Archive
          </Link>
        </div>
        <Link className="activity_list_link" to="/archive">
          Archive All
        </Link>
      </div>
      <div className="activity_list_container">
        {activityList ? showActivity : "There is no activity to show"}
      </div>
    </div>
  );
};

export default ActivityList;
