import React from 'react';
import './callTime.css'

const CallTime = ({created_at, duration}) => {
  const date = new Date(created_at);
  let time;
  if (date.getHours() >= 12){
    time = date.getHours() - 12 + ":" + date.getMinutes() + " PM";
  } if (0 < date.getHours() < 12){
    time = date.getHours() + ":" + date.getMinutes() + " AM";
  } if (date.getHours() == 0){
    time = date.getHours() + 12 + ":" + date.getMinutes() + " AM";
  }

  return (
    <div className='time-container'>
      <div className='time'>{time}</div>
      <div className='duration'>{duration + " s"}</div>
    </div>
  );
}

export default CallTime
