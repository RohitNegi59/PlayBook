import React from 'react'

const Child = (props) => {
  return (
    <div>
    <dialog id="dialog" className='showmodel' >
    <div><button onClick={props.close}>x</button><img src="/Yog/child.png"/>
    </div>
    </dialog>
  </div>

  )
}

export default Child