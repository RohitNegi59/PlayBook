import React from 'react'

const Mount = (props) => {
  return (
    <div>
    <dialog id="dialog" className='showmodel' >
    <div><button onClick={props.close}>x</button><img src="/Yog/Mountain.png"/>
    </div>
    </dialog>
  </div>
  )
}

export default Mount