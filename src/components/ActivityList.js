import React from "react";

import ActivityCard from "./ActivityCard";
import "../css/body.css";

const ActivityList = ({ activityList }) => {
  const showActivity = activityList
    .filter((activity) => !activity.is_archived)
    .map((activity) => {
      return (
        <ActivityCard
          key={activity.id}
          activity_id={activity.id}
          to={activity.to}
          via={activity.via}
        />
      );
    });

  return (
    <div className="activity_list_container">
      {activityList ? showActivity : "There is no activity to show"}
    </div>
  );
};

export default ActivityList;
