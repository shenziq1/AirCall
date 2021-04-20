import React, { useState, useEffect } from "react";
import { getActivityById, editActivity } from "../../api/activityDetail.js";
import Header from "./header/Header.jsx";
import CallIcon from "../common/callIcon/CallIcon.jsx";
import CallTime from "../common/callTime/CallTime.jsx";
import CallNumber from "../common/callNumber/CallNumber.jsx";
import "./activityDetail.css";

export default (props) => {
  const id = props.match.params.id;
  const [activity, setActivity] = useState(null);

  const loadData = async () => {
    try {
      const response = await getActivityById(id);
      const data = await response.json();
      setActivity(data);
      console.log(data);
    } catch (e) {
      // do nothing but just catch so that it doesn't have the error in browser logs
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleArchiveClick = () => {
    const archived = activity.is_archived;
    editActivity(id, { isArchived: !archived });
    const activityCopy = Object.assign({}, activity);
    activityCopy.is_archived = !archived;
    setActivity(activityCopy);
  };

  useEffect(() => {}, [id]);

  return (
    <div className="detailed-container">
      <Header />
      {activity ? (
        <div className="activity-detail">
          <div className="detail-card">
            <div className="detail-info">
              <CallIcon
                direction={activity.direction}
                call_type={activity.call_type}
              />
              <CallNumber
                from={activity.from}
                to={activity.to}
                via={activity.via}
              />
              <CallTime
                created_at={activity.created_at}
                duration={activity.duration}
              />
            </div>

            <div className="specifics">
              {"A new " + activity.direction + "ing " +
              activity.call_type + " (call) was received on " +
              new Date(activity.created_at).toDateString() + '.'
              }
            </div>

            <button
              className="activity-card-button"
              onClick={handleArchiveClick}
            >
              {activity.is_archived ? "Unarchive" : "Archive"}
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};
