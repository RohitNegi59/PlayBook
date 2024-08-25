import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage.jsx'
import DrawingApp from './components/Apps/DrawingApp/DrawingApp.jsx'
import Guess from './components/Apps/GuessTheLetter/Guess.jsx'
import Howmany from './components/Apps/HowMany/Howmany.jsx'
import Shape from './components/Apps/Shapes/Shape.jsx'
import Spell from './components/Apps/SpellMeCorrect/Spell.jsx'
import Vegetables from './components/Apps/Vegetables/Vegetables.jsx'
import Yoga from './components/Apps/Yoga/Yoga.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "",
        element: <LandingPage />
      },
      {
        path: "Draw",
        element: <DrawingApp />
      },
      {
        path: "Guess",
        element: <Guess />
      },
      {
        path: "Howmany",
        element: <Howmany />
      },
      {
        path: "shape",
        element: <Shape/>
      },
      {
        path: "spell",
        element: <Spell/>
      },
      {
        path: "vegetables",
        element: <Vegetables/>
      },
      {
        path: "yoga",
        element: <Yoga/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)
