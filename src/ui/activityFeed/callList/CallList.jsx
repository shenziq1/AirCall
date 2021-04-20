import React from "react";
import CallCard from "./callCard/CallCard.jsx";

export default (props) => {
  return (
    <div>
      {props.feed.map((item) => (
        <CallCard
          key={item.id}
          id={item.id}
          created_at={item.created_at}
          direction={item.direction}
          from={item.from}
          to={item.to}
          via={item.via}
          duration={item.duration}
          is_archived={item.is_archived}
          call_type={item.call_type}
        />
      ))}
    </div>
  );
};
