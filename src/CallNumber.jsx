import React from 'react';
import './css/callnumber.css'

const CallNumber = ({from, to, via}) => {
  return (
    <div className='number-container'>
      <div className='from'>{from}</div>
      <div className='to-via'>{to}{" (via " + via + ")"}</div>
    </div>
  )
}

export default CallNumber
