import React from 'react';
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
  )
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
  )
}

function Random(props) {
  let num = Math.floor((Math.random() * props.max) + props.min);
  return (
    <h3 style={{border: "1px solid black", textAlign: 'left', padding: '5px', margin: '5px'}}>
      Random value between {props.min} and {props.max} ={'>'} {num}
    </h3>
  )
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
    <h3 style={{textAlign: 'center', border: "1px solid black", padding: '20px', margin: '5px', backgroundColor: `rgb(${props.r},${props.g},${props.b})`}}>
      rgb({props.r},{props.g},{props.b}) <br></br>
      {rgbToHex(props.r, props.g, props.b)}
    </h3>
  )
}

function CreditCard(props) {
  let cards = {
    'Visa': visa,
    'Master Card': mastercard
  }
  let number = props.number.toString()
  let year = props.expirationYear.toString()
  return (
    <div style={{width: '300px', backgroundColor: props.bgColor, color: 'white', padding: '10px', margin: '20px', display: 'inline-block', borderRadius: '10px'}}>
      <div style = {{textAlign: 'right'}}><img src={cards[props.type]} alt='Card Provider' style={{maxWidth: '100%', height: '20px'}}></img></div>
      <div style={{textAlign: 'center', fontSize: '1.9em', margin: '20px 0', mixBlendMode: 'difference'}}>•••• •••• •••• {number.substring(number.length - 4)}</div>
      <div style={{mixBlendMode: 'difference'}}>
        <span>Expires: {props.expirationMonth}/{year.substring(2)}</span>
        <span style={{marginLeft: '20px'}}>{props.bank}</span>
      </div>
      <div style={{mixBlendMode: 'difference'}}>{props.owner}</div>
    </div>
  )
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
  )
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
  )
}

class LikeButton extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      likes: 0,
      handleClick: function(e){
        this.setState({likes: this.likes++});
        console.log(this.likes)
      }
    }
  }
  render(){
  return (
    <button onClick={this.handleClick}>
      {this.likes} Likes
    </button>
  )
  }
}

export default App;
