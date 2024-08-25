import { useState } from 'react'
import './Header.css'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=' h-20 bg-yellow-300'>
        <Link>
          <h1 className=' font-bold kodchasan-regular'>PlayBook</h1>
        </Link>
      </div>
    </>
  )
}

export default Header
