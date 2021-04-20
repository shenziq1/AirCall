import React from "react";
import "./callTime.css";

const CallTime = (props) => {
  const date = new Date(props.created_at);
  const convertTime = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? "0"+minutes : minutes;
    let ampmTime = hours + ":" + minutes + ' ' + ampm;
    return ampmTime;
  }
  const duration = props.duration + " s";

  return (
    <div className="time-container">
      <div className="time">{convertTime(date)}</div>
      <div className="duration">{duration}</div>
    </div>
  );
};

export default CallTime;
