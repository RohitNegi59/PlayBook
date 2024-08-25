import React, { useState, useEffect } from 'react';
import './Guess.css'
import ShowModel from './ShowModel';

import img1 from '/src/Image/apple.jpg';
import img2 from '/src/Image/Ball.jpg';
import img3 from '/src/Image/cat.jpg';
import img4 from '/src/Image/dog.jpg';
import img5 from '/src/Image/elephant.jpg';
import img6 from '/src/Image/Fish.jpg';
import img7 from '/src/Image/girrafe.jpg';
import img8 from '/src/Image/hen.jpg';
import img9 from '/src/Image/icecream.jpg';
import img10 from '/src/Image/jug.jpg';
import img11 from '/src/Image/kite.jpg';
import img12 from '/src/Image/lion.jpg';
import img13 from '/src/Image/monkey.jpg';
import img14 from '/src/Image/nest.jpg';
import img15 from '/src/Image/orange.jpg';
import img16 from '/src/Image/parrote.jpg';
import img17 from '/src/Image/queen.jpg';
import img18 from '/src/Image/rabbit.jpg';
import img19 from '/src/Image/Ship.jpg';
import img20 from '/src/Image/Tiger.jpg';
import img21 from '/src/Image/Umbrella.jpg';
import img22 from '/src/Image/van.jpg';
import img23 from '/src/Image/watch.jpg';
import img24 from '/src/Image/x mas tree.jpg';
import img25 from '/src/Image/Yak.jpg';
import img26 from '/src/Image/Zebra.jpg';

function Guess() {

  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23,
    img24,
    img25,
    img26,
  ];


  const [currentIndex, setCurrentIndex] = useState(
    Math.floor(Math.random() * images.length)
  );
  const [showModel, setShowModel] = useState(false)



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
            Guess The Letter
          </div>
        </div>
        <div className="Card">
          <img className="image-size " src={images[currentIndex]} alt="Random Image" />
        </div>
        {showModel && <ShowModel />}
        <div className="alphabets">
          <div className='row row1'>
            <div className="circle"><button value="0" onClick={checking}>A</button></div>
            <div className="circle"><button value="1" onClick={checking}>B</button></div>
            <div className="circle"><button value="2" onClick={checking}>C</button></div>
            <div className="circle"><button value="3" onClick={checking}>D</button></div>
            <div className="circle"><button value="4" onClick={checking}>E</button></div>
            <div className="circle"><button value="5" onClick={checking}>F</button></div>
            <div className="circle"><button value="6" onClick={checking}>G</button></div>
            <div className="circle"><button value="7" onClick={checking}>H</button></div>

          </div>
          <div className='row row2'>
            <div className="circle"><button value="8" onClick={checking}>I</button></div>
            <div className="circle"><button value="9" onClick={checking}>J</button></div>
            <div className="circle"><button value="10" onClick={checking}>K</button></div>
            <div className="circle"><button value="11" onClick={checking}>L</button></div>
            <div className="circle"><button value="12" onClick={checking}>M</button></div>
            <div className="circle"><button value="13" onClick={checking}>N</button></div>
            <div className="circle"><button value="14" onClick={checking}>O</button></div>
            <div className="circle"><button value="15" onClick={checking}>P</button></div>

          </div>
          <div className='row row3'>
            <div className="circle"><button value="16" onClick={checking}>Q</button></div>
            <div className="circle"><button value="17" onClick={checking}>R</button></div>
            <div className="circle"><button value="18" onClick={checking}>S</button></div>
            <div className="circle"><button value="19" onClick={checking}>T</button></div>
            <div className="circle"><button value="20" onClick={checking}>U</button></div>
            <div className="circle"><button value="21" onClick={checking}>V</button></div>
            <div className="circle"><button value="22" onClick={checking}>W</button></div>
            <div className="circle"><button value="23" onClick={checking}>X</button></div>

          </div>
          <div className='row row4'>
            <div className="circle"><button value="24" onClick={checking}>Y</button></div>
            <div className="circle"><button value="25" onClick={checking}>Z</button></div>
          </div>
        </div>
      </div>

    </>

  )
}

export default Guess