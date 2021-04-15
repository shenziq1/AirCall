import React, { useState, useEffect } from "react";
import ActivityDetail from "./ActivityDetail.jsx"

export default function ActivityFeed() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getActivity() {
      let response = await fetch("https://aircall-job.herokuapp.com/activities")
      response = await response.json()
      setData(response);
    }

    getActivity();
  }, [data.filter(i => !i.is_archived).map(i => i.id)]);

  return (
    <div>
     {data.filter(i => !i.is_archived).map(i =>
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
