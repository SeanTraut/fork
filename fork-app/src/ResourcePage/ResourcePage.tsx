import React from 'react';
import {NavBar, Content, Footer} from '../shared';

interface ResourcePageProps{}
export function ResourcePage(props:ResourcePageProps){
  return(
    <div className="ResourcePage">
      <NavBar />
        Help tho?
      <Footer />
    </div>
  );
}