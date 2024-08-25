import React, { useState, useEffect } from 'react';
import './Guess.css'
import Lottie from 'lottie-react';
import showtime from './showtime.json'
const ShowModel = (props) => {
  return (
   
    <dialog close className='showmodel'>
       
      <div>
      <Lottie animationData={showtime}/><button  ></button></div>
      </dialog>
  )
}

export default ShowModel