import { useState } from 'react'
import './Footer.css'

function Footer() {
  const [count, setCount] = useState(0)

  return (
    <>
    <footer className='footer   bg-gray-800' >
    <h1 className='text-center text-stone-50 font-bold '> 2024 Playbook | A Research Project</h1>
    </footer>
    </>
  )
}

export default Footer
