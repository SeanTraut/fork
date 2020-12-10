import React from 'react';
import './App.scss';
import {HomePage} from './HomePage/HomePage';

export let app:App | undefined = undefined;

export function rerender(){
  if(app){
    app.forceUpdate();
  };
}

interface AppState{
  page: string
}

class App extends React.Component<{}> {
  state: AppState = {
    page:"home"
  };

  render(){
    let page;
    if(this.state.page === "home"){
      page = <HomePage />;
    }else{
      page = <div>404: Page Not Found</div>
    }

    return(
      <div className="App">
        {page}
      </div>
    );
  }
}

export default App;
