import React, { Component } from 'react';

import './../custom_css/signup.css';
import { NavLink } from 'react-router-dom';

class SignUp extends Component {
  render() {
    return (
        <div className='sign-up-div'>
        <form>
            <div className="sign-in"><label>Sign Up</label></div>
            <div className="input-group">                
                <div className="input-label"><label> Username </label></div>
                <div className="input-div"><input type="text" name="username" /></div>
            </div>
            <div className="input-group">                
                <div className="input-label"><label> Password </label></div>
                <div className="input-div"><input type="password" name="password"/></div>
            </div>
            <div className="input-group">                
                <div className="input-label"><label>Verify Password </label></div>
                <div className="input-div"><input type="password" name="verifypassword"/></div>
            </div>
            <div className="input-group">
            <input type="submit" value="Sign In"/>
            </div>
            <div className="input-group">
                <NavLink to="/login" exact >Login</NavLink>
            </div>
        </form>
    </div>
    );
  }
}

export default SignUp;
