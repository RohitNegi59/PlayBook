
import React, { useState, useEffect } from 'react';

const Tree = (props) => {





  return (
<div>
      <dialog id="dialog" className='showmodel' >
      <div><button onClick={props.close}>x</button><img src="/Yog/tree.png"/>
      </div>
      </dialog>
    </div>

  )
}

export default Tree