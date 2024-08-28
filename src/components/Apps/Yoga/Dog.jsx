import React from 'react'
import './yoga.css'
const Dog = (props) => {
  return (
    <div>
    <dialog id="dialog" className='showmodel' >
      <div><button className="yog_close_button" onClick={props.close}>x</button><img src="/Yog/dog.png" />
      </div>
    </dialog>
  </div>
  )
}

export default Dog