import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../css/body.css";

const Activity = () => {
  const [activity, setActivity] = useState(null);
  const [isArchived, setIsArchived] = useState(null);

  let { id } = useParams();

  const fetchActivity = useCallback(async () => {
    const response = await fetch(
      `https://cerulean-marlin-wig.cyclic.app/activities/${id}`
    );
    const data = await response.json();
    setActivity(data);
    setIsArchived(data.is_archived);
  }, [id]);

  useEffect(() => {
    fetchActivity();
  }, [fetchActivity]);

  const updateActivityArchive = async (activityId, isArchivedValue) => {
    try {
      const response = await fetch(
        `https://cerulean-marlin-wig.cyclic.app/activities/${activityId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            is_archived: isArchivedValue,
          }),
        }
      );
      const data = await response.json();

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSingleActivityArchive = async () => {
    const updatedIsArchivedValue = !isArchived;
    setIsArchived(updatedIsArchivedValue);
    updateActivityArchive(activity.id, updatedIsArchivedValue);
  };

  if (!activity) {
    return <div>Loading</div>;
  }

  return (
    <div>
      <h1 className="activity_title">Call Details</h1>
      <p>Direction: {activity.direction}</p>
      <p>From: {activity.from}</p>
      <p>To: {activity.to}</p>
      <p>Via: {activity.via}</p>
      <p>Duration: {activity.duration}</p>
      <p>Archived: {activity.is_archived}</p>
      <p>Call type: {activity.call_type}</p>
      <p>Created at: {activity.created_at}</p>
      <Link className="activity_list_link" to="/">
        Inbox
      </Link>
      <Link
        className="activity_list_link"
        onClick={handleSingleActivityArchive}
      >
        {isArchived ? "Unarchive" : "Archive"}
      </Link>
    </div>
  );
};

export default Activity;
