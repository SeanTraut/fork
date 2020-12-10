import React from 'react';
import {NavBar, Content, Footer} from '../shared';

interface WhyPageProps{}
export function WhyPage(props:WhyPageProps){
  return(
    <div className="WhyPage">
      <NavBar />
        Why tho?
      <Footer />
    </div>
  );
}