import React from 'react';

interface NavBarProps{}
export function NavBar(props:NavBarProps){
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

interface ContentProps{
  body: string,
  title?: string,
  class?: string
}
export function Content(props:ContentProps){
  return(
    <div className={`Content ${props.class}`}>
      <div className="content-body">
        <h3 className={`content-title title ${props.class}`}>{props.title}</h3>
        {props.body}
      </div>
    </div>
  );
}

export interface FooterProps{}
export function Footer(props:FooterProps){
  return(
    <div className="Footer">
    </div>
  );
}