import React from 'react'

const Dog = (props) => {
  return (
    <div>
    <dialog id="dialog" className='showmodel' >
      <div><button onClick={props.close}>x</button><img src="/Yog/dog.png" />
      </div>
    </dialog>
  </div>
  )
}

export default Dog