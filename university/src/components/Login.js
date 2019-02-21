import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

import './../custom_css/login.css'
import LoginService from './../services/LoginService';

class Login extends Component {
    componentDidMount() {
        const items = LoginService.getItems();
        items.then(res => res.json())
        .then(response => console.log('Success:', JSON.stringify(response)))
        .catch(error => console.error('Error:', error))
      }
  render() {
    return (
        <div className='login-div'>
            <form>
                <div className="sign-in"><label>Sign In</label></div>
                <div className="input-group">                
                    <div className="input-label"><label> Username </label></div>
                    <div className="input-div"><input type="text" name="username" /></div>
                </div>
                <div className="input-group">                
                    <div className="input-label"><label> Password </label></div>
                    <div className="input-div"><input type="password" name="password" /></div>
                </div>
                <div className="input-group">
                   <input type="submit" value="Sign In" />
                </div>
                <div className="input-group">
                    <NavLink to="/forgotpassword" exact >Forgot Password?</NavLink>
                    <NavLink to="/signup" exact >Sign up</NavLink>
                </div>
            </form>
        </div>
    );
  }
}

export default Login;
