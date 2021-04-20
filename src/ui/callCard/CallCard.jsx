import React, { useState } from "react";
import './callCard.css'
import CallIcon from "../callIcon/CallIcon.jsx"
import CallTime from "../callTime/CallTime.jsx"
import CallNumber from "../callNumber/CallNumber.jsx"

export default function CallCard(props) {
  const id = props.id;
  const [archive, setArchive] = useState(props.is_archived);
  const handleArchiveClick = () => {
    if (!archive){
      try {
        fetch('https://aircall-job.herokuapp.com/activities/'+id, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            is_archived: true
          }),
        });
        setArchive(true);
        console.log('id ' + id + ' has been archived!');
      } catch (e) {
      }
    } else {
      try{
        fetch('https://aircall-job.herokuapp.com/activities/'+id, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            is_archived: false
          }),
        });
        setArchive(false);
        console.log('id ' + id + ' has been reset!');
      } catch (e) {
      }
    }
  }

  const date = new Date(props.created_at);
  return (
    <div className='call-card'>
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
          {props.is_archived ? "undo" : "archive"}
        </button>
      </div>
    </div>
  );
}
