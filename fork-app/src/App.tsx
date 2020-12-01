import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainCTA />
    </div>
  );
}

interface NavBarProps{}
function NavBar(props:NavBarProps){
  return(
    <div className="NavBar">
      <ul className="nav-list">
        <li className="nav-li"><a className="nav-text" href="#home">Home</a></li>
        <li className="nav-li"><a className="nav-text" href="#why">The Importance of Fact Checking</a></li>
        <li className="nav-li"><a className="nav-text" href="#how">How to Fact Check</a></li>
        <li className="nav-li"><a className="nav-text" href="#resources">Helpful Resources</a></li>
      </ul>
    </div>
  );
}

interface MainCTAProps{}
function MainCTA(props:MainCTAProps){
  return(
    <div className="MainCTA">
      <div className="hero-image" />
      <h1 className="page-title">The Facts of Real Knowledge</h1>
      <div className="page-logo" />
    </div>
  );
}

export default App;
