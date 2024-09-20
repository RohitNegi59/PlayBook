import React, { useState } from 'react';
import { ReactPainter } from 'react-painter';
import './DrawingApp.css';

const DrawingApp = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [color, setColor] = useState('#000000');
  const [lineWidth, setLineWidth] = useState(5);

  const handleSave = (blob) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => {
      setImageUrl(reader.result);
    };
  };

  return (
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
          onSave={handleSave}
          render={({ canvas, setColor: setPainterColor, setLineWidth: setPainterLineWidth, triggerSave }) => (
            <div className="Drawing_board">
              <div className='sidebar'>
                <div className='circle_draw_erase' onClick={() => {
                  setColor("#FFFFFF");
                  setPainterColor("#FFFFFF");
                }}></div>
                <div className='circle_draw'>
                  <input
                    type="color"
                    value={color}
                    onChange={(e) => {
                      setColor(e.target.value);
                      setPainterColor(e.target.value);
                    }}
                  />
                </div>
                <div className='circle_draw'>
                  <input
                    type="number"
                    min="1"
                    max="50"
                    value={lineWidth}
                    onChange={(e) => {
                      const newWidth = parseInt(e.target.value, 10);
                      setLineWidth(newWidth);
                      setPainterLineWidth(newWidth);
                    }}
                  />
                </div>
              </div>
              <div className='Drawing_canva awesomeContainer'>{canvas}</div>
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default DrawingApp;