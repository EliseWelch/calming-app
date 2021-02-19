import React, { Component } from 'react';
import twoMin from '../components/buttons/twoMin/twoMin';
import fiveMin from '../components/buttons/fiveMin/fiveMin';
import tenMin from '../components/buttons/tenMin/tenMin';
import Timer from '../components/buttons/Timer/Timer';
import Beach from '../components/buttons/Beach/Beach';
import Rain from '../components/buttons/Rain/Rain';
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
      <div>
        <twoMin />
        <fiveMin />
        <tenMin />
        <Timer />
        <Beach />
        <Rain />
      </div>
    );
  }
}

export default App;
