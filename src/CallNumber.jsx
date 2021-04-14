import React from 'react';
import './css/callicon.css'

const CallNumber = (props) => {
  let from = "from: "+ props.from;
  let to = "to: " + props.to;
  let via = "via: " + props.via;

  return (
    <div>
      <div>{from}</div>
      <div>{to}</div>
      <div>{via}</div>
    </div>
  )
}

export default CallNumber
