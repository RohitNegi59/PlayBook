import React from 'react'

const Cobra = (props) => {
  return (
    <div>
    <dialog id="dialog" className='showmodel' >
    <div><button onClick={props.close}>x</button><img src="/Yog/cobra.png"/>
    </div>
    </dialog>
  </div>
  )
}

export default Cobra