import React, { useState, useEffect } from "react";
import ActivityDetail from "../activityDetail/ActivityDetail.jsx"
import './allCalls.css'

export default function AllCalls() {
  const [data, setData] = useState([]);
  const handleResetClick = () => {
    fetch("https://aircall-job.herokuapp.com/reset")
  }

  useEffect(() => {
    let ismounted = true;
    async function getActivity() {
      let response = await fetch("https://aircall-job.herokuapp.com/activities")
      response = await response.json()
      if (ismounted){
        setData(response);
      }
    }
    getActivity();
    return () => {ismounted = false}
  }, [data.filter(i => !i.is_archived).map(i => i.id)]);

  return (
    <div className='activity_feed'>
      <button
        className="archive_all"
        onClick={handleResetClick}
      >
      {"Reset All Calls"}
      </button>
      {data.map(i =>
        <ActivityDetail
          key = {i.id}
          id = {i.id}
          created_at = {i.created_at}
          direction = {i.direction}
          from = {i.from}
          to = {i.to}
          via = {i.via}
          duration = {i.duration}
          is_archived = {i.is_archived}
          call_type = {i.call_type}
        />)}
    </div>
  );
}
