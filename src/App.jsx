import { useState } from 'react'
import Card from './assets/card'
import './App.css'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import LandingPage from './components/LandingPage/LandingPage.jsx'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="content-box" className='widthofapp h-screen m-auto  ' >
        <Header />
        <Outlet />
        <Footer />

      </div>
    </>
  )
}

export default App
