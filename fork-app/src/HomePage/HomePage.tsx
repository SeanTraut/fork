import React from 'react';
import {NavBar, Content, Footer} from '../shared';

interface HomePageProps{}
export function HomePage(props:HomePageProps) {
  return (
    <div className="HomePage">
      <NavBar />
      <MainCTA />
      <div className="page-items">
        <Content
          title='What really is "Fake News"?'
          class="left"
          body="Non do Lorem esse elit anim ex labore ad laboris officia pariatur proident consequat. Dolore cillum consectetur labore sunt ullamco consectetur aliquip consectetur commodo do pariatur. Esse cillum cupidatat sit mollit reprehenderit nulla ipsum et. Labore Lorem officia dolore excepteur."
        />
        <Content
          title="But why should I care?"
          class="right"
          body="Non do Lorem esse elit anim ex labore ad laboris officia pariatur proident consequat. Dolore cillum consectetur labore sunt ullamco consectetur aliquip consectetur commodo do pariatur. Esse cillum cupidatat sit mollit reprehenderit nulla ipsum et. Labore Lorem officia dolore excepteur."
        />
        <Footer />
      </div>
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