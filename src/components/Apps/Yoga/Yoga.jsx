import './yoga.css'
import Tree from './Tree'
import React, { useState, useEffect } from 'react';

function Yoga() {
  const [yog,setYog] = useState(false)


const mountain=()=>{
  alert("mountain ");
}
const tree=()=>{
  setYog(true);
}
const dog=()=>{
  alert("dog");
}
const cat=()=>{
  alert("cat");
}
const cobra=()=>{
  alert("cobra");
}
const child=()=>{
  alert("child");
}

const close = () => {
    setYog(false);
}

  return (
    <><div  className='outer'>
    <div className='Name_div'>
    <div className='Name'>Yoga</div></div>
    <div>
    { yog && <Tree close={close} />}
   <div className='row'>
   <div className='yog'><img className='Pose' src="./yoga/mount.jpg" onClick={mountain}></img>Mountain Pose</div>
      <div className='yog Tree_Pose'><img className='Pose' src="./yoga/tree.jpg" onClick={tree}></img>Tree Pose</div>
      <div className='yog '><img className='Pose' src="./yoga/dog.jpg" onClick={dog}></img>Downward-Facing Dog</div>
   </div>
      <div className='row'>
      <div className='yog '><img className='Pose' src="./yoga/cat.jpg" onClick={cat}></img>Cat-Cow Pose</div>
      <div className='yog '><img className='Pose' src="./yoga/snake.jpg" onClick={cobra}></img>Cobra Pose </div>
      <div className='yog '><img className='Pose' src="./yoga/Child.jpg" onClick={child}></img>Child's Pose</div>

      </div>
    </div>
    </div>
    </>
    
  )
}

export default Yoga