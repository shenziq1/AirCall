import React, { useState, useEffect } from "react";
import { listActivities } from "../../api/activityFeed.js";
import CallList from "./callList/CallList.jsx";
import Header from "./header/Header.jsx";
import "./activityFeed.css";

export default () => {
  const updateFrequency = 3000; // updates data every 3 seconds
  const displayMode = {
    INBOX: "INBOX",
    ALL: "ALL",
  };
  const [mode, setMode] = useState(displayMode.INBOX);
  const [feed, setFeed] = useState([]);

  const loadData = async () => {
    try {
      const response = await listActivities();
      const data = await response.json();
      setFeed(data);
    } catch (e) {
      // do nothing but just catch so that it doesn't have the error in browser logs
    }
  };

  useEffect(() => {
    loadData();
    const interval = setInterval(loadData, updateFrequency);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container-view">
      <Header />
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
        feed={
          mode === displayMode.INBOX
            ? feed.filter((item) => !item.is_archived)
            : feed
        }
      />
    </div>
  );
};
