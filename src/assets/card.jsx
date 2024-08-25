import { useState } from 'react'
import './Card.css'
import ShowModel from '../components/Apps/GuessTheLetter/ShowModel';
function Card() {

  const Spell = [
    {
      id: 1,
      name: "Apple",
      img: "./spell/apple.jpg",
      text: " I am a red fruit, crunchy and sweet. Can you guess my name?",
    }, {

      id: 2,
      name: "Ball",
      img: "./spell/Ball.jpg",
      text: "I am a round object that you can bounce and throw. What am I? ",
    }, {

      id: 3,
      name: "Cat",
      img: "./spell/cat.jpg",
      text: "I have soft fur, whiskers, and I purr when I'm happy. Who am I?",
    }, {

      id: 4,
      name: "Dog",
      img: "./spell/dog.jpg",
      text: "I wag my tail and bark. I love going for walks and playing fetch. What am I? ",
    }, {

      id: 5,
      name: "Elephant",
      img: "./spell/elephant.jpg",
      text: "I have a long trunk, big ears, and tusks. What am I?",
    }, {

      id: 6,
      name: "Fish",
      img: "./spell/Fish.jpg",
      text: "I live in water and have fins to swim. Can you guess what I am?",
    }
  ];



  const Check = () => {
    if (name == Spell[currentIndex].name) {

      setShowModel(true);
      setTimeout(() => {
        setShowModel(false);
        const newIndex = Math.floor(Math.random() * Spell.length);
        setCurrentIndex(newIndex);
      }, 2000);

    }
    else {
      console.log("better Luck Next Time")
      setShowModel(false);

    }
  };



  const [name, setName] = useState(null)
  const [showModel, setShowModel] = useState(false)

  const [currentIndex, setCurrentIndex] = useState(
    Math.floor(Math.random() * Spell.length)
  );
  const close = () => {
    setShowModel(false);
    const newIndex = Math.floor(Math.random() * Spell.length);
    setCurrentIndex(newIndex);
  }


  return (
    <>
      {showModel && <ShowModel close={close} />}
      <div className="Cardholder">

        <div className="CardImage"><img className="card_image" src={Spell[currentIndex].img}></img></div>
        <div>
          <div><h1 className='card_text'>{Spell[currentIndex].text}</h1></div>
          <input type="text" className="rectinput" onChange={(e) => { setName(e.target.value) }} />
          <button className='cardbutton' onClick={Check}>Check</button>
        </div>

      </div>


    </>
  )
}

export default Card
