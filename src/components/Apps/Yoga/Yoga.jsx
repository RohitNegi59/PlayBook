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
   <div className='yog'><img className='Pose' src="./yoga/mount.jpg" onClick={mountainpose}></img><h1 className='yog_text'>Mountain Pose</h1></div>
      <div className='yog Tree_Pose'><img className='Pose' src="./yoga/tree.jpg" onClick={tree}></img><h1 className='yog_text'>Tree Pose</h1></div>
      <div className='yog '><img className='Pose' src="./yoga/dog.jpg" onClick={dogpose}></img><h1 className='yog_text'>Downward-Facing Dog</h1></div>
   </div>
      <div className='row_yoga'>
      <div className='yog '><img className='Pose' src="./yoga/cat.jpg" onClick={catpose}></img><h1 className='yog_text'>Cat-Cow Pose</h1></div>
      <div className='yog '><img className='Pose' src="./yoga/snake.jpg" onClick={cobrapose}></img><h1 className='yog_text'>Cobra Pose</h1> </div>
      <div className='yog '><img className='Pose' src="./yoga/Child.jpg" onClick={childpose}></img><h1 className='yog_text'>Child's Pose</h1></div>

      </div>
    </div>
    </div>
    </>
    
  )
}

export default Yoga