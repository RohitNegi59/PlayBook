import React, { useState } from 'react';
import { ReactPainter } from 'react-painter';

import './DrawingApp.css'

const DrawingApp = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [color, setColor] = useState('#000000');
  const [lineWidth, setLineWidth] = useState(5);


  const handleSave = (blob) => {
    // Convert blob to a data URL for display
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => {
      setImageUrl(reader.result);
    };
  };

  return (
    <>
 <div className='outerdiv'>
      <div className='Name_div'>
        <div className="Name">
          Drawing-Book
        </div>
      </div>

      <div className='Drawing_app'>
        <ReactPainter
          width={700}
          height={450}
          render={({ canvas, setColor, triggerSave, setLineWidth }) => (

            
              <div className="Drawing_board" >
                <div className='sidebar'>
                  <div className='circle_draw_erase' onClick={()=>setColor("#FFFFFF")}></div>
                  <div className='circle_draw'>
                    <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
                  </div>
                  <div className='circle_draw' >
                    <input type="number" min={"1"} max={"20"} value={lineWidth}     onChange={(e) => {
                      const newWidth = parseInt(e.target.value, 10);
                      setLineWidth(newWidth);
                      setPainterLineWidth(newWidth);
                    }} />
                  </div>
                </div>

                <div className='Drawing_canva awesomeContainer'>{canvas}</div>

              </div>
   

          )}

        />

      </div>

      </div>
    </>
  );
};


export default DrawingApp



