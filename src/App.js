import React, { useState } from 'react';
import profiles from './data/berlin.json';
import visa from './visa.png';
import mastercard from './mastercard.png';
//import './App.css';

function App() {
  return (
    <div className="App">
    <h1>IdCard</h1>
      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <h1>Greetings</h1>
      <Greetings lang='de'>Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      <h1>Random</h1>
      <Random min={1} max={6}/>
      <Random min={1} max={100}/>

      <h1>BoxColor</h1>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

      <h1>CreditCard</h1>
      <CreditCard
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white" />
      <CreditCard
        type="Master Card"
        number="0123456789010995"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="#eeeeee"
        color="#222222" />
      <CreditCard
        type="Visa"
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="Name of the Bank"
        owner="Firstname Lastname"
        bgColor="#ddbb55"
        color="white" />

        <h1>Rating</h1>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>

        <h1>DriverCard</h1>
        <DriverCard
          name="Travis Kalanick"
          rating={4.2}
          img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
          car={{
            model: "Toyota Corolla Altis",
            licensePlate: "CO42DE"
          }} />
        <DriverCard
          name="Dara Khosrowshahi"
          rating={4.9}
          img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
          car={{
            model: "Audi A3",
            licensePlate: "BE33ER"
          }} />

        <h2>LikeButton</h2>
        <LikeButton /> <LikeButton />

        <h2>ClickablePicture</h2>
        <ClickablePicture
          img='/img/persons/maxence.png'
          imgClicked='/img/persons/maxence-glasses.png'
        />

        <h2>Dice</h2>
        <Dice />

        <h2>Carousel</h2>
        <Carousel
          imgs={[
            'https://randomuser.me/api/portraits/women/1.jpg',
            'https://randomuser.me/api/portraits/men/1.jpg',
            'https://randomuser.me/api/portraits/women/2.jpg',
            'https://randomuser.me/api/portraits/men/2.jpg'
          ]}
        />

        <h2>NumbersTable</h2>
        <NumbersTable limit={12} />

        <h2>Facebook</h2>
        <Facebook />

        <h2>SignupPage</h2>
        <SignupPage />
    </div>
  );
}

function IdCard(props) {
  return (
  <div style={{border: "1px solid black", display: "flex", padding: 5 + "px", margin: 5 + "px"}}>
    <img src={props.picture} alt="man"></img>
    <ul style={{listStyleType: "none", padding: 0, margin: 0, marginLeft: 5 + "px", textAlign: "left"}}>
      <li><b>First Name: </b><span>{props.firstName}</span></li>
      <li><b>Last Name: </b><span>{props.lastName}</span></li>
      <li><b>Gender: </b><span>{props.gender}</span></li>
      <li><b>Height: </b><span>{props.height}</span></li>
      <li><b>Birth: </b><span>{props.birth.toDateString()}</span></li>
    </ul>
  </div>
  );
}

function Greetings(props) {
  let greetings = {
    'de': 'Hallo',
    'en': 'Hello',
    'es': 'Hola',
    'fr': 'Bonjour'
  }
  return (
    <h3 style={{border: "1px solid black", textAlign: 'left', padding: '5px', margin: '5px'}}>{greetings[props.lang]} {props.children}</h3>
  );
}

function Random(props) {
  let num = Math.floor((Math.random() * props.max) + props.min);
  return (
    <h3 style={{border: "1px solid black", textAlign: 'left', padding: '5px', margin: '5px'}}>
      Random value between {props.min} and {props.max} ={'>'} {num}
    </h3>
  );
}

function BoxColor(props) {
  // Borrowed from https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb ;-)
  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }
  
  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }
  return (
    <h3 style={{
      textAlign: 'center',
      border: "1px solid black",
      padding: '20px', margin: '5px',
      backgroundColor: `rgb(${props.r},${props.g},${props.b})`
    }}>
      rgb({props.r},{props.g},{props.b}) <br></br>
      {rgbToHex(props.r, props.g, props.b)}
    </h3>
  );
}

function CreditCard(props) {
  let cards = {
    'Visa': visa,
    'Master Card': mastercard
  }
  let number = props.number.toString()
  let year = props.expirationYear.toString()
  return (
    <div style={{width: '300px',
      backgroundColor: props.bgColor,
      color: props.color, padding: '10px',
      margin: '20px',
      display: 'inline-block',
      borderRadius: '10px'
    }}>
      <div style = {{textAlign: 'right'}}><img src={cards[props.type]} alt='Card Provider' style={{maxWidth: '100%', height: '20px'}}></img></div>
      <div style={{textAlign: 'center', fontSize: '1.9em', margin: '20px 0'}}>•••• •••• •••• {number.substring(number.length - 4)}</div>
      <div style={{}}>
        <span>Expires: {props.expirationMonth}/{year.substring(2)}</span>
        <span style={{marginLeft: '20px'}}>{props.bank}</span>
      </div>
      <div style={{}}>{props.owner}</div>
    </div>
  );
}

function Rating(props) {
  let result = '';
  for (let i = 0; i < 5; i++){
    if (i < Math.round(Number(props.children))){
      result += '★'
    } else {
      result += '☆'
    }
  }
  return (
    <div style={{fontSize: '2rem'}}>
      {result}
    </div>
  );
}

function DriverCard(props) {
  return (
    <div style={{display: 'flex', justifyContent: 'center', textAlign: 'center', padding: '15px', margin: '10px', borderRadius: '10px', backgroundColor: '#425cbb'}}>
      <img src={props.img} height='100px' width='100px' style={{objectFit: 'cover', borderRadius: '50%'}} alt="Driver"></img>
      <div style={{textAlign: 'left', color: 'white', margin: '5px'}}>
        <h2 style={{margin: '0'}}>{props.name}</h2>
        <Rating>{props.rating}</Rating>
        <span>{props.car.model} - {props.car.licensePlate}</span>
      </div>
    </div>
  );
}

function LikeButton() {
  
  const [likes, setLikes] = useState(0);

  let colors = ['purple','blue','green','yellow','orange','red'];
  const [color, setColor] = useState(0);

  function colorIndex(num) {
    if (num + 1 > 5) return 0;
    return num + 1;
  }

  return (
    <button onClick={() => {
      setLikes(likes + 1);
      setColor(colorIndex(color));
      }} 
    style={{border: '1px solid grey',
    borderRadius: 0,
    backgroundColor: `${colors[color]}`,
    color: 'white'}}>
      {likes} Likes
    </button>
  );
}

function ClickablePicture(props) {
  const imgNoGlasses = 'img/persons/maxence.png',
  imgGlasses = 'img/persons/maxence-glasses.png';
  const [img, setImg] = useState(imgNoGlasses);

  function imgSwap() {
    if (img === imgNoGlasses) {
      setImg(imgGlasses)
    } else {
      setImg(imgNoGlasses)
    }
  }

  return (
    <img onClick={imgSwap}
    src={img}
    alt='man that equips/dequips glasses when clicked'
    style={{cursor: 'pointer', height: '100px'}}></img>
  );
}

function Dice() {

  const [dice, setDice] = useState(rand());

  function rand() {
    return Math.floor((Math.random() * 6) + 1);
  }

  let diceArr = {
    'empty': 'img/dice-empty.png',
    '1': 'img/dice1.png',
    '2': 'img/dice2.png',
    '3': 'img/dice3.png',
    '4': 'img/dice4.png',
    '5': 'img/dice5.png',
    '6': 'img/dice6.png',
  };

  return (
    <img src={diceArr[dice]}
    alt="dice"
    onClick={() => {
      setDice('empty')
      setTimeout(() => setDice(rand()), 1000)
    }}
    width='100px'
    ></img>
  );
}

function Carousel(props) {

  const [img, setImg] = useState(0);

  function indexRight() {
    if (props.imgs[img+1] === undefined) {
      setImg(0);
    } else {
      setImg(img + 1);
    }
  }

  function indexLeft() {
    if (props.imgs[img-1] === undefined) {
      setImg(props.imgs.length-1);
    } else {
      setImg(img - 1);
    }
  }
  
  return(
    <div>
      <button onClick={indexLeft}>Left</button>
      <img src={props.imgs[img]}
      alt="person"></img>
      <button onClick={indexRight}>Right</button>
    </div>
  );
}

function NumbersTable(props) {
  let result = [];
  for (let i = 1; i <= props.limit; i++){
    let color;
    if (i%2 !== 0){
      color = 'white';
    } else {
      color = 'red';
    }
    result.push(
      <div
      style={{
        height: '50px',
        width: '50px',
        textAlign: 'center',
        lineHeight: '50px',
        display: 'inline-block',
        backgroundColor: color,
        border: '1px solid black'
      }}
      key={'numberTable'+i}
      >{i}</div>
    );
  }
  return (
    <div>
     {result} 
    </div>
  );
}

function Facebook() {
  return (
  <div>
  {profiles.map(profile => (
        <div style={{border: "1px solid black", display: "flex", padding: 5 + "px", margin: 5 + "px"}} key={profile.firstName+profile.lastName}>
          <img src={profile.img} style={{objectFit: 'cover', width: '128px', height: "128px"}} alt="man"></img>
          <ul style={{listStyleType: "none", padding: 0, margin: 0, marginLeft: 5 + "px", textAlign: "left"}}>
            <li><b>First Name: </b><span>{profile.firstName}</span></li>
            <li><b>Last Name: </b><span>{profile.lastName}</span></li>
            <li><b>Country: </b><span>{profile.country}</span></li>
            <li><b>Type: </b><span>{profile.isStudent ? "Student" : "Teacher"}</span></li>
          </ul>
        </div>
    ))}
  </div>
  );
}

const SignupPage = (props) => {
  return (
    <form>
      <label for="email">Email</label><br />
      <input type="text" id="email" name="email" /><br />
      <label for="pwd">Password</label><br />
      <input type="password" id="pwd" name="pwd" />
    </form>
  );
}

export default App;
