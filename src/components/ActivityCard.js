import React from "react";
import { Link } from "react-router-dom";

const ActivityCard = ({ activity_id, from }) => {
  return (
    <Link to={`/activities/${activity_id}`}>
      <div>
        <span>{from}</span>
      </div>
    </Link>
  );
};

export default ActivityCard;
