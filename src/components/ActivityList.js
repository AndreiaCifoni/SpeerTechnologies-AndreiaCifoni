import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ActivityCard from "./ActivityCard";

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
        from={activity.from}
      />
    );
  });

  if (!activityList) {
    return <div>Loading</div>;
  }

  return (
    <div>
      <div>
        <div>
          <Link to="/">Inbox</Link>
          <Link to="/archive">Archive</Link>
        </div>
        <Link to="/archive">Archive All</Link>
      </div>
      <div>{activityList ? showActivity : "There is no activity to show"}</div>
    </div>
  );
};

export default ActivityList;
