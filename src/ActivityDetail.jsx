import React, { useState, useEffect } from "react";
import './css/activitydetail.css'
import CallIcon from "./CallIcon.jsx"
import CallTime from "./CallTime.jsx"
import CallNumber from "./CallNumber.jsx"

export default function ActivityDetail(props) {
  let id = props.id;

  const [archive, setArchive] = useState(0);
  const handleArchiveClick = () => {
    setArchive(1);
    console.log('id ' + id + ' has been archived!');
    fetch('https://aircall-job.herokuapp.com/activities/'+id, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        is_archived: true
      }),
    });
  }

  let date = new Date(props.created_at);
  return (
    <div className='activity_detail'>
      <div className='date'>
        {date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate()}
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
          className="square"
          onClick={handleArchiveClick}
        >
          {archive}
        </button>
      </div>
    </div>
  );
}
