import { useState } from 'react'
import './Card.css'
import ShowModel from '../components/Apps/GuessTheLetter/ShowModel';
import WrongModel from '/src/assets/WrongModel.jsx';
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
    },{
      id: 7,
      name: "Giraffe",
      img: "./spell/girrafe.jpg",
      text: "I have a very long neck and a spotted coat. What am I?"
    },
    {
      id: 8,
      name: "Hen",
      img: "./spell/hen.jpg",
      text: "I have feathers and lay eggs. What am I?"
    },
    {
      id: 9,
      name: "Icecream",
      img: "./spell/icecream.jpg",
      text: "I come in many flavors and I'm cold and sweet. What am I?"
    },
    {
      id: 10,
      name: "Jug",
      img: "./spell/jug.jpg",
      text: "I hold liquids and have a handle. What am I?"
    },
    {
      id: 11,
      name: "Kite",
      img: "./spell/kite.jpg",
      text: "I fly in the wind and have a long tail. What am I?"
    },
    {
      id: 12,
      name: "Lion",
      img: "./spell/lion.jpg",
      text: "I am a big cat with a mane. I roar loudly. What am I?"
    },
    {
      id: 13,
      name: "Monkey",
      img: "./spell/monkey.jpg",
      text: "I like to swing from trees and eat bananas. What am I?"
    },
    {
      id: 14,
      name: "Nest",
      img: "./spell/nest.jpg",
      text: "Birds build me in trees. What am I?"
    },
    {
      id: 15,
      name: "Orange",
      img: "./spell/orange.jpg",
      text: "I am a round fruit that is juicy and orange. What am I?"
    },
    {
      id: 16,
      name: "Parrot",
      img: "./spell/parrote.jpg",
      text: "I have colorful feathers and I can mimic sounds. What am I?"
    },
    {
      id: 17,
      name: "Queen",
      img: "./spell/queen.jpg",
      text: "I wear a crown and rule a kingdom. What am I?"
    },
    {
      id: 18,
      name: "Rabbit",
      img: "./spell/rabbit.jpg",
      text: "I have long ears and a fluffy tail. I hop around in fields. What am I?"
    },
    {
      id: 19,
      name: "Ship",
      img: "./spell/Ship.jpg",
      text: "I travel across the ocean and have a big sail. What am I?"
    },
    {
      id: 20,
      name: "Tiger",
      img: "./spell/Tiger.jpg",
      text: "I have orange and black stripes and I am a good hunter. What am I?"
    },
    {
      id: 21,
      name: "Umbrella",
      img: "./spell/Umbrella.jpg",
      text: "I help keep you dry when it rains. What am I?"
    },
    {
      id: 22,
      name: "Van",
      img: "./spell/van.jpg",
      text: "I can carry many things and have four wheels. What am I?"
    },
    {
      id: 23,
      name: "Watch",
      img: "./spell/watch.jpg",
      text: "I have hands and numbers and tell you the time. What am I?"
    },
    {
      id: 24,
      name: "Christmas tree",
      img: "./spell/x mas tree.jpg",
      text: "I am the tallest plant on Earth and have a rough, brown trunk. What am I?"
    },
    {
      id: 25,
      name: "Yak",
      img: "./spell/Yak.jpg",
      text: "I have long fur and two horns. What am I?"
    },
    {
      id: 26,
      name: "Zebra",
      img: "./spell/Zebra.jpg",
      text: "I am black and white striped and look like a horse. What am I?"
    }


  ];



  const Check = () => {
    if (name === Spell[currentIndex].name || name.toLowerCase() === Spell[currentIndex].name.toLowerCase()  ) {

      setShowModel(true);
      setTimeout(() => {
        setShowModel(false);
        const newIndex = Math.floor(Math.random() * Spell.length);
        setCurrentIndex(newIndex);
      }, 2000);

    }
    else {
      setShowModel(false);
      setWrongModel(true);
      setTimeout(() => {
        setWrongModel(false);
        const newIndex = Math.floor(Math.random() * images.length);
        setCurrentIndex(newIndex);
      }, 3000);

    }
  };



  const [name, setName] = useState(null)
  const [showModel, setShowModel] = useState(false)
  const [wrongModel, setWrongModel] = useState(false)

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
      {wrongModel && <WrongModel />}
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
