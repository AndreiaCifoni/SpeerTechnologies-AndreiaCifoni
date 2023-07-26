import React from "react";
import { Link } from "react-router-dom";
import "../css/body.css";

const ActivityCard = ({ activity_id, to, via }) => {
  return (
    <Link className="activity_card_link" to={`/activities/${activity_id}`}>
      <div className="activity_card_container">
        <p>{to}</p>
        <p>tried to call on {via}</p>
      </div>
    </Link>
  );
};

export default ActivityCard;
