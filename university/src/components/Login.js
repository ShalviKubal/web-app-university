import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

import './../custom_css/login.css'
import LoginService from './../services/LoginService';

class Login extends Component {

    constructor(props){
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            username : '',
            password : ''
        }
    }
    handleLogin(e){
        e.preventDefault();
        this.setState(this.state);        
        const items = LoginService.getItems(this.state);
        items.then(res => res.json())
        .then(response => console.log('Success:', JSON.stringify(response)))
        .catch(error => console.error('Error:', error))
    }
    componentDidMount() {

    }
    handleChange(event){
        const attribute = event.target.name
        this.setState({
            [attribute] : event.target.value
        });
    }
    render() {
        return (
            <div className='login-div'>
                <form>
                    <div className="sign-in"><label>Sign In</label></div>
                    <div className="input-group">                
                        <div className="input-label"><label> Username </label></div>
                        <div className="input-div"><input type="text" name="username" onChange = { this.handleChange }/></div>
                    </div>
                    <div className="input-group">                
                        <div className="input-label"><label> Password </label></div>
                        <div className="input-div"><input type="password" name="password" onChange = { this.handleChange }/></div>
                    </div>
                    <div className="input-group">
                    <input type="submit" value="Sign In" onClick = {this.handleLogin}/>
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
