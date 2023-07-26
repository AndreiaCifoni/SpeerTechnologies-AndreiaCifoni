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
      <h2>{activity.from}</h2>
    </div>
  );
};

export default Activity;

// "direction": "inbound",
//     "from": 100001,
//     "to": 200002,
//     "via": 30000003,
//     "duration": 10,
//     "is_archived": true,
//     "call_type": "answered",
//     "id": "6393bb7b69073dc45849ca7c",
//     "created_at": "2022-12-09T22:49:31.911Z"
