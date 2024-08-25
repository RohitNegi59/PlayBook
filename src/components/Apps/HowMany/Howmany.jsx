import React, { useState, useEffect } from 'react';
import './Howmany.css'

import ShowModel from '../GuessTheLetter/ShowModel';
import img1 from '/src/Image/apple.jpg';
import img2 from '/src/Image/Ball.jpg';
import img3 from '/src/Image/cat.jpg';


function Howmany() {


  const images = [
    img1,
    img2,
    img3,
  ];

  const [currentIndex, setCurrentIndex] = useState(
    Math.floor(Math.random() * images.length)
  );
  const [showModel, setShowModel] = useState(false)


  const image = (count) => {
    const imageElements = [];
    for (let i = 0; i < count; i++) {
      imageElements.push(<img key={i} className='image-size_how_many' src={images[currentIndex]} />);
    }
    return imageElements;
  };

  const num = Math.floor(Math.random() * 9);

  const checking = (e) => {
    if (e.target.value == num + 1) {
      setShowModel(true);
      setTimeout(() => {
        setShowModel(false);
        const newIndex = Math.floor(Math.random() * images.length);
        setCurrentIndex(newIndex);
      }, 3000);

    }
    else {
      setShowModel(false);
      console.log("better luck next time")

    }
  };



  return (

    <>
      <div className='outerdiv'>
        <div className='Name_div'>
          <div className="Name">
            How Many
          </div>
        </div>
        <div className="card_how_many">

          {image(num + 1)}

        </div>
        {showModel && <ShowModel />}

        <div className="Numbers">
          <div className='row row1'>
            <button className="circle Name " value="1" onClick={checking}>1</button>
            <button className="circle Name" value="2" onClick={checking}>2</button >
            <button className="circle Name" value="3" onClick={checking}>3</button >
            <button className="circle Name" value="4" onClick={checking}>4</button >
            <button className="circle Name" value="5" onClick={checking}>5</button >
          </div>
          <div className='row row2'>
            <button className="circle Name" value="6" onClick={checking}>6</button >
            <button className="circle Name" value="7" onClick={checking}>7</button >
            <button className="circle Name" value="8" onClick={checking}>8</button >
            <button className="circle Name" value="9" onClick={checking}>9</button >
            <button className="circle Name" value="10" onClick={checking}>10</button >
          </div>

        </div>


      </div>
    </>
  )
}

export default Howmany