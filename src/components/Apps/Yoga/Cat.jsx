import React from 'react'

const Cat = (props) => {
  return (
    <div>
    <dialog id="dialog" className='showmodel' >
      <div><button onClick={props.close}>x</button><img src="/Yog/cat.png" />
      </div>
    </dialog>
  </div>
  )
}

export default Cat