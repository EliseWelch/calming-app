import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
		super()
		this.state = {
		  two: '',
      five: '',
      ten: '',
      timer: '',
      beach: '',
      rain: ''
		}
	}

  render() {
    return(
      <div className="app">
        <div className="twoMinBtn"></div>
        <div className="fiveMinBtn"></div>
        <div className="tenMinBtn"></div>
        <div className="timer"></div>
        <div className="rain"></div>
        <div className="beach"></div>
      </div>
    );
  }
}

export default App;
