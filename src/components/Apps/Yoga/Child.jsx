import React from 'react'
import './yoga.css'
const Child = (props) => {
  return (
    <div>
    <dialog id="dialog" className='showmodel' >
    <div><button className="yog_close_button" onClick={props.close}>x</button><img src="/Yog/child.png"/>
    </div>
    </dialog>
  </div>

  )
}

export default Child