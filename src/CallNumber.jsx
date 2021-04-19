import React from 'react';
import './css/callnumber.css'

const CallNumber = (props) => {
  const from = props.from;
  const to = props.to;
  const via = " (via " + props.via + ")";

  return (
    <div className='number-container'>
      <div className='from'>{from}</div>
      <div className='to-via'>{to}{via}</div>
    </div>
  )
}

export default CallNumber
