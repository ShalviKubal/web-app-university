import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

import './../custom_css/login.css'

class Login extends Component {
  render() {
    return (
        <div className='login-div'>
            <form>
                <div><label>Sign In</label></div>
                <div>                
                    <label> Username </label>
                    <input type="text" name="username" />
                </div>
                <div>                
                    <label> Password </label>
                    <input type="password" name="password" />
                </div>
                <div>
                    <input type="submit" value="Sign In" />
                </div>
                <div>
                    <NavLink to="/forgotpassword">Forgot Password?</NavLink>
                    <NavLink to="/signup">Sign up</NavLink>
                </div>
            </form>
        </div>
    );
  }
}

export default Login;
