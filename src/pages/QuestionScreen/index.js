import React, { useState } from 'react'
import Button from '../../components/Button'
import csv from 'd3'
import './styles.css'


const QuestionScreen = () => {

  const [database, setDatabase] = useState([
    { "name": "Snake", "has_fur": false, "has_fins": false, "is_flightless": true, "is_nocturnal": false, "has_stripes": false, "is_venomous": true, "lives_in_groups": false, "lives_in_water": false, "is_herbivore": false, "has_tusks": true, "is_domesticated": false },
    { "name": "Aligator", "has_fur": false, "has_fins": false, "is_flightless": true, "is_nocturnal": false, "has_stripes": false, "is_venomous": false, "lives_in_groups": true, "lives_in_water": false, "is_herbivore": false, "has_tusks": true, "is_domesticated": false },
    { "name": "Turtle", "has_fur": false, "has_fins": false, "is_flightless": true, "is_nocturnal": false, "has_stripes": false, "is_venomous": false, "lives_in_groups": true, "lives_in_water": true, "is_herbivore": true, "has_tusks": false, "is_domesticated": true },
    { "name": "Iguana", "has_fur": false, "has_fins": false, "is_flightless": true, "is_nocturnal": false, "has_stripes": false, "is_venomous": false, "lives_in_groups": false, "lives_in_water": false, "is_herbivore": true, "has_tusks": false, "is_domesticated": true },
    { "name": "Gorilla", "has_fur": true, "has_fins": false, "is_flightless": true, "is_nocturnal": false, "has_stripes": false, "is_venomous": false, "lives_in_groups": true, "lives_in_water": false, "is_herbivore": false, "has_tusks": false, "is_domesticated": false },
    { "name": "Shark", "has_fur": false, "has_fins": true, "is_flightless": true, "is_nocturnal": false, "has_stripes": false, "is_venomous": false, "lives_in_groups": false, "lives_in_water": true, "is_herbivore": false, "has_tusks": false, "is_domesticated": false },
    { "name": "Tortoise", "has_fur": false, "has_fins": false, "is_flightless": true, "is_nocturnal": false, "has_stripes": false, "is_venomous": false, "lives_in_groups": true, "lives_in_water": false, "is_herbivore": true, "has_tusks": false, "is_domesticated": true },
    { "name": "Buffalo", "has_fur": true, "has_fins": false, "is_flightless": true, "is_nocturnal": false, "has_stripes": false, "is_venomous": false, "lives_in_groups": true, "lives_in_water": false, "is_herbivore": true, "has_tusks": false, "is_domesticated": true },
    { "name": "Pigeon", "has_fur": true, "has_fins": false, "is_flightless": false, "is_nocturnal": false, "has_stripes": false, "is_venomous": false, "lives_in_groups": true, "lives_in_water": false, "is_herbivore": true, "has_tusks": false, "is_domesticated": true },
    { "name": "Bat", "has_fur": true, "has_fins": false, "is_flightless": false, "is_nocturnal": true, "has_stripes": false, "is_venomous": false, "lives_in_groups": true, "lives_in_water": false, "is_herbivore": true, "has_tusks": false, "is_domesticated": false },
    { "name": "giraffe", "has_fur": true, "has_fins": false, "is_flightless": true, "is_nocturnal": false, "has_stripes": true, "is_venomous": false, "lives_in_groups": true, "lives_in_water": false, "is_herbivore": true, "has_tusks": false, "is_domesticated": false },
    { "name": "tiger", "has_fur": true, "has_fins": false, "is_flightless": true, "is_nocturnal": false, "has_stripes": true, "is_venomous": false, "lives_in_groups": false, "lives_in_water": false, "is_herbivore": false, "has_tusks": true, "is_domesticated": false },
    { "name": "Whale", "has_fur": false, "has_fins": true, "is_flightless": true, "is_nocturnal": false, "has_stripes": false, "is_venomous": false, "lives_in_groups": true, "lives_in_water": true, "is_herbivore": false, "has_tusks": false, "is_domesticated": false },
    { "name": "Lion", "has_fur": true, "has_fins": false, "is_flightless": true, "is_nocturnal": false, "has_stripes": false, "is_venomous": false, "lives_in_groups": true, "lives_in_water": false, "is_herbivore": false, "has_tusks": true, "is_domesticated": false },
    { "name": "black Widow", "has_fur": true, "has_fins": false, "is_flightless": true, "is_nocturnal": false, "has_stripes": false, "is_venomous": true, "lives_in_groups": false, "lives_in_water": false, "is_herbivore": false, "has_tusks": true, "is_domesticated": false },
    { "name": "pharaoh ant", "has_fur": false, "has_fins": false, "is_flightless": true, "is_nocturnal": false, "has_stripes": false, "is_venomous": false, "lives_in_groups": true, "lives_in_water": false, "is_herbivore": true, "has_tusks": true, "is_domesticated": false },
    { "name": "moth", "has_fur": false, "has_fins": false, "is_flightless": false, "is_nocturnal": false, "has_stripes": false, "is_venomous": false, "lives_in_groups": false, "lives_in_water": false, "is_herbivore": false, "has_tusks": true, "is_domesticated": false },
    { "name": "bee", "has_fur": true, "has_fins": false, "is_flightless": false, "is_nocturnal": false, "has_stripes": true, "is_venomous": false, "lives_in_groups": true, "lives_in_water": false, "is_herbivore": true, "has_tusks": true, "is_domesticated": true },
    { "name": "lobster", "has_fur": true, "has_fins": false, "is_flightless": true, "is_nocturnal": false, "has_stripes": false, "is_venomous": false, "lives_in_groups": false, "lives_in_water": true, "is_herbivore": false, "has_tusks": true, "is_domesticated": false },
    { "name": "hooker", "has_fur": false, "has_fins": true, "is_flightless": true, "is_nocturnal": false, "has_stripes": false, "is_venomous": false, "lives_in_groups": true, "lives_in_water": true, "is_herbivore": false, "has_tusks": true, "is_domesticated": false },
    { "name": "Elephant", "has_fur": true, "has_fins": false, "is_flightless": true, "is_nocturnal": false, "has_stripes": false, "is_venomous": false, "lives_in_groups": true, "lives_in_water": false, "is_herbivore": true, "has_tusks": true, "is_domesticated": false },
    { "name": "Snail", "has_fur": false, "has_fins": false, "is_flightless": true, "is_nocturnal": false, "has_stripes": false, "is_venomous": false, "lives_in_groups": false, "lives_in_water": false, "is_herbivore": true, "has_tusks": false, "is_domesticated": false },
    { "name": "Panda", "has_fur": true, "has_fins": false, "is_flightless": true, "is_nocturnal": false, "has_stripes": false, "is_venomous": false, "lives_in_groups": false, "lives_in_water": false, "is_herbivore": true, "has_tusks": false, "is_domesticated": false },
    { "name": "Butterfly", "has_fur": false, "has_fins": false, "is_flightless": false, "is_nocturnal": false, "has_stripes": false, "is_venomous": false, "lives_in_groups": false, "lives_in_water": false, "is_herbivore": true, "has_tusks": false, "is_domesticated": false },
    { "name": "Hippopotamus", "has_fur": true, "has_fins": false, "is_flightless": true, "is_nocturnal": false, "has_stripes": false, "is_venomous": false, "lives_in_groups": true, "lives_in_water": true, "is_herbivore": true, "has_tusks": true, "is_domesticated": false },
    { "name": "Kangaroo", "has_fur": true, "has_fins": false, "is_flightless": true, "is_nocturnal": false, "has_stripes": false, "is_venomous": false, "lives_in_groups": true, "lives_in_water": false, "is_herbivore": true, "has_tusks": false, "is_domesticated": false },
    { "name": "Octopus", "has_fur": false, "has_fins": false, "is_flightless": true, "is_nocturnal": true, "has_stripes": false, "is_venomous": true, "lives_in_groups": false, "lives_in_water": true, "is_herbivore": false, "has_tusks": false, "is_domesticated": false },
    { "name": "Crocodile", "has_fur": false, "has_fins": false, "is_flightless": true, "is_nocturnal": false, "has_stripes": false, "is_venomous": false, "lives_in_groups": false, "lives_in_water": true, "is_herbivore": false, "has_tusks": true, "is_domesticated": false },
    { "name": "Leopard", "has_fur": true, "has_fins": false, "is_flightless": true, "is_nocturnal": false, "has_stripes": true, "is_venomous": false, "lives_in_groups": false, "lives_in_water": false, "is_herbivore": false, "has_tusks": false, "is_domesticated": false },
    { "name": "Monkey", "has_fur": true, "has_fins": false, "is_flightless": true, "is_nocturnal": false, "has_stripes": false, "is_venomous": false, "lives_in_groups": true, "lives_in_water": false, "is_herbivore": false, "has_tusks": false, "is_domesticated": false },
    { "name": "Polar Bear", "has_fur": true, "has_fins": false, "is_flightless": true, "is_nocturnal": false, "has_stripes": false, "is_venomous": false, "lives_in_groups": false, "lives_in_water": false, "is_herbivore": false, "has_tusks": false, "is_domesticated": false },
    { "name": "Jaguar", "has_fur": true, "has_fins": false, "is_flightless": true, "is_nocturnal": true, "has_stripes": true, "is_venomous": false, "lives_in_groups": true, "lives_in_water": false, "is_herbivore": false, "has_tusks": true, "is_domesticated": false },
    { "name": "Hare", "has_fur": true, "has_fins": false, "is_flightless": true, "is_nocturnal": false, "has_stripes": true, "is_venomous": false, "lives_in_groups": false, "lives_in_water": false, "is_herbivore": true, "has_tusks": false, "is_domesticated": false },
    { "name": "Fennec", "has_fur": true, "has_fins": false, "is_flightless": true, "is_nocturnal": true, "has_stripes": false, "is_venomous": false, "lives_in_groups": true, "lives_in_water": false, "is_herbivore": false, "has_tusks": false, "is_domesticated": false },
    { "name": "Orca", "has_fur": false, "has_fins": true, "is_flightless": true, "is_nocturnal": false, "has_stripes": false, "is_venomous": false, "lives_in_groups": false, "lives_in_water": true, "is_herbivore": false, "has_tusks": true, "is_domesticated": false },
    { "name": "Crab", "has_fur": false, "has_fins": false, "is_flightless": true, "is_nocturnal": false, "has_stripes": false, "is_venomous": false, "lives_in_groups": false, "lives_in_water": true, "is_herbivore": false, "has_tusks": false, "is_domesticated": false },
    { "name": "Platypus", "has_fur": true, "has_fins": false, "is_flightless": true, "is_nocturnal": true, "has_stripes": true, "is_venomous": false, "lives_in_groups": false, "lives_in_water": true, "is_herbivore": false, "has_tusks": false, "is_domesticated": false },
    { "name": "Duck", "has_fur": false, "has_fins": false, "is_flightless": true, "is_nocturnal": false, "has_stripes": false, "is_venomous": false, "lives_in_groups": true, "lives_in_water": true, "is_herbivore": false, "has_tusks": false, "is_domesticated": false },
    { "name": "Donkey", "has_fur": true, "has_fins": false, "is_flightless": true, "is_nocturnal": false, "has_stripes": true, "is_venomous": false, "lives_in_groups": false, "lives_in_water": false, "is_herbivore": true, "has_tusks": false, "is_domesticated": true },
    { "name": "Paul", "has_fur": false, "has_fins": false, "is_flightless": true, "is_nocturnal": false, "has_stripes": true, "is_venomous": false, "lives_in_groups": false, "lives_in_water": false, "is_herbivore": false, "has_tusks": false, "is_domesticated": true },
  ]);

  let questions = [
    ["has_fur", "Esse animal possui pelos?"],
    ["has_fins", "Esse animal possui barbatanas?"],
    ["is_flightless", "Esse animal é incapaz de voar?"],
    ["is_nocturnal", "É noturno?"],
    ["has_stripes", "Possui listras?"],
    ["is_venomous", "É venenoso?"],
    ["lives_in_groups", "Esse animal vive em grupos?"],
    ["lives_in_water", "Esse animal é aquático?"],
    ["is_herbivore", "Esse animal é herbívoro?"],
    ["has_tusks", "Possui presas?"],
    ["is_domesticated", "É domesticado?"],
  ];

  const [currentQuestion, setCurrentQuestion] = useState(questions[0][1]);
  const [index, setIndex] = useState(0);

  const handleAnswer = (answer) => {
    takeChance(answer, questions[index][0]);
    setCurrentQuestion(questions[index + 1][1]);
    setIndex(index + 1)
  }

  function takeChance(answer, property) {

    let ans = answer === "y" ? true : false;

    console.log(property)

    let updatedDataBase = database.filter((element) => element[property] === ans);

    console.log(updatedDataBase);

    setDatabase(updatedDataBase);

    if (updatedDataBase.length === 1) {
      alert(`Your character is ${updatedDataBase[0].name}.`);
    }
  }

  return (
    <div className='container_question'>
      <div className='central_block'>
        <div className='asking_popup'>
          <svg width="454" height="250" viewBox="0 0 454 355" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M203.655 345.726C203.47 345.234 207.894 327.484 213.484 306.172C219.013 284.921 223.375 267.294 223.129 267.11C222.884 266.864 217.293 266.496 210.72 266.25C203.04 266.004 191.245 264.96 177.852 263.425C157.825 261.029 156.166 260.784 138.534 256.362C121.21 252.062 118.752 251.264 97.6804 243.157C85.3321 238.366 74.7654 234.189 74.0896 233.882C70.8336 232.163 43.4339 211.157 36.1232 204.77L27.6452 197.461L20.5803 185.914C16.7099 179.588 13.2082 173.815 12.901 173.139C12.5324 172.464 11.4266 168.287 10.4436 163.804C9.03062 157.232 8.60058 153.485 8.29341 144.334L7.9248 132.971L10.9965 121.425C14.0068 110.124 14.1911 109.632 20.2117 98.6998L26.3551 87.5216L39.4406 74.5623L52.5262 61.603L68.4991 51.9602L84.472 42.3789L106.281 34.7016C118.261 30.4637 134.848 25.1203 143.142 22.7249L158.193 18.4256L178.774 16.3374C194.132 14.7405 204.822 14.0035 220.856 13.5121L242.42 12.8365L265.581 15.0476C288.434 17.1972 288.926 17.2587 307.602 21.4966L326.523 25.7959L345.568 33.9031C356.073 38.3253 368.606 43.6687 373.521 45.7569C381.569 49.135 384.026 50.609 398.832 60.7431L415.173 71.9827L423.958 84.3893C428.75 91.1453 433.051 97.7171 433.481 98.8841C433.911 100.051 436.184 107.79 438.641 116.02L443.064 130.945L441.16 143.413C439.378 154.591 438.764 157.109 435.262 166.997C433.112 173.078 431.023 178.606 430.532 179.22C430.102 179.834 425.617 185.546 420.518 191.872L411.364 203.357L389.985 219.326L368.606 235.356L348.21 243.894L327.814 252.431L302.625 257.651C288.741 260.538 277.253 263.118 277.007 263.363C276.762 263.609 260.789 282.035 241.437 304.33C222.146 326.625 205.805 345.234 205.129 345.726C204.146 346.401 203.9 346.401 203.655 345.726Z" fill="black" />
          </svg>
          <h2>{currentQuestion}</h2>
        </div>

        <div className="door">
          <svg width="222" height="280" viewBox="0 0 222 388" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M110.388 387.137C168.381 387.137 215.394 384.638 215.394 381.554C215.394 378.471 168.381 375.971 110.388 375.971C52.394 375.971 5.38086 378.471 5.38086 381.554C5.38086 384.638 52.394 387.137 110.388 387.137Z" fill="black" stroke="black" stroke-width="1.26285" />
            <path d="M214.88 381.331C217.976 381.331 220.486 297.348 220.486 193.749C220.486 90.1505 217.976 6.16722 214.88 6.16722C211.783 6.16722 209.273 90.1505 209.273 193.749C209.273 297.348 211.783 381.331 214.88 381.331Z" fill="black" stroke="black" stroke-width="1.147" />
            <path d="M111.104 11.2354C168.879 11.2354 215.714 8.94409 215.714 6.11768C215.714 3.29126 168.879 1 111.104 1C53.3289 1 6.49316 3.29126 6.49316 6.11768C6.49316 8.94409 53.3289 11.2354 111.104 11.2354Z" fill="black" stroke="black" stroke-width="1.25386" />
            <path d="M6.60634 382.033C9.70264 382.033 12.2127 297.941 12.2127 194.21C12.2127 90.478 9.70264 6.38684 6.60634 6.38684C3.51005 6.38684 1 90.478 1 194.21C1 297.941 3.51005 382.033 6.60634 382.033Z" fill="black" stroke="black" stroke-width="1.14634" />
            <path d="M33.6895 355.553C36.5334 355.553 38.8389 326.498 38.8389 290.656C38.8389 254.814 36.5334 225.759 33.6895 225.759C30.8455 225.759 28.54 254.814 28.54 290.656C28.54 326.498 30.8455 355.553 33.6895 355.553Z" fill="black" stroke="black" stroke-width="1.09616" />
            <path d="M109.022 360.518C150.955 360.518 184.948 358.021 184.948 354.94C184.948 351.859 150.955 349.361 109.022 349.361C67.0883 349.361 33.0947 351.859 33.0947 354.94C33.0947 358.021 67.0883 360.518 109.022 360.518Z" fill="black" stroke="black" stroke-width="1.28445" />
            <path d="M184.515 355.547C187.615 355.547 190.128 326.375 190.128 290.39C190.128 254.405 187.615 225.234 184.515 225.234C181.415 225.234 178.902 254.405 178.902 290.39C178.902 326.375 181.415 355.547 184.515 355.547Z" fill="black" stroke="black" stroke-width="1.11226" />
            <path d="M109.397 231.168C151.405 231.168 185.458 228.88 185.458 226.057C185.458 223.235 151.405 220.947 109.397 220.947C67.3897 220.947 33.3359 223.235 33.3359 226.057C33.3359 228.88 67.3897 231.168 109.397 231.168Z" fill="black" stroke="black" stroke-width="1.29008" />
            <path d="M33.6864 166.195C36.5286 166.195 38.8327 136.751 38.8327 100.431C38.8327 64.1107 36.5286 34.6674 33.6864 34.6674C30.8441 34.6674 28.54 64.1107 28.54 100.431C28.54 136.751 30.8441 166.195 33.6864 166.195Z" fill="black" stroke="black" stroke-width="1.11026" />
            <path d="M109.653 170.457C152.02 170.457 186.365 168.171 186.365 165.352C186.365 162.533 152.02 160.248 109.653 160.248C67.2865 160.248 32.9414 162.533 32.9414 165.352C32.9414 168.171 67.2865 170.457 109.653 170.457Z" fill="black" stroke="black" stroke-width="1.32026" />
            <path d="M109.796 40.6426C152.406 40.6426 186.948 38.3563 186.948 35.536C186.948 32.7157 152.406 30.4294 109.796 30.4294C67.1851 30.4294 32.6426 32.7157 32.6426 35.536C32.6426 38.3563 67.1851 40.6426 109.796 40.6426Z" fill="black" stroke="black" stroke-width="1.30885" />
            <path d="M184.518 196.171C186.581 196.171 188.254 194.499 188.254 192.435C188.254 190.372 186.581 188.7 184.518 188.7C182.455 188.7 180.782 190.372 180.782 192.435C180.782 194.499 182.455 196.171 184.518 196.171Z" fill="black" stroke="black" stroke-width="1.1599" />
            <path d="M184.518 206.911C192.513 206.911 198.994 200.43 198.994 192.435C198.994 184.441 192.513 177.959 184.518 177.959C176.523 177.959 170.042 184.441 170.042 192.435C170.042 200.43 176.523 206.911 184.518 206.911Z" fill="black" stroke="black" stroke-width="1.1599" />
            <path d="M186.344 165.189C189.187 165.189 191.492 136.077 191.492 100.167C191.492 64.2559 189.187 35.1444 186.344 35.1444C183.501 35.1444 181.196 64.2559 181.196 100.167C181.196 136.077 183.501 165.189 186.344 165.189Z" fill="black" stroke="black" stroke-width="1.10415" />
          </svg>
        </div>

        <div className="question_options">
          <Button action={() => handleAnswer("y")}>Sim</Button>
          <Button action={() => handleAnswer("n")}>Não</Button>
          <Button action={() => handleAnswer()}>Não sei</Button>
        </div>
      </div>
    </div>
  )
}

export default QuestionScreen