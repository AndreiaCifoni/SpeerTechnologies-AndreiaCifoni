import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";

const Activity = () => {
  const [activity, setActivity] = useState(null);
  let { id } = useParams();

  const fetchActivity = useCallback(async () => {
    const response = await fetch(
      `https://cerulean-marlin-wig.cyclic.app/activities/${id}`
    );
    const data = await response.json();
    setActivity(data);
  }, [id]);

  useEffect(() => {
    fetchActivity();
  }, [fetchActivity]);

  if (!activity) {
    return <div>Loading</div>;
  }

  return (
    <div>
      <h1>Call Details</h1>
      <p>Direction: {activity.direction}</p>
      <p>From: {activity.from}</p>
      <p>To: {activity.to}</p>
      <p>Via: {activity.via}</p>
      <p>Duration: {activity.duration}</p>
      <p>Archived: {activity.is_archived}</p>
      <p>Call type: {activity.call_type}</p>
      <p>Created at: {activity.created_at}</p>
    </div>
  );
};

export default Activity;
