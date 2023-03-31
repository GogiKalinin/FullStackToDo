import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

class App extends Component {
  
  render() {
    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash)
    console.log(cash)
    
    return (
      <div className="App">
        TODO
      </div>
    );
  }
}

export default App;
