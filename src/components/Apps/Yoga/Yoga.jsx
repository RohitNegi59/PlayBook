import React, { useState, useEffect } from 'react';
import './yoga.css'
import Tree from './Tree'
import Cobra from './Cobra';
import Mount from './Mount';
import Dog from './Dog';
import Cat from './Cat';
import Child from './Child';


function Yoga() {
  const [yog,setYog] = useState(false)
  const [cobra,setCobra] = useState(false)
  const [mountain,setMountain] =useState(false)
  const [child,setChild] =useState(false)
  const [dog,setDog]=useState(false)
  const [cat,setCat]=useState(false)

const mountainpose=()=>{
setMountain(true);
}
const tree=()=>{
  setYog(true);
}
const dogpose=()=>{
  setDog(true);
}
const catpose=()=>{
  setCat(true);
}
const cobrapose=()=>{
  setCobra(true);
}
const childpose=()=>{
  setChild(true);
}

const close = () => {
    setYog(false);
    setCobra(false);
    setMountain(false);
    setChild(false);
    setDog(false);
    setCat(false);
}

  return (
    <><div  className='outer'>
    <div className='Name_div'>
    <div className='Name'>Yoga</div></div>
    <div>
    { yog && <Tree close={close} />}
    { cobra && < Cobra close={close} />}
    {mountain  && < Mount close={close} />}
    {child  && < Child close={close} />}
    {dog  && < Dog close={close} />}
    {cat  && < Cat close={close} />}
   <div className='row_yoga'>
   <div className='yog'><img className='Pose' src="./yoga/mount.jpg" onClick={mountainpose}></img>Mountain Pose</div>
      <div className='yog Tree_Pose'><img className='Pose' src="./yoga/tree.jpg" onClick={tree}></img>Tree Pose</div>
      <div className='yog '><img className='Pose' src="./yoga/dog.jpg" onClick={dogpose}></img>Downward-Facing Dog</div>
   </div>
      <div className='row_yoga'>
      <div className='yog '><img className='Pose' src="./yoga/cat.jpg" onClick={catpose}></img>Cat-Cow Pose</div>
      <div className='yog '><img className='Pose' src="./yoga/snake.jpg" onClick={cobrapose}></img>Cobra Pose </div>
      <div className='yog '><img className='Pose' src="./yoga/Child.jpg" onClick={childpose}></img>Child's Pose</div>

      </div>
    </div>
    </div>
    </>
    
  )
}

export default Yoga