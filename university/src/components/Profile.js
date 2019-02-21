import React, { Component } from 'react';

import './../custom_css/profile.css';

class Profile extends Component {
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
              <div className="input-div"><input  name="email"/></div>
          </div>
          <div className="input-group">                
              <div className="input-label"><label> Role </label></div>
              <div className="input-div"><input  name="email"/></div>
          </div>
          <div className="input-group">                
              <div className="input-label"><label>Date of Birth </label></div>
              <div className="input-div"><input type="password" name="verifypassword"/></div>
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
