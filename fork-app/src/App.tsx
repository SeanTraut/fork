import React from 'react';
import './App.scss';
import {HomePage} from './HomePage/HomePage';
import {WhyPage} from './WhyPage/WhyPage';
import {HowPage} from './HowPage/HowPage';
import {ResourcePage} from './ResourcePage/ResourcePage';

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
  
  hash_changed = () => {
    let url = window.location.hash.slice(1);
    console.log(url);

    let [page] = url.split("/");

    if(!page) return;
    
    let new_state = {...this.state, page: page};

    this.setState(new_state);
  };

  componentDidMount(){
    window.addEventListener("hashchange", this.hash_changed);
    this.hash_changed();

    app = this;
  };

  render(){
    let page;
    if(this.state.page === "home"){
      page = <HomePage />;
    }else if(this.state.page === "why"){
      page = <WhyPage />
    }else if(this.state.page === "how"){
      page = <HowPage />
    }else if(this.state.page === "resources"){
      page = <ResourcePage />
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
