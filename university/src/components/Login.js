import React, { Component } from 'react';

import { NavLink, Redirect } from 'react-router-dom';

import './../custom_css/login.css'
import LoginService from './../services/LoginService';

class Login extends Component {

    constructor(props){
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            data : { 
                username : '',
                password : ''
            },
            toDashboard: false,
        }
    }
    handleLogin(e){
        e.preventDefault();
        //this.setState(this.state);        
        const items = LoginService.getItems(this.state.data);
        items.then(res => res.json())
        .then(response => {
            console.log('Success:', JSON.stringify(response));
            const prevState = this.state;
            prevState.toDashboard = true;
            this.setState(prevState);
        })
        .catch(error => console.error('Error:', error))
    }
    componentDidMount() {

    }
    handleChange(event){
        const attribute = event.target.name;
        const prevState = this.state;
        prevState.data[attribute] = event.target.value;
        this.setState(prevState);
    }
    render() {
        if (this.state.toDashboard === true) {
            return <Redirect to='/dashboard' />
        }
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
