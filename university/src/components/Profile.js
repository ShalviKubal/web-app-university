import React, { Component } from 'react';

import './../custom_css/profile.css';
import DatePicker from 'react-date-picker';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

class ProfileUpdateSuccess extends Component {
  render(){
      return (             
        <div className="profile-update-success"><label> Profile successfully saved </label></div>
      );
  }
};
class Profile extends Component {
  constructor(props){
    super(props);
    this.handleChangePhoneInput = this.handleChangePhoneInput.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.state = {
      date : new Date(),
      phone : '',
      roles : [ 'Faculty' , 'Student', 'Admin'],
      showSuccess : false
    }
  }
  handleChangeDateInput = date => this.setState({ date })
  handleChangePhoneInput(value) {
    this.setState({
       phone: value
    });
 }
 handleUpdate(event){
   event.preventDefault();
   this.setState({
     showSuccess: true
   });
 }
  render() {
    let optionItems = this.state.roles.map((role) => <option key={role}>{role}</option>);

    return (
      <div className='profile-div'>
      <form>
          <div className="profile"><label>Profile</label></div>
          { this.state.showSuccess ? <ProfileUpdateSuccess /> : null }
          <div className="input-group">                
              <div className="input-label"><label> Username </label></div>
              <div className="input-div"><input type="text" name="username" disabled/></div>
          </div>
          <div className="input-group">                
              <div className="input-label"><label> Phone </label></div>
              <div className="input-div"><PhoneInput placeholder="Enter phone number" value={ this.state.phone } onChange={ phone => this.setState({ phone }) } /></div>
          </div>
          <div className="input-group">                
              <div className="input-label"><label> Email </label></div>
              <div className="input-div"><input  name="email" type="email"/></div>
          </div>
          <div className="input-group">                
              <div className="input-label"><label> Role </label></div>
              <div className="input-div">             
                <select className = "select-role">
                  {optionItems}
                </select>
              </div>
          </div>
          <div className="input-group">                
              <div className="input-label"><label>Date of Birth </label></div>
              <DatePicker onChange={this.handleChangeDateInput} value={this.state.date}/>
          </div>
          <div className="input-group">
            <input className = "update-button" type="submit" value="Update" onClick = {this.handleUpdate}/>
          </div>
          <div className="input-group">
            <input className = "logout-button" type="submit" value="Logout"/>
          </div>
      </form>
  </div>
    );
  }
}

export default Profile;
