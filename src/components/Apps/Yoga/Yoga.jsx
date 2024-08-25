import React from 'react'
import './yoga.css'

function Yoga() {
  return (
    <><div  className='outer'>
    <div className='Name_div'>
    <div className='Name'>Yoga</div></div>
    <div>
   <div className='row'>
   <div className='yog'><img className='Pose' src="./yoga/mount.jpg" ></img>Mountain Pose</div>
      <div className='yog Tree_Pose'><img className='Pose' src="./yoga/tree.jpg" ></img>Tree Pose</div>
      <div className='yog '><img className='Pose' src="./yoga/dog.jpg" ></img>Downward-Facing Dog</div>
   </div>
      <div className='row'>
      <div className='yog '><img className='Pose' src="./yoga/cat.jpg" ></img>Cat-Cow Pose</div>
      <div className='yog '><img className='Pose' src="./yoga/snake.jpg" ></img>Cobra Pose </div>
      <div className='yog '><img className='Pose' src="./yoga/Child.jpg" ></img>Child's Pose</div>

      </div>
    </div>
    </div>
    </>
    
  )
}

export default Yoga