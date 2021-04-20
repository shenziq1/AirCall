import React, { useState } from "react";
import './css/activitydetail.css'
import CallIcon from "./CallIcon.jsx"
import CallTime from "./CallTime.jsx"
import CallNumber from "./CallNumber.jsx"

export default function ActivityDetail(props) {
  const id = props.id;
  const [click, setClick] = useState(!props.is_archived);
  const handleArchiveClick = () => {
    if (click){
      setClick(false);
      fetch('https://aircall-job.herokuapp.com/activities/'+id, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          is_archived: true
        }),
      });
      console.log('id ' + id + ' has been archived!');
    } else {
      setClick(true);
      fetch('https://aircall-job.herokuapp.com/activities/'+id, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          is_archived: false
        }),
      });
      console.log('id ' + id + ' has been reset!');
    }
  }

  const date = new Date(props.created_at);
  return (
    <div className='activity_detail'>
      <div className='date'>
        {'•••••••••••••••••••••••••' +
        date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate() +
        '•••••••••••••••••••••••••'}
      </div>

      <div className='card'>
        <CallIcon
          direction = {props.direction}
          call_type = {props.call_type}
        />
        <CallNumber
          from = {props.from}
          to = {props.to}
          via = {props.via}
        />
        <CallTime
          created_at = {props.created_at}
          duration = {props.duration}
        />
        <button
          className="button"
          onClick={handleArchiveClick}
        >
          {props.is_archived ? "reset" : "archive"}
        </button>
      </div>
    </div>
  );
}
