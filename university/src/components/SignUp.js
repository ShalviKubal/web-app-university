import React, { Component } from 'react';

import './../custom_css/signup.css';
import { NavLink, Redirect } from 'react-router-dom';

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = { 
            toProfile :false
        };
        this.handleSignUp = this.handleSignUp.bind(this);   
    }
    handleSignUp(e){
        e.preventDefault();
        this.setState({toProfile: true})
    }
  render() {
    if (this.state.toProfile === true) {
        return <Redirect to='/userprofile' />
    }
    return (
        <div className='sign-up-div'>
        <form>
            <div className="sign-up"><label>Sign Up</label></div>
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
            <input type="submit" value="Sign up" onClick = {this.handleSignUp}/>
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
