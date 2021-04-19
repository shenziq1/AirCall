import React from 'react';
import './css/calltime.css'

const CallTime = (props) => {
  const date = new Date(props.created_at);
  let time;
  if (date.getHours() >= 12){
    time = date.getHours() - 12 + ":" + date.getMinutes() + " PM";
  } if (0 < date.getHours() < 12){
    time = date.getHours() + ":" + date.getMinutes() + " AM";
  } if (date.getHours() == 0){
    time = date.getHours() + 12 + ":" + date.getMinutes() + " AM";
  }
  let duration = props.duration + " s"

  return (
    <div className='time-container'>
      <div className='time'>{time}</div>
      <div className='duration'>{duration}</div>
    </div>
  );
}

export default CallTime
