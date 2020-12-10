import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainCTA />
      <Content
        title="Lorems Getsum"
        class="left"
        body="Non do Lorem esse elit anim ex labore ad laboris officia pariatur proident consequat. Dolore cillum consectetur labore sunt ullamco consectetur aliquip consectetur commodo do pariatur. Esse cillum cupidatat sit mollit reprehenderit nulla ipsum et. Labore Lorem officia dolore excepteur."
      />
      <Content
        title="Lorana Gotsum"
        class="right"
        body="Non do Lorem esse elit anim ex labore ad laboris officia pariatur proident consequat. Dolore cillum consectetur labore sunt ullamco consectetur aliquip consectetur commodo do pariatur. Esse cillum cupidatat sit mollit reprehenderit nulla ipsum et. Labore Lorem officia dolore excepteur."
      />
      <Footer />
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
      <div className="tri-one" />
      <div className="tri-two" />
      <h1 className="page-title title">The Facts <br/>of<br/> Real Knowledge</h1>
      <div className="page-logo" />
    </div>
  );
}

interface ContentProps{
  body: string,
  title?: string,
  class?: string
}
function Content(props:ContentProps){
  return(
    <div className={`Content ${props.class}`}>
      <div className="content-body">
        <h3 className={`content-title title ${props.class}`}>{props.title}</h3>
        {props.body}
      </div>
    </div>
  );
}

interface FooterProps{}
function Footer(props:FooterProps){
  return(
    <div className="Footer">

    </div>
  );
}
export default App;
