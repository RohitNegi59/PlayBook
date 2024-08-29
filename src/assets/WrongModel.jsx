import React from 'react'
import Lottie from 'lottie-react';
import wrong from '/public/wrong.json'
const WrongModel = () => {
  return (
    <dialog close className='showmodel'>
       
      <div>
      <Lottie animationData={wrong}/></div>
      </dialog>
  )
}

export default WrongModel