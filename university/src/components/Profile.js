import React, { Component } from 'react';

import './../custom_css/profile.css';
import DatePicker from 'react-date-picker';

class Profile extends Component {
  constructor(props){
    super(props);
    this.state = {
      date : new Date()
    }
  }
  handleDateInput = date => this.setState({ date })
  render() {
    return (
      <div className='profile-div'>
      <form>
          <div className="profile"><label>Profile</label></div>
          <div className="input-group">                
              <div className="input-label"><label> Username </label></div>
              <div className="input-div"><input type="text" name="username" /></div>
          </div>
          <div className="input-group">                
              <div className="input-label"><label> Phone </label></div>
              <div className="input-div"><input  name="password"/></div>
          </div>
          <div className="input-group">                
              <div className="input-label"><label> Email </label></div>
              <div className="input-div"><input  name="email" type="email"/></div>
          </div>
          <div className="input-group">                
              <div className="input-label"><label> Role </label></div>
              <div className="input-div"><input  name="email"/></div>
          </div>
          <div className="input-group">                
              <div className="input-label"><label>Date of Birth </label></div>
              <DatePicker onChange={this.handleDateInput} value={this.state.date}/>
          </div>
          <div className="input-group">
            <input type="submit" value="Update"/>
          </div>
          <div className="input-group">
            <input type="submit" value="Logout"/>
          </div>
      </form>
  </div>
    );
  }
}

export default Profile;
