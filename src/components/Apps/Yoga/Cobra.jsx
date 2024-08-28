import React from 'react'
import './yoga.css'
const Cobra = (props) => {
  return (
    <div>
    <dialog id="dialog" className='showmodel' >
    <div><button className="yog_close_button" onClick={props.close}>x</button><img src="/Yog/cobra.png"/>
    </div>
    </dialog>
  </div>
  )
}

export default Cobra