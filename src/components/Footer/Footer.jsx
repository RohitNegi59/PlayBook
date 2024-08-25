import { useState } from 'react'
import './Footer.css'

function Footer() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='footer   bg-gray-800' >
    <h1 className='text-center text-stone-50 font-bold '> 2024 Playbook | A Research Project</h1>
    </div>
    </>
  )
}

export default Footer
