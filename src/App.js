import React, { Component } from "react";
import { BrowserRouter, Switch} from "react-router-dom";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import Home from './components/Home';
import Author from './components/Author';

class App extends Component {

  render() {
    
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/:author' component={Author} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
