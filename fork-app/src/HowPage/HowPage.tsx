import React from 'react';
import {NavBar, Content, Footer} from '../shared';

interface HowPageProps{}
export function HowPage(props:HowPageProps){
  return(
    <div className="HowPage">
      <NavBar />
        How tho?
      <Footer />
    </div>
  );
}