import React from "react";
import { Link } from "react-router-dom";
import CallIcon from "../../../common/callIcon/CallIcon.jsx";
import CallNumber from "../../../common/callNumber/CallNumber.jsx";
import "./callCard.css";

export default function ActivityDetail(props) {
  const id = props.id;

  let date = new Date(props.created_at);
  return (
    <div className="card-item">
      <div className="date">
        {"•••••••••••••••••••••••••" +
          date.getFullYear() +
          "-" +
          (date.getMonth() + 1) +
          "-" +
          date.getDate() +
          "•••••••••••••••••••••••••"}
      </div>

        <CallIcon direction={props.direction} call_type={props.call_type} />
        <CallNumber from={props.from} to={props.to} via={props.via} />
    </div>
  );
}
