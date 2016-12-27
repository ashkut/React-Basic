/**
 * Created by ttn on 27/12/16.
 *
 * Create a component called "Header" which either displays the current logged in username (if a user is logged in) or a "Login" button (if no user is logged in) in the navbar. Use a hardcoded global variable "isUserLoggedIn" to check if user is logged in or not.Create a component called "Header" which either displays the current logged in username (if a user is logged in) or a "Login" button (if no user is logged in) in the navbar.
 * Use a hardcoded global variable "isUserLoggedIn" to check if user is logged in or not.
 */
import React from 'react';
import {render} from 'react-dom';

export default class Header extends React.Component {

  constructor() {
    super();
    this.state ={
      loggedInUser : ""

    }
  }

  setLogInUser(){

    this.setState({loggedInUser : true});

  }


  render() {

    return (

      this.state.loggedInUser === true ?
        <div>The Logged in user is : ABC</div> :
        <div>
          <button title="Login" onClick={this.setLogInUser()}/>
        </div>

    );

  }
}

