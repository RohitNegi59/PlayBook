import React, { useState, useEffect } from 'react';
import './Vegetables.css'
import ShowModel from '../GuessTheLetter/ShowModel';
import WrongModel from '../../../assets/WrongModel';
import img1 from '/Vegetable/bringle.png';
import img2 from '/Vegetable/radish.png';
import img3 from '/Vegetable/LadyFinger.png';
import img4 from '/Vegetable/peas.png';
import img5 from '/Vegetable/cabbage.png';
import img6 from '/Vegetable/pumkin.png';

function Vegetables() {

  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6
  ];


  const [currentIndex, setCurrentIndex] = useState(
    Math.floor(Math.random() * images.length)
  );
  const [showModel, setShowModel] = useState(false)
  const [wrongModel, setWrongModel] = useState(false)



  const handleClick = () => {
    const newIndex = Math.floor(Math.random() * images.length);
    setCurrentIndex(newIndex);
  };

  const checking = (e) => {
    if (e.target.value == currentIndex) {
      setShowModel(true);
      setTimeout(() => {
        setShowModel(false);
        const newIndex = Math.floor(Math.random() * images.length);
        setCurrentIndex(newIndex);
      }, 3000);
      console.log("congratulations")
    }
    else {
      setShowModel(false);
    }
  };

  return (
    <>
      <div className='outerdiv'>
        <div className='Name_div'>
          <div className="Name">
            Vegetable Name
          </div>
        </div>
        <div className="Card">
          <img className="image-size " src={images[currentIndex]} alt="Random Image" />
        </div>
        {showModel && <ShowModel />}
        {wrongModel && <WrongModel />}
        <div className="alphabets">
          <div className='row row1'>
            <div className="veg_rect"><button value="0" onClick={checking}>Bringle</button></div>
            <div className="veg_rect"><button value="1" onClick={checking}>Radish</button></div>
            <div className="veg_rect"><button value="2" onClick={checking}>Lady Finger</button></div>

          </div>
          <div className='row row2'>
            <div className="veg_rect"><button value="3" onClick={checking}>Peas</button></div>
            <div className="veg_rect"><button value="4" onClick={checking}>Cabbage</button></div>
            <div className="veg_rect"><button value="5" onClick={checking}>Pumpkin</button></div>
          </div>

        </div>
      </div>

    </>

  )
}

export default Vegetables