import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import SignUp from './components/SignUp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <Switch>
          <Route path = "/login" exact component={Login}></Route>
          <Route path = "/forgotpassword" exact component={ForgotPassword}></Route>
          <Route path = "/signup" exact component={SignUp}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
