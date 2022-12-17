import React, { Component } from 'react'
import özl from "./özl";
import Gkts from "./Gkts";
// import "./App.css";
import "./Deneme.css";


 class App extends Component {
  render() 
  {
    return (
      <div className='container'>
        <h1>Merhaba Dünya</h1>
        <özl/>
        <Gkts/>
      </div>
    )
  }
}
export default App;