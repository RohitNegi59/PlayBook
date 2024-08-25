import { useState } from 'react'
import './LandingPage.css'
import { Link, NavLink } from 'react-router-dom'


function LandingPage() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='LandingBackground '>
  <div className='flex justify-center '>
    <div id="top_left_petel" className='bg-gray-300 w-40 h-40 rounded-full m-2 text-center' >
     <NavLink to="/Draw"><button className='whitebg'>Draw</button></NavLink>
    </div>
    <div id="top_right_petel" className='bg-gray-300 w-40 h-40 m-2'>
    <NavLink to="/Guess"><button className='whitebg'>Guess the Letter</button></NavLink>
    </div>
  </div>

  <div className='flex justify-center'>
    <div id="middle_left_petel" className='bg-gray-300 w-40 h-40 rounded-full m-4'>
    <NavLink to="/Howmany"><button className='whitebg'>How Many</button></NavLink>
    </div>
    <div id="middle_middle_petel" className='bg-gray-300 w-40 h-40 rounded-full m-4'>
    <NavLink to="/Shape"><button className='whitebg'>Shapes & Colors</button></NavLink>
    </div>
    <div id="middle_right_petel"className='bg-gray-300 w-40 h-40 rounded-full m-4'>
    <NavLink to="/spell"><button className='whitebg'>Spell</button></NavLink>
    </div>
  </div>

  <div className='flex justify-center '>
    <div id="bottom_left_petel" className='bg-gray-300 w-40 h-40 rounded-full m-2' >
    <NavLink to="/vegetables"><button className='whitebg'>Vegetables</button></NavLink>
    </div>
    <div id="bottom_right_petel" className='bg-gray-300 w-40 h-40 rounded-full m-2'>
    <NavLink to="/yoga"><button className='whitebg'>Yoga</button></NavLink>
    </div>
  </div>


  <div>
  <div></div>
  </div>

  </div>
    </>
  )
}

export default LandingPage
