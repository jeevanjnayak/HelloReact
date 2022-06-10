

import React from "react";
import './App.css';
import logo from 'D:/React/hello/src/Bridgelabzz.jpg'
import Home from "./component/Home";
import ContactUs from "./component/ContactUs";
import About from "./component/About";
import { Route, Routes } from "react-router-dom";



class App extends React.Component {
  url = 'https://www.bridgelabz.com/'
  constructor(){
    super()
    this.state = {
      userName:''
    }
  }
  
  
  onClick = ($event) => {
    console.log("save button is clicked", $event);
    window.open(this.url,"_blank");
  }

  onNameChange = (event)=> {
    console.log("value is ",event.target.value);
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');

    this.setState({userName: event.target.value})
    if(nameRegex.test(event.target.value)){
      this.setState({nameError: ''})
    } else{
      this.setState({nameError: 'Name is Incorrect'})
    }
  }

  render(){
    return(
      <div>
        <div>
          <h1>Hello {this.state.userName} from Bridgelabz</h1>
          <img src={logo} onClick={this.onClick}
          className = "App-logo" alt ="logo"/>
        </div>
        <div className="App">
          <br/><input onChange={this.onNameChange}/>
          <span className="error-output">{this.state.nameError}</span>
        </div>
        <div className="Apps">
          <Routes>
            <Route path="/" element={ <Home/> }/>
            <Route path="about" element={ <About/> }/>
            <Route path="contact" element={ <ContactUs/> }/>
          </Routes>
        </div>
      </div>
    );
  } 
}
// function App(){
//   return(
//     <div className="App">
//       <Routes>
//         <Route path="/" element={ <Home/> }/>
//         <Route path="about" element={ <About/> }/>
//         <Route path="contact" element={ <ContactUs/> }/>
//       </Routes>
//     </div>
//   )
// }

export default App;
