import React, { useState, useEffect } from 'react';
import './shape.css'
import Circle from '/Sound/Circle.wav'
import Square from '/Sound/Square.wav'
import Rectangle from '/Sound/Reactagle.wav'
import Triangle from '/Sound/Triangle.wav'
import Hexagone from '/Sound/Hexgone.wav'
import Pentagon from '/Sound/Pantagon.wav'

function Shape() {

  const [playsound, setplaysound] = useState('Circle')
  function playCircle(){
    new Audio(Circle).play()
  }
  function playRectangle(){
    new Audio(Rectangle).play()
  }
  function playSquare(){
    new Audio(Square).play()
  }
  function playTriangle(){
    new Audio(Triangle).play()
  }
  function playHexagone(){
    new Audio(Hexagone).play()
  }
  function playPentagon(){
    new Audio(Pentagon).play()
  }

  return (
    <><div className='outer'>
      <div className='Name_div'>
        <div className='Name'>Shape and Color</div></div>
      <div className=''>
        <div className='row_shape row1'>
          <div id="hexagone" className='shape' onClick={playHexagone}><h1 className='shape_text'>Hexagon</h1></div>
          <div id="square" className='shape' onClick={playSquare}><h1 className='shape_text'>Square</h1></div>
          <div id="penatgone" className='shape' onClick={playPentagon}><h1 className='shape_text'>Penatgon</h1></div>
        </div>
        <div className='row_shape row2'>
          <button id="rectangle" className='shape' onClick={playRectangle}><h1 className='shape_text'>Rectangle</h1></button>
          <button id="triangle" className='shape' onClick={playTriangle}><h1 className='shape_text'>Triangle</h1></button>
          <button value="Circle" id="circle" className='shape' onClick={playCircle}><h1 className='shape_text'>Circle</h1></button>

        </div>
      </div>
      </div>
    </>
  )
}

export default Shape