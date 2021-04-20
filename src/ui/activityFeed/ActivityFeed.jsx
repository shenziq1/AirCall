import React, { useState, useEffect } from "react";
import CallList from "../CallList.jsx"
import './activityFeed.css'

export default function ActivityFeed() {
  const displayMode = {
    INBOX: "INBOX",
    ALL: "ALL",
  };
  const [mode, setMode] = useState(displayMode.INBOX);
  const [data, setData] = useState([]);

  const handleArchiveAllClick = () => {
    const ids = data.filter(i => !i.is_archived).map(i => i.id)
    ids.map(id =>
      fetch('https://aircall-job.herokuapp.com/activities/'+id, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          is_archived: true
        }),
      })
    );
  }

  const handleUnarchiveClick = () => {
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
      <div className="buttons">
        <button
          className="inbox"
          onClick={() => {
            setMode(displayMode.INBOX);
          }}
        >
          Inbox
        </button>
        <button
          className="all-calls"
          onClick={() => {
            setMode(displayMode.ALL);
          }}
        >
          All Calls
        </button>
      </div>

      <CallList
        data={
          mode === displayMode.INBOX
            ? data.filter(i => !i.is_archived)
            : data
        }
      />
    </div>
  );
}
