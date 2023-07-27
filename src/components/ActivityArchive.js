import React from "react";
import { Link } from "react-router-dom";
import "../css/body.css";

const ActivityArchive = () => {
  return (
    <div>
      <h1>Activity Archive</h1>
    </div>
  );
};

export default ActivityArchive;

// const showActivityAchive = activityList
// .filter((activity) => activity.is_archived)
// .map((activity) => {
//   return (
//     <ActivityCard
//       key={activity.id}
//       activity_id={activity.id}
//       to={activity.to}
//       via={activity.via}
//     />
//   );
// });
