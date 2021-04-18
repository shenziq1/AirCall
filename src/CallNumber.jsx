import React from 'react';
import './css/callnumber.css'

const CallNumber = (props) => {
  let from = props.from;
  let to = props.to;
  let via = " (via " + props.via + ")";

  return (
    <div className='number-container'>
      <div className='from'>{from}</div>
      <div className='to-via'>{to}{via}</div>
    </div>
  )
}

export default CallNumber
