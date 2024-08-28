import React from 'react'
import './yoga.css'
const Cat = (props) => {
  return (
    <div>
    <dialog id="dialog" className='showmodel' >
      <div><button className="yog_close_button" onClick={props.close}>x</button><img src="/Yog/cat.png" />
      </div>
    </dialog>
  </div>
  )
}

export default Cat