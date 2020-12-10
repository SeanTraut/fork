import React from 'react';
import './App.scss';
import {HomePage} from './HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

interface MainCTAProps{}
function MainCTA(props:MainCTAProps){
  return(
    <div className="MainCTA">
      <div className="tri-one" />
      <div className="tri-two" />
      <h1 className="page-title title">The Facts <br/>of<br/> Real Knowledge</h1>
      <div className="page-logo" />
    </div>
  );
}

export default App;
